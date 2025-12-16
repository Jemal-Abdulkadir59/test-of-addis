"use client"

import { useEffect, useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import {
  useCreateAddressMutation,
  useCreateOrderItemsMutation,
  useCreateOrderMutation,
  useGetUserAddressQuery,
  useGetUserByIdQuery,
  useGetUserCartQuery,
} from "@/generated/graphql"
import { getSession } from "next-auth/react"
import { useLocation, useNavigate } from "react-router-dom"
import { ArrowLeft } from "lucide-react"

import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { AddressForm } from "./_components/address-form"
import { DeliveryTimePicker } from "./_components/delivery-timePicker"
import { OrderSummaryCard } from "./_components/order-summary-card"
import { OrderTotalFooter } from "./_components/order-total-footer"
import { PaymentMethodCard } from "./_components/payment-method-card"
import { PromoCodeInput } from "./_components/promo-codeInput"

interface CartItem {
  id: string
  type: string
  image: string
  title: string
  price: string
  quantity: number
  discount?: string
}

const Checkout = () => {
  const navigate = useNavigate()
  // const location = useLocation()
  const { toast } = useToast()

  const router = useRouter()
  const pathname = usePathname()
  const [userId, setUserId] = useState<string | null>(null)

  // Use mock cart if none provided
  // const cartItems = (location.state?.cartItems || mockCartItems) as CartItem[]
  const [scheduledDate, setScheduledDate] = useState<string>("")
  const [scheduledTime, setScheduledTime] = useState<string>("")
  const [paymentMethod, setPaymentMethod] = useState("card-1")
  const [deliveryTime, setDeliveryTime] = useState("asap")
  const [promoDiscount, setPromoDiscount] = useState(0)
  const [promoCode, setPromoCode] = useState("")
  const [formData, setFormData] = useState({
    customerName: "",
    customerEmail: "",
    customerPhone: "",
    deliveryAddress: "",
    apartment: "",
    deliveryInstructions: "",
  })

  // console.log(formData, paymentMethod, deliveryTime, promoDiscount, "formdata")
  //Query cart items from backend when ready
  const {
    data,
    loading: loadingCart,
    error,
  } = useGetUserCartQuery({
    variables: { user_id: userId! },
    skip: !userId, // 🚫 skip until userId is ready
  })

  const [createOrder, { loading }] = useCreateOrderMutation()
  const [insertOrderItems, { loading: loadingInsert }] =
    useCreateOrderItemsMutation()
  const [createAddress, { loading: loadingAddress }] =
    useCreateAddressMutation()
  const { data: addressData, loading: loadingAddressData } =
    useGetUserAddressQuery({
      variables: { user_id: userId! },
      skip: !userId,
    })

  const cartItems = data?.cart || []

  const subtotal = cartItems.reduce(
    (sum, item) => sum + parseFloat(item.price_at_purchase) * item.quantity,
    0
  )
  const deliveryFee = 2.99
  const tax = subtotal * 0.2
  const discountAmount = (subtotal * promoDiscount) / 100
  const total = subtotal + deliveryFee + tax - discountAmount

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  useEffect(() => {
    ;(async () => {
      const session = await getSession()
      if (session?.user?.id) {
        setUserId(session.user.id)
      }
    })()
  }, [])

  const handleCheckout = async () => {
    try {
      if (
        !formData.customerName ||
        !formData.customerPhone ||
        !formData.deliveryAddress
      ) {
        toast({
          title: "Missing information",
          description: "Please fill in all required fields.",
          variant: "destructive",
        })
        return
      }

      const session = await getSession()
      if (!session) return router.push(`/auth/sign-in?redirectTo=${pathname}`)

      //Query cart items from backend when ready
      const { data, loading, error } = useGetUserCartQuery({
        variables: { user_id: userId! },
        skip: !userId, // 🚫 skip until userId is ready
      })

      const cartItems = data?.cart || []

      if (!cartItems || cartItems.length === 0) {
        toast({
          title: "Cart empty",
          description: "Add items to your cart before checking out.",
          variant: "default",
        })
        return
      }

      const total = cartItems.reduce(
        (sum, i) => sum + i.quantity * i.price_at_purchase,
        0
      )

      //  2. Create order (wrap variables under `variables` and use correct names)
      const orderRes = await createOrder({
        variables: {
          user_id: session.user.id,
          total_amount: total,
          delivery_address: formData.deliveryAddress,
          delivery_instructions: formData.deliveryInstructions,
          phone: formData.customerPhone,
          delivery_time: deliveryTime,
          scheduled_date: scheduledDate,
          scheduled_time: scheduledTime,
          promo_code: promoCode,
        },
      })

      const orderId = orderRes.data?.insert_orders_one?.id
      if (!orderId) {
        toast({
          title: "Error",
          description: "Failed to create order. Please try again.",
          variant: "destructive",
        })
        return
      }

      // 3. Insert order_items (build from cartItems)
      // Build and insert each order item using the mutation's expected variables
      await Promise.all(
        cartItems.map((item) =>
          insertOrderItems({
            variables: {
              order_id: orderId,
              menu_item_id: item.menu_item.id,
              quantity: item.quantity,
              price_at_purchase: item.price_at_purchase,
            },
          })
        )
      )
      // 4. create address
      // If there's no matching address, create a new one
      const hasMatchingAddress = addressData?.address?.some(
        (addr: any) =>
          addr &&
          addr.customer_phone === formData.customerPhone &&
          addr.delivery_address === formData.deliveryAddress &&
          addr.delivery_instructions === formData.deliveryInstructions &&
          addr.apartment === formData.apartment
      )
      if (!hasMatchingAddress) {
        await createAddress({
          variables: {
            user_id: session.user.id,
            customer_phone: formData.customerPhone,
            delivery_address: formData.deliveryAddress,
            delivery_instructions: formData.deliveryInstructions,
            place_type: "home",
            apartment: formData.apartment,
          },
        })
      }
      // 5. Redirect to Stripe Checkout Session
      const resp = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          orderId,
          total,
          userId,
        }),
      })

      const { url } = await resp.json()
      if (url) router.push(url)
    } catch (error) {
      console.error("Checkout failed:", error)
      toast({
        title: "Error",
        description: "Checkout failed. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <header className="bg-background border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => router.push("/menu")}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-2xl font-bold">Checkout</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <OrderSummaryCard
              items={cartItems}
              onEditItems={() => router.push("/menu")}
              loadingCart={loadingCart}
            />

            <AddressForm
              formData={formData}
              onInputChange={handleInputChange}
            />

            <PaymentMethodCard
              selectedMethod={paymentMethod}
              onMethodChange={setPaymentMethod}
            />

            <DeliveryTimePicker
              selectedTime={deliveryTime}
              scheduledDate={scheduledDate}
              scheduledTime={scheduledTime}
              setScheduledDate={setScheduledDate}
              setScheduledTime={setScheduledTime}
              onTimeChange={setDeliveryTime}
            />

            <PromoCodeInput
              onPromoApplied={setPromoDiscount}
              setPromoCode={setPromoCode}
              promoCode={promoCode}
            />
          </div>

          <div className="lg:col-span-1">
            <OrderTotalFooter
              subtotal={subtotal}
              deliveryFee={deliveryFee}
              tax={tax}
              discount={discountAmount}
              total={total}
              loading={loading}
              onCheckout={handleCheckout}
            />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Checkout

// const handleSubmit = async () => {
//   if (
//     !formData.customerName ||
//     !formData.customerEmail ||
//     !formData.customerPhone ||
//     !formData.deliveryAddress
//   ) {
//     toast({
//       title: "Missing information",
//       description: "Please fill in all required fields.",
//       variant: "destructive",
//     })
//     return
//   }

//   if (cartItems.length === 0) {
//     toast({
//       title: "Empty cart",
//       description: "Please add items to your cart before checking out.",
//       variant: "destructive",
//     })
//     return
//   }

// setLoading(true)

// setTimeout(() => {
//   toast({
//     title: "Order placed successfully!",
//     description: "You will receive a confirmation email shortly.",
//   })

// navigate("/order-confirmation", {
//   state: {
//     orderData: {
//       orderId: "MOCK12345",
//       customerName: formData.customerName,
//       customerEmail: formData.customerEmail,
//       customerPhone: formData.customerPhone,
//       deliveryAddress: `${formData.deliveryAddress}${
//         formData.apartment ? ", " + formData.apartment : ""
//       }`,
//       total,
//       estimatedTime:
//         deliveryTime === "asap"
//           ? "30-45 minutes"
//           : "Custom time selected",
//     },
//   },
// })

// setLoading(false)

// }
// }

// const mockCartItems: CartItem[] = [
//   {
//     id: "1",
//     type: "meal",
//     image: "/assets/burger-combo.jpg",
//     title: "Classic Burger",
//     price: "10.99",
//     quantity: 2,
//   },
//   {
//     id: "2",
//     type: "drink",
//     image: "/assets/coca-cola.jpg",
//     title: "Coca Cola",
//     price: "2.50",
//     quantity: 1,
//   },
// ]
