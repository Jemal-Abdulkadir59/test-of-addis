"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {
  ArrowLeft,
  Bell,
  Bike,
  CheckCircle,
  Clock,
  DollarSign,
  Filter,
  LogOut,
  MapPin,
  Navigation,
  Package,
  Phone,
  Settings,
  Star,
  TrendingUp,
} from "lucide-react"

import { useIsMobile } from "@/hooks/use-mobile"
import { useToast } from "@/hooks/use-toast"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock data for demonstration
const mockActiveOrder = {
  id: "ORD-1234",
  pickupLocation: "Pizza Palace, 45 King Street",
  dropoffLocation: "23 Elm Avenue, Apt 5B",
  distance: "3.5 km",
  estimatedTime: "15 mins",
  customerName: "John Doe",
  customerPhone: "+1 234-567-8900",
  deliveryFee: 8.5,
  status: "picked_up",
  items: ["Large Pepperoni Pizza", "Garlic Bread", "Coke 1.5L"],
}

const mockAvailableOrders = [
  {
    id: "ORD-1235",
    restaurant: "Burger King",
    pickup: "2.1 km",
    dropoff: "3.5 km",
    pay: 12.0,
    estimatedTime: "20 mins",
  },
  {
    id: "ORD-1236",
    restaurant: "Sushi House",
    pickup: "1.5 km",
    dropoff: "4.2 km",
    pay: 15.0,
    estimatedTime: "25 mins",
  },
  {
    id: "ORD-1237",
    restaurant: "Taco Bell",
    pickup: "0.8 km",
    dropoff: "2.1 km",
    pay: 9.5,
    estimatedTime: "15 mins",
  },
  {
    id: "ORD-1238",
    restaurant: "Chinese Wok",
    pickup: "3.2 km",
    dropoff: "5.5 km",
    pay: 18.0,
    estimatedTime: "30 mins",
  },
]

const mockPastDeliveries = [
  {
    id: "ORD-1220",
    date: "2025-01-13 14:30",
    pay: 10.5,
    status: "Delivered",
    rating: 5,
  },
  {
    id: "ORD-1215",
    date: "2025-01-13 13:15",
    pay: 8.0,
    status: "Delivered",
    rating: 4,
  },
  {
    id: "ORD-1210",
    date: "2025-01-13 11:45",
    pay: 12.0,
    status: "Delivered",
    rating: 5,
  },
  {
    id: "ORD-1205",
    date: "2025-01-13 10:20",
    pay: 9.5,
    status: "Delivered",
    rating: 5,
  },
  {
    id: "ORD-1198",
    date: "2025-01-12 18:30",
    pay: 11.0,
    status: "Canceled",
    rating: 0,
  },
]

