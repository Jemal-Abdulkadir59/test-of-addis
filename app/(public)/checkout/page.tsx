"use client"

import { useState } from "react"
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

const mockCartItems: CartItem[] = [
  {
    id: "1",
    type: "meal",
    image: "/assets/burger-combo.jpg",
    title: "Classic Burger",
    price: "10.99",
    quantity: 2,
  },
  {
    id: "2",
    type: "drink",
    image: "/assets/coca-cola.jpg",
    title: "Coca Cola",
    price: "2.50",
    quantity: 1,
  },
]

const Checkout = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { toast } = useToast()

  // Use mock cart if none provided
  const cartItems = (location.state?.cartItems || mockCartItems) as CartItem[]

  const [loading, setLoading] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState("card-1")
  const [deliveryTime, setDeliveryTime] = useState("asap")
  const [promoDiscount, setPromoDiscount] = useState(0)
  const [formData, setFormData] = useState({
    customerName: "",
    customerEmail: "",
    customerPhone: "",
    deliveryAddress: "",
    apartment: "",
    deliveryInstructions: "",
  })

  const subtotal = cartItems.reduce(
    (sum, item) => sum + parseFloat(item.price) * item.quantity,
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

  const handleSubmit = async () => {
    if (
      !formData.customerName ||
      !formData.customerEmail ||
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

    if (cartItems.length === 0) {
      toast({
        title: "Empty cart",
        description: "Please add items to your cart before checking out.",
        variant: "destructive",
      })
      return
    }

    setLoading(true)

    setTimeout(() => {
      toast({
        title: "Order placed successfully!",
        description: "You will receive a confirmation email shortly.",
      })

      navigate("/order-confirmation", {
        state: {
          orderData: {
            orderId: "MOCK12345",
            customerName: formData.customerName,
            customerEmail: formData.customerEmail,
            customerPhone: formData.customerPhone,
            deliveryAddress: `${formData.deliveryAddress}${
              formData.apartment ? ", " + formData.apartment : ""
            }`,
            total,
            estimatedTime:
              deliveryTime === "asap"
                ? "30-45 minutes"
                : "Custom time selected",
          },
        },
      })

      setLoading(false)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <header className="bg-background border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate("/")}>
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
              onEditItems={() => navigate("/")}
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
              onTimeChange={setDeliveryTime}
            />

            <PromoCodeInput onPromoApplied={setPromoDiscount} />
          </div>

          <div className="lg:col-span-1">
            <OrderTotalFooter
              subtotal={subtotal}
              deliveryFee={deliveryFee}
              tax={tax}
              discount={discountAmount}
              total={total}
              loading={loading}
              onCheckout={handleSubmit}
            />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Checkout
