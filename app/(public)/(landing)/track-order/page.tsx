"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Package, Search } from "lucide-react"

import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"

// import Header from "@/components/Header"

const TrackOrderPage = () => {
  const [orderId, setOrderId] = useState("")
  const router = useRouter()
  const { toast } = useToast()

  const handleTrackOrder = (e: React.FormEvent) => {
    e.preventDefault()

    if (!orderId.trim()) {
      toast({
        title: "Order ID required",
        description: "Please enter your order ID to track your order.",
        variant: "destructive",
      })
      return
    }

    // Navigate to the track order details page
    router.push(`/track-order/${orderId.trim()}`)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* <Header /> */}

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Package className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-3xl">Track Your Order</CardTitle>
              <CardDescription>
                Enter your order ID to track your delivery in real-time
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleTrackOrder} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="orderId" className="text-sm font-medium">
                    Order ID
                  </label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="orderId"
                      placeholder="Enter your order ID (e.g., ORD-12345)"
                      value={orderId}
                      onChange={(e) => setOrderId(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Track Order
                </Button>
              </form>

              <div className="mt-8 p-4 bg-muted rounded-lg">
                <h3 className="font-semibold mb-2">
                  How to find your Order ID:
                </h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Check your confirmation email</li>
                  <li>• Look at your order receipt</li>
                  <li>• Find it in your order history</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

export default TrackOrderPage
