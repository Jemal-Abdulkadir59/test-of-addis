"use client"

import { ReactNode, createContext, useContext, useState } from "react"

type CartItem = { id: string; name: string; price: number; qty: number }
type Address = { id: string; label: string; address: string; phone: string }

interface CheckoutContextType {
  cart: CartItem[]
  addToCart: (item: CartItem) => void
  removeFromCart: (id: string) => void
  addresses: Address[]
  selectedAddressId: string
  setSelectedAddressId: (id: string) => void
  manualAddress: string
  setManualAddress: (value: string) => void
  contactPhone: string
  setContactPhone: (value: string) => void

  // --- Payment & Delivery Options ---
  paymentMethod: "card" | "cash"
  setPaymentMethod: (method: "card" | "cash") => void
  cardName: string
  setCardName: (value: string) => void
  cardNumber: string
  setCardNumber: (value: string) => void
  contactless: boolean
  setContactless: (value: boolean) => void

  // --- Delivery Scheduling ---
  asap: boolean
  setAsap: (value: boolean) => void
  scheduledTime: string
  setScheduledTime: (value: string) => void

  // --- Checkout Steps ---
  steps: { id: string; label: string; completed: boolean }[]
  markStepComplete: (id: string) => void
  resetSteps: () => void
}

const CheckoutContext = createContext<CheckoutContextType>(
  {} as CheckoutContextType
)

export function CheckoutProvider({ children }: { children: ReactNode }) {
  // --- Cart state ---
  const [cart, setCart] = useState<CartItem[]>([])

  // ✅ Added `label` field
  const [addresses] = useState<Address[]>([
    {
      id: "home",
      label: "Home",
      address: "123 Main St",
      phone: "+15559876543",
    },
    {
      id: "office",
      label: "Office",
      address: "456 Business Rd",
      phone: "+15557654321",
    },
  ])

  const [selectedAddressId, setSelectedAddressId] = useState("home")
  const [manualAddress, setManualAddress] = useState("")
  const [contactPhone, setContactPhone] = useState(addresses[0].phone)

  // --- Payment state ---
  const [paymentMethod, setPaymentMethod] = useState<"card" | "cash">("card")
  const [cardName, setCardName] = useState("")
  const [cardNumber, setCardNumber] = useState("")
  const [contactless, setContactless] = useState(false)

  // --- Delivery scheduling ---
  const [asap, setAsap] = useState(true)
  const [scheduledTime, setScheduledTime] = useState("")

  // --- Checkout steps ---
  const [steps, setSteps] = useState([
    { id: "address", label: "Delivery Address", completed: false },
    { id: "payment", label: "Payment Method", completed: false },
    { id: "review", label: "Review & Confirm", completed: false },
  ])

  function markStepComplete(id: string) {
    setSteps((prev) =>
      prev.map((step) => (step.id === id ? { ...step, completed: true } : step))
    )
  }

  function resetSteps() {
    setSteps((prev) => prev.map((s) => ({ ...s, completed: false })))
  }

  // --- Cart logic ---
  function addToCart(item: CartItem) {
    setCart((prev) => {
      const exists = prev.find((i) => i.id === item.id)
      if (exists)
        return prev.map((i) =>
          i.id === item.id ? { ...i, qty: i.qty + 1 } : i
        )
      return [...prev, { ...item, qty: 1 }]
    })
  }

  function removeFromCart(id: string) {
    setCart((prev) => prev.filter((i) => i.id !== id))
  }

  return (
    <CheckoutContext.Provider
      value={{
        cart,
        addToCart,
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
        steps,
        markStepComplete,
        resetSteps,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  )
}

export function useCheckout() {
  return useContext(CheckoutContext)
}
