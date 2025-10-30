"use client"

import React, {
  ReactNode,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react"

type CartItem = {
  id: string
  name: string
  price: number
  qty: number
  notes?: string
}

type Address = {
  id: string
  label: string
  address: string
  phone: string
}

type Step = {
  id: string
  label: string
  completed: boolean
}

export type PlaceOrderResult = {
  success: boolean
  orderId?: string
  error?: string
}

export interface CheckoutContextType {
  // cart
  cart: CartItem[]
  addToCart: (item: Omit<CartItem, "qty"> & { qty?: number }) => void
  updateQty: (id: string, qty: number) => void
  removeFromCart: (id: string) => void

  // addresses
  addresses: Address[]
  selectedAddressId: string
  setSelectedAddressId: (id: string) => void
  manualAddress: string
  setManualAddress: (value: string) => void
  contactPhone: string
  setContactPhone: (value: string) => void

  // payment & delivery options
  paymentMethod: "card" | "cash" | "apple"
  setPaymentMethod: (m: "card" | "cash" | "apple") => void
  cardName: string
  setCardName: (v: string) => void
  cardNumber: string
  setCardNumber: (v: string) => void
  contactless: boolean
  setContactless: (v: boolean) => void

  // scheduling
  asap: boolean
  setAsap: (v: boolean) => void
  scheduledTime: string
  setScheduledTime: (v: string) => void

  // promo
  promo: string
  setPromo: (p: string) => void
  appliedPromo: string | null
  setAppliedPromo: (p: string | null) => void

  // derived totals
  subtotal: number
  tax: number
  deliveryFee: number
  discount: number
  total: number

  // steps
  steps: Step[]
  markStepComplete: (id: string) => void
  resetSteps: () => void

  // actions
  placeOrder: () => Promise<PlaceOrderResult>
  resetAll: () => void
}

const CheckoutContext = createContext<CheckoutContextType | undefined>(
  undefined
)

// Mock data (safe for client)
const MOCK_CART: CartItem[] = [
  {
    id: "p1",
    name: "Margherita Pizza",
    price: 8.5,
    qty: 2,
    notes: "Extra cheese",
  },
  { id: "p2", name: "Fries", price: 3.0, qty: 1 },
  { id: "p3", name: "Coke (500ml)", price: 2.5, qty: 1 },
]

const MOCK_ADDRESSES: Address[] = [
  {
    id: "home",
    label: "Home",
    address: "123 Main St, Springfield",
    phone: "+1 555 987 6543",
  },
  {
    id: "work",
    label: "Work",
    address: "456 Office Rd, Metropolis",
    phone: "+1 555 123 4567",
  },
]

// simple promo map (demo)
const PROMOS: Record<string, number> = {
  WELCOME10: 10,
  FREEDEL: 100,
}

export function CheckoutProvider({ children }: { children: ReactNode }) {
  // cart
  const [cart, setCart] = useState<CartItem[]>(MOCK_CART)

  // addresses
  const [addresses] = useState<Address[]>(MOCK_ADDRESSES)
  const [selectedAddressId, setSelectedAddressId] = useState<string>(
    addresses[0].id
  )
  const [manualAddress, setManualAddress] = useState<string>("")
  const [contactPhone, setContactPhone] = useState<string>(addresses[0].phone)

  // payment & delivery options
  const [paymentMethod, setPaymentMethod] = useState<"card" | "cash" | "apple">(
    "card"
  )
  const [cardName, setCardName] = useState<string>("")
  const [cardNumber, setCardNumber] = useState<string>("")
  const [contactless, setContactless] = useState<boolean>(true)

  // scheduling
  const [asap, setAsap] = useState<boolean>(true)
  const [scheduledTime, setScheduledTime] = useState<string>("")

  // promo
  const [promo, setPromo] = useState<string>("")
  const [appliedPromo, setAppliedPromo] = useState<string | null>(null)

  // steps
  const [steps, setSteps] = useState<Step[]>([
    { id: "cart", label: "Cart", completed: true }, // cart completed by default
    { id: "address", label: "Delivery Address", completed: false },
    { id: "payment", label: "Payment Method", completed: false },
    { id: "review", label: "Review & Confirm", completed: false },
  ])

  // derived totals
  const subtotal = useMemo(
    () => cart.reduce((s, it) => s + it.price * it.qty, 0),
    [cart]
  )
  const tax = useMemo(() => +(subtotal * 0.07).toFixed(2), [subtotal])
  const deliveryFee = useMemo(() => (subtotal > 25 ? 0 : 3.5), [subtotal])
  const discount = useMemo(() => {
    if (!appliedPromo) return 0
    const pct = PROMOS[appliedPromo] ?? 0
    return +(subtotal * (pct / 100)).toFixed(2)
  }, [subtotal, appliedPromo])
  const effectiveDeliveryFee = appliedPromo === "FREEDEL" ? 0 : deliveryFee
  const total = useMemo(
    () => +(subtotal - discount + tax + effectiveDeliveryFee).toFixed(2),
    [subtotal, discount, tax, effectiveDeliveryFee]
  )

  // cart actions
  function addToCart(item: Omit<CartItem, "qty"> & { qty?: number }) {
    setCart((prev) => {
      const exists = prev.find((p) => p.id === item.id)
      if (exists) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, qty: p.qty + (item.qty ?? 1) } : p
        )
      }
      return [...prev, { ...item, qty: item.qty ?? 1 }]
    })
  }

  function updateQty(id: string, qty: number) {
    setCart((prev) =>
      prev.map((p) => (p.id === id ? { ...p, qty: Math.max(1, qty) } : p))
    )
  }

  function removeFromCart(id: string) {
    setCart((prev) => prev.filter((p) => p.id !== id))
  }

  // steps
  function markStepComplete(id: string) {
    setSteps((prev) =>
      prev.map((s) => (s.id === id ? { ...s, completed: true } : s))
    )
  }

  function resetSteps() {
    setSteps((prev) => prev.map((s) => ({ ...s, completed: false })))
  }

  // place order (mock)
  async function placeOrder(): Promise<PlaceOrderResult> {
    // Basic client-side validation (demo)
    if (!selectedAddressId && manualAddress.trim() === "") {
      return { success: false, error: "Address required" }
    }
    if (
      paymentMethod === "card" &&
      (!cardName || cardNumber.replace(/\s/g, "").length < 12)
    ) {
      return { success: false, error: "Invalid card details" }
    }

    // simulate network latency
    await new Promise((r) => setTimeout(r, 900))

    const orderId = `MOCK-${Math.floor(Math.random() * 900000 + 100000)}`
    // optional: reset cart or steps here as demo
    return { success: true, orderId }
  }

  function resetAll() {
    setCart(MOCK_CART)
    setSelectedAddressId(addresses[0].id)
    setManualAddress("")
    setContactPhone(addresses[0].phone)
    setPaymentMethod("card")
    setCardName("")
    setCardNumber("")
    setContactless(true)
    setAsap(true)
    setScheduledTime("")
    setPromo("")
    setAppliedPromo(null)
    resetSteps()
  }

  // context value
  const value: CheckoutContextType = {
    cart,
    addToCart,
    updateQty,
    removeFromCart,

    addresses,
    selectedAddressId,
    setSelectedAddressId,
    manualAddress,
    setManualAddress,
    contactPhone,
    setContactPhone,

    paymentMethod,
    setPaymentMethod,
    cardName,
    setCardName,
    cardNumber,
    setCardNumber,
    contactless,
    setContactless,

    asap,
    setAsap,
    scheduledTime,
    setScheduledTime,

    promo,
    setPromo,
    appliedPromo,
    setAppliedPromo,

    subtotal,
    tax,
    deliveryFee,
    discount,
    total,

    steps,
    markStepComplete,
    resetSteps,

    placeOrder,
    resetAll,
  }

  return (
    <CheckoutContext.Provider value={value}>
      {children}
    </CheckoutContext.Provider>
  )
}

export function useCheckout(): CheckoutContextType {
  const ctx = useContext(CheckoutContext)
  if (!ctx) {
    throw new Error("useCheckout must be used inside a CheckoutProvider")
  }
  return ctx
}
