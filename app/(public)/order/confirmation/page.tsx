"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { CheckCircle2, Clock, Mail, MapPin, Package, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

interface OrderData {
  orderId: string
  customerName: string
  customerEmail: string
  customerPhone: string
  deliveryAddress: string
  total: number
  estimatedTime: string
}

// Mock data
const mockOrder: OrderData = {
  orderId: "abc123xyz",
  customerName: "John Doe",
  customerEmail: "john.doe@example.com",
  customerPhone: "+44 1234 567890",
  deliveryAddress: "221B Baker Street, London, UK",
  total: 45.99,
  estimatedTime: "45-60 mins",
}

const OrderConfirmation = () => {
  const router = useRouter()
  const orderData = mockOrder // using mock data instead of location.state

  useEffect(() => {
    if (!orderData) {
      router.push("/")
    }
  }, [orderData, router])

  if (!orderData) return null

  return (
    <div className="min-h-screen bg-muted/30 flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full">
        <CardContent className="pt-8 pb-6 space-y-6">
          {/* Success Icon & Message */}
          <div className="text-center space-y-3">
            <div className="flex justify-center">
              <div className="bg-green-100 dark:bg-green-900/20 rounded-full p-3">
                <CheckCircle2 className="h-16 w-16 text-green-600 dark:text-green-400" />
              </div>
            </div>
            <h1 className="text-3xl font-bold">Order Confirmed!</h1>
            <p className="text-muted-foreground text-lg">
              Thank you for your order, {orderData.customerName}
            </p>
          </div>

          <Separator />

          {/* Order Details */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
              <Package className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Order Number</p>
                <p className="font-semibold text-lg">
                  #{orderData.orderId.slice(0, 8).toUpperCase()}
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">
                    Delivery Address
                  </p>
                  <p className="font-medium">{orderData.deliveryAddress}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                <Clock className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">
                    Estimated Delivery
                  </p>
                  <p className="font-medium">{orderData.estimatedTime}</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">{orderData.customerEmail}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                <Phone className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">{orderData.customerPhone}</p>
                </div>
              </div>
            </div>
          </div>

          <Separator />

          {/* Total */}
          <div className="flex justify-between items-center text-xl font-bold">
            <span>Total Paid</span>
            <span className="text-primary">£{orderData.total.toFixed(2)}</span>
          </div>

          <Separator />

          {/* Info Message */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <p className="text-sm text-blue-900 dark:text-blue-100">
              📧 A confirmation email has been sent to{" "}
              <strong>{orderData.customerEmail}</strong> with your order
              details.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button
              onClick={() => router.push(`/track-order/${orderData.orderId}`)}
              className="flex-1"
              size="lg"
            >
              Track Your Order
            </Button>
            <Button
              onClick={() => router.push("/")}
              variant="outline"
              className="flex-1"
              size="lg"
            >
              Continue Shopping
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default OrderConfirmation