const RiderDashboard = () => {
  const navigate = useNavigate()
  const { toast } = useToast()
  const isMobile = useIsMobile()
  const [isOnline, setIsOnline] = useState(true)
  const [activeOrder, setActiveOrder] = useState(mockActiveOrder)
  const [availableOrders] = useState(mockAvailableOrders)
  const [pastDeliveries] = useState(mockPastDeliveries)
  const [filterBy, setFilterBy] = useState<"nearby" | "pay" | "distance">(
    "nearby"
  )

  const handleOnlineToggle = () => {
    setIsOnline(!isOnline)
    toast({
      title: isOnline ? "Going Offline" : "Going Online",
      description: isOnline
        ? "You won't receive new orders"
        : "You're now available for deliveries",
    })
  }

  const handleAcceptOrder = (orderId: string) => {
    toast({
      title: "Order Accepted",
      description: `Order ${orderId} has been assigned to you`,
    })
  }

  const handleMarkPickedUp = () => {
    toast({
      title: "Order Picked Up",
      description: "Order marked as picked up",
    })
  }

  const handleMarkDelivered = () => {
    setActiveOrder(null as any)
    toast({
      title: "Delivery Complete",
      description: "Order marked as delivered",
    })
  }

  // Stats calculation
  const todayStats = {
    deliveries: 12,
    earnings: 156.5,
    avgTime: "18 mins",
    rating: 4.8,
  }

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="bg-background border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* <Button variant="ghost" size="icon" onClick={() => navigate("/")}>
                <ArrowLeft className="h-5 w-5" />
              </Button> */}
              <Avatar className="h-10 w-10">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>RD</AvatarFallback>
              </Avatar>
              {!isMobile && (
                <div>
                  <p className="font-semibold">Rider Mike</p>
                  <div className="flex items-center gap-2">
                    <div
                      className={`h-2 w-2 rounded-full ${isOnline ? "bg-green-500" : "bg-red-500"}`}
                    />
                    <span className="text-xs text-muted-foreground">
                      {isOnline ? "Online" : "Offline"}
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 mr-2">
                <span className="text-sm text-muted-foreground hidden sm:inline">
                  Status:
                </span>
                <Switch
                  checked={isOnline}
                  onCheckedChange={handleOnlineToggle}
                />
              </div>
              {/* <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button> */}
              {/* <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
              </Button> */}
              {/* <Button variant="ghost" size="icon">
                <LogOut className="h-5 w-5" />
              </Button> */}
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <Tabs defaultValue="dashboard" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:inline-flex">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="available">Available</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
            <TabsTrigger value="earnings">Earnings</TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Today</p>
                      <p className="text-2xl font-bold">
                        {todayStats.deliveries}
                      </p>
                    </div>
                    <Package className="h-8 w-8 text-primary" />
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Deliveries
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Earned</p>
                      <p className="text-2xl font-bold">
                        ${todayStats.earnings}
                      </p>
                    </div>
                    <DollarSign className="h-8 w-8 text-primary" />
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Today's total
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Avg Time</p>
                      <p className="text-2xl font-bold">{todayStats.avgTime}</p>
                    </div>
                    <Clock className="h-8 w-8 text-primary" />
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Per delivery
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Rating</p>
                      <p className="text-2xl font-bold">{todayStats.rating}</p>
                    </div>
                    <Star className="h-8 w-8 text-primary fill-primary" />
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Customer rating
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Active Order */}
            {activeOrder && (
              <Card className="border-primary">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <Bike className="h-5 w-5" />
                      Active Delivery
                    </CardTitle>
                    <Badge variant="default">In Progress</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-semibold text-muted-foreground">
                          Order ID
                        </p>
                        <p className="font-mono">{activeOrder.id}</p>
                      </div>
                      <div className="bg-muted p-3 rounded-lg">
                        <div className="flex items-start gap-2">
                          <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <div className="flex-1">
                            <p className="text-sm font-semibold">Pickup</p>
                            <p className="text-sm">
                              {activeOrder.pickupLocation}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-muted p-3 rounded-lg">
                        <div className="flex items-start gap-2">
                          <Navigation className="h-4 w-4 text-destructive mt-1 flex-shrink-0" />
                          <div className="flex-1">
                            <p className="text-sm font-semibold">Drop-off</p>
                            <p className="text-sm">
                              {activeOrder.dropoffLocation}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-muted p-3 rounded-lg">
                          <p className="text-xs text-muted-foreground">
                            Distance
                          </p>
                          <p className="text-lg font-semibold">
                            {activeOrder.distance}
                          </p>
                        </div>
                        <div className="bg-muted p-3 rounded-lg">
                          <p className="text-xs text-muted-foreground">
                            Est. Time
                          </p>
                          <p className="text-lg font-semibold">
                            {activeOrder.estimatedTime}
                          </p>
                        </div>
                      </div>
                      <div className="bg-muted p-3 rounded-lg">
                        <p className="text-sm font-semibold">Customer</p>
                        <p className="text-sm">{activeOrder.customerName}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Phone className="h-3 w-3" />
                          <p className="text-xs text-muted-foreground">
                            {activeOrder.customerPhone}
                          </p>
                        </div>
                      </div>
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <p className="text-sm font-semibold">Delivery Fee</p>
                        <p className="text-2xl font-bold text-primary">
                          ${activeOrder.deliveryFee}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted p-3 rounded-lg">
                    <p className="text-sm font-semibold mb-2">Order Items</p>
                    <ul className="text-sm space-y-1">
                      {activeOrder.items.map((item: string, idx: number) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-2 flex-wrap">
                    <Button
                      onClick={handleMarkPickedUp}
                      variant="outline"
                      className="flex-1"
                    >
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Mark as Picked Up
                    </Button>
                    <Button onClick={handleMarkDelivered} className="flex-1">
                      <Package className="mr-2 h-4 w-4" />
                      Mark as Delivered
                    </Button>
                    <Button variant="secondary" className="flex-1">
                      <MapPin className="mr-2 h-4 w-4" />
                      View on Map
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {!activeOrder && (
              <Card>
                <CardContent className="py-12 text-center">
                  <Bike className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <p className="text-lg font-semibold mb-2">
                    No Active Delivery
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {isOnline
                      ? "Check 'Available' tab for new orders"
                      : "Go online to receive orders"}
                  </p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Available Orders Tab */}
          <TabsContent value="available" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">Available Orders</h2>
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <select
                  value={filterBy}
                  onChange={(e) => setFilterBy(e.target.value as any)}
                  className="text-sm border rounded-md px-2 py-1 bg-background"
                >
                  <option value="nearby">Nearby</option>
                  <option value="pay">Highest Pay</option>
                  <option value="distance">Shortest Distance</option>
                </select>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {availableOrders.map((order) => (
                <Card
                  key={order.id}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardContent className="pt-6 space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold">{order.restaurant}</p>
                        <p className="text-xs text-muted-foreground">
                          Order {order.id}
                        </p>
                      </div>
                      <Badge variant="secondary" className="text-lg font-bold">
                        ${order.pay}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="bg-muted p-2 rounded">
                        <p className="text-xs text-muted-foreground">Pickup</p>
                        <p className="font-semibold">{order.pickup}</p>
                      </div>
                      <div className="bg-muted p-2 rounded">
                        <p className="text-xs text-muted-foreground">
                          Drop-off
                        </p>
                        <p className="font-semibold">{order.dropoff}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>Est. {order.estimatedTime}</span>
                    </div>

                    <Button
                      onClick={() => handleAcceptOrder(order.id)}
                      className="w-full"
                    >
                      Accept Order
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* History Tab */}
          <TabsContent value="history" className="space-y-4">
            <h2 className="text-xl font-bold">Past Deliveries</h2>

            <div className="space-y-2">
              {pastDeliveries.map((delivery) => (
                <Card key={delivery.id}>
                  <CardContent className="py-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <p className="font-mono text-sm">{delivery.id}</p>
                          <Badge
                            variant={
                              delivery.status === "Delivered"
                                ? "default"
                                : "destructive"
                            }
                          >
                            {delivery.status}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                          {delivery.date}
                        </p>
                      </div>

                      <div className="flex items-center gap-4">
                        {delivery.rating > 0 && (
                          <div className="flex items-center gap-1">
                            {[...Array(delivery.rating)].map((_, i) => (
                              <Star
                                key={i}
                                className="h-3 w-3 fill-primary text-primary"
                              />
                            ))}
                          </div>
                        )}
                        <p className="font-bold text-lg">${delivery.pay}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Earnings Tab */}
          <TabsContent value="earnings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Performance Summary
                </CardTitle>
                <CardDescription>Your performance for today</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <p className="text-3xl font-bold">
                      {todayStats.deliveries}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Total Deliveries
                    </p>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <p className="text-3xl font-bold text-primary">
                      ${todayStats.earnings}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Total Earnings
                    </p>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <p className="text-3xl font-bold">{todayStats.avgTime}</p>
                    <p className="text-sm text-muted-foreground">
                      Avg Delivery Time
                    </p>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <p className="text-3xl font-bold">{todayStats.rating}</p>
                    <p className="text-sm text-muted-foreground">
                      Customer Rating
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Delivery Success Rate</span>
                      <span className="font-semibold">98%</span>
                    </div>
                    <Progress value={98} />
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>On-Time Delivery Rate</span>
                      <span className="font-semibold">95%</span>
                    </div>
                    <Progress value={95} />
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Customer Satisfaction</span>
                      <span className="font-semibold">96%</span>
                    </div>
                    <Progress value={96} />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>This Week's Earnings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                    (day, idx) => (
                      <div
                        key={day}
                        className="flex items-center justify-between"
                      >
                        <span className="text-sm font-medium w-12">{day}</span>
                        <div className="flex-1 mx-4">
                          <Progress value={Math.random() * 100} />
                        </div>
                        <span className="text-sm font-bold w-16 text-right">
                          ${(Math.random() * 200).toFixed(2)}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

export default RiderDashboard
