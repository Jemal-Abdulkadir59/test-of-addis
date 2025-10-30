"use client"

import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import {
  ArrowLeft,
  CheckCircle,
  Clock,
  MapPin,
  MessageCircle,
  Package,
  Phone,
  Truck,
  User,
  XCircle,
} from "lucide-react"

import { cn } from "@/lib/utils"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"

const TrackOrder = () => {
  const { orderId } = useParams()
  const navigate = useNavigate()
  const [order, setOrder] = useState<any>(null)
  const [orderItems, setOrderItems] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // simulate API fetch
    setTimeout(() => {
      const demoOrder = {
        id: "ORD-20251011-001",
        status: "out_for_delivery",
        delivery_address: "221B Baker Street, London NW1 6XE, United Kingdom",
        customer_name: "John Doe",
        customer_email: "john.doe@example.com",
        customer_phone: "+44 7123 456789",
        notes: "Please ring the doorbell twice.",
        subtotal: "29.97",
        delivery_fee: "2.99",
        total: "32.96",
        created_at: "2025-10-11T14:30:00Z",
      }

      const demoItems = [
        {
          id: "ITEM-1",
          title: "Classic Cheeseburger",
          quantity: 2,
          price: "9.99",
          image:
            "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=60",
        },
        {
          id: "ITEM-2",
          title: "Crispy French Fries",
          quantity: 1,
          price: "4.99",
          image:
            "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=400&q=60",
        },
        {
          id: "ITEM-3",
          title: "Coca-Cola (500ml)",
          quantity: 2,
          price: "2.50",
          image:
            "https://images.unsplash.com/photo-1667204651371-5d4a65b8b5a9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29jYSUyMGNvbGF8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
        },
      ]

      setOrder(demoOrder)
      setOrderItems(demoItems)
      setLoading(false)
    }, 800)
  }, [])

  const orderStatuses = [
    { key: "pending", label: "Order Received", icon: Clock },
    { key: "confirmed", label: "Confirmed", icon: CheckCircle },
    { key: "preparing", label: "Cooking", icon: Package },
    { key: "ready", label: "Ready", icon: Package },
    { key: "out_for_delivery", label: "Out for Delivery", icon: Truck },
    { key: "delivered", label: "Delivered", icon: CheckCircle },
  ]

  const getCurrentStep = (status: string) => {
    const index = orderStatuses.findIndex((s) => s.key === status)
    return index !== -1 ? index : 0
  }

  const getProgressPercentage = (status: string) => {
    if (status === "cancelled") return 0
    const currentStep = getCurrentStep(status)
    return ((currentStep + 1) / orderStatuses.length) * 100
  }

  const getETA = (status: string) => {
    switch (status) {
      case "pending":
        return "5-10 minutes"
      case "confirmed":
      case "preparing":
        return "15-25 minutes"
      case "ready":
        return "10-15 minutes"
      case "out_for_delivery":
        return "5-10 minutes"
      case "delivered":
        return "Delivered"
      default:
        return "Calculating..."
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "secondary"
      case "confirmed":
      case "preparing":
        return "default"
      case "ready":
      case "out_for_delivery":
        return "default"
      case "delivered":
        return "default"
      case "cancelled":
        return "destructive"
      default:
        return "secondary"
    }
  }

  const formatStatus = (status: string) => {
    return status
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg">Loading order...</p>
      </div>
    )
  }

  if (!order) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-lg">Order not found</p>
        <Button onClick={() => navigate("/")}>Return to Home</Button>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-muted/30">
      {/* <header className="bg-background border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/track-order")}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-2xl font-bold">Track Order</h1>
        </div>
      </header> */}

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="grid gap-6">
          {/* Progress Timeline */}
          <Card className="overflow-hidden">
            <CardContent className="p-6">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold">Order Progress</h3>
                  {order.status !== "cancelled" &&
                    order.status !== "delivered" && (
                      <Badge variant="secondary" className="animate-pulse">
                        ETA: {getETA(order.status)}
                      </Badge>
                    )}
                </div>
                <Progress
                  value={getProgressPercentage(order.status)}
                  className="h-2"
                />
              </div>

              <div className="relative">
                {order.status === "cancelled" ? (
                  <div className="text-center py-8">
                    <XCircle className="h-16 w-16 text-destructive mx-auto mb-4" />
                    <p className="text-lg font-semibold text-destructive">
                      Order Cancelled
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Your order has been cancelled
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {orderStatuses.map((statusItem, index) => {
                      const currentStep = getCurrentStep(order.status)
                      const isCompleted = index <= currentStep
                      const isCurrent = index === currentStep
                      const Icon = statusItem.icon

                      return (
                        <div
                          key={statusItem.key}
                          className="flex items-start gap-4"
                        >
                          <div
                            className={cn(
                              "relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-300",
                              isCompleted
                                ? "border-primary bg-primary text-primary-foreground"
                                : "border-muted bg-background text-muted-foreground",
                              isCurrent &&
                                "animate-pulse ring-4 ring-primary/20"
                            )}
                          >
                            <Icon className="h-5 w-5" />
                          </div>
                          <div className="flex-1 pt-1">
                            <p
                              className={cn(
                                "font-semibold transition-colors",
                                isCompleted
                                  ? "text-foreground"
                                  : "text-muted-foreground"
                              )}
                            >
                              {statusItem.label}
                            </p>
                            {isCurrent && (
                              <p className="text-sm text-muted-foreground animate-fade-in">
                                In progress...
                              </p>
                            )}
                          </div>
                          {isCompleted && (
                            <CheckCircle className="h-5 w-5 text-primary animate-scale-in" />
                          )}
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Driver Info - Only show when out for delivery */}
          {order.status === "out_for_delivery" && (
            <Card className="border-primary/50 animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Truck className="h-5 w-5" />
                  Delivery Driver
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Driver on the way</p>
                    <p className="text-sm text-muted-foreground">
                      Your food will arrive soon
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1" size="sm">
                    <Phone className="h-4 w-4 mr-2" />
                    Call
                  </Button>
                  <Button variant="outline" className="flex-1" size="sm">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Message
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Order Details */}
          <Card>
            <CardHeader>
              <CardTitle>Order Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1">Delivery Address</h3>
                  <p className="text-sm text-muted-foreground">
                    {order.delivery_address}
                  </p>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-semibold mb-2">Contact Information</h3>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p>{order.customer_name}</p>
                  <p>{order.customer_email}</p>
                  <p>{order.customer_phone}</p>
                </div>
              </div>

              {order.notes && (
                <>
                  <Separator />
                  <div>
                    <h3 className="font-semibold mb-2">Order Notes</h3>
                    <p className="text-sm text-muted-foreground">
                      {order.notes}
                    </p>
                  </div>
                </>
              )}

              <Separator />

              <div>
                <p className="text-sm text-muted-foreground">
                  Order placed on {new Date(order.created_at).toLocaleString()}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Order Items */}
          <Card>
            <CardHeader>
              <CardTitle>Order Items</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {orderItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 animate-fade-in"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        Quantity: {item.quantity}
                      </p>
                    </div>
                    <p className="font-semibold">
                      GBP {(parseFloat(item.price) * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              <Separator className="my-4" />

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span>GBP {parseFloat(order.subtotal).toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Delivery Fee</span>
                  <span>GBP {parseFloat(order.delivery_fee).toFixed(2)}</span>
                </div>
                <Separator />
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>GBP {parseFloat(order.total).toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Support Section */}
          <Card>
            <CardContent className="p-6">
              <div className="text-center">
                <h3 className="font-semibold mb-2">Need Help?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Our support team is here to assist you
                </p>
                <div className="flex gap-2 justify-center">
                  <Button variant="outline">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Support
                  </Button>
                  <Button variant="outline">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Chat with Us
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

export default TrackOrder
