"use client"

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import {
  AlertCircle,
  ArrowLeft,
  ChefHat,
  Clock,
  Phone,
  TrendingUp,
  Utensils,
} from "lucide-react"

import { useIsMobile } from "@/hooks/use-mobile"
import { useToast } from "@/hooks/use-toast"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock data for demo
const mockOrders = [
  {
    id: "ORD-001",
    customer_name: "John Smith",
    customer_phone: "+1 (555) 123-4567",
    status: "confirmed",
    created_at: new Date(Date.now() - 5 * 60000).toISOString(),
    items: [
      { name: "Classic Burger", quantity: 2, notes: "No onions" },
      { name: "Fries", quantity: 2, notes: "" },
      { name: "Coke", quantity: 2, notes: "Extra ice" },
    ],
    prep_time: "15-20 min",
    priority: "normal",
    notes: "Please make it fresh. Customer is allergic to onions.",
  },
  {
    id: "ORD-002",
    customer_name: "Sarah Johnson",
    customer_phone: "+1 (555) 234-5678",
    status: "preparing",
    created_at: new Date(Date.now() - 15 * 60000).toISOString(),
    items: [
      { name: "Veggie Burger", quantity: 1, notes: "Vegan cheese" },
      { name: "Sweet Potato Fries", quantity: 1, notes: "" },
    ],
    prep_time: "10-15 min",
    priority: "high",
    notes: "Rush order - customer is waiting in store",
  },
  {
    id: "ORD-003",
    customer_name: "Mike Brown",
    customer_phone: "+1 (555) 345-6789",
    status: "confirmed",
    created_at: new Date(Date.now() - 2 * 60000).toISOString(),
    items: [
      { name: "Double Bacon Burger", quantity: 1, notes: "Extra bacon" },
      { name: "Onion Rings", quantity: 1, notes: "" },
      { name: "Milkshake", quantity: 1, notes: "Chocolate" },
    ],
    prep_time: "20-25 min",
    priority: "normal",
    notes: "",
  },
  {
    id: "ORD-004",
    customer_name: "Emily Davis",
    customer_phone: "+1 (555) 456-7890",
    status: "preparing",
    created_at: new Date(Date.now() - 25 * 60000).toISOString(),
    items: [
      { name: "Chicken Burger", quantity: 3, notes: "Spicy sauce" },
      { name: "Fries", quantity: 3, notes: "" },
    ],
    prep_time: "15-20 min",
    priority: "normal",
    notes: "Party order - please pack separately",
  },
]

const CookDashboard = () => {
  const navigate = useNavigate()
  const { toast } = useToast()
  const isMobile = useIsMobile()
  const [orders, setOrders] = useState(mockOrders)
  const [activeTab, setActiveTab] = useState("all")

  const updateOrderStatus = (
    orderId: string,
    newStatus: "preparing" | "ready"
  ) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    )

    toast({
      title: "Status Updated",
      description: `Order status changed to ${newStatus}`,
    })
  }

  const formatStatus = (status: string) =>
    status
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")

  const getFilteredOrders = () =>
    activeTab === "all" ? orders : orders.filter((o) => o.status === activeTab)

  const confirmedCount = orders.filter((o) => o.status === "confirmed").length
  const preparingCount = orders.filter((o) => o.status === "preparing").length
  const avgPrepTime = "18 min"
  const filteredOrders = getFilteredOrders()

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      {/* <header className="bg-background border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/")}
            className="md:hidden"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="hidden md:block">
            <Button variant="ghost" onClick={() => navigate("/")}>
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back
            </Button>
          </div>
          <ChefHat className="h-6 w-6 text-primary" />
          <h1 className="text-xl md:text-2xl font-bold">Cook Dashboard</h1>
        </div>
      </header> */}

      <main className="container mx-auto px-4 py-6 md:py-8">
        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card>
            <CardContent className="pt-6 flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  New Orders
                </p>
                <p className="text-2xl font-bold">{confirmedCount}</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <AlertCircle className="h-6 w-6 text-primary" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  In Progress
                </p>
                <p className="text-2xl font-bold">{preparingCount}</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-orange-500/10 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-orange-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Avg Prep Time
                </p>
                <p className="text-2xl font-bold">{avgPrepTime}</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-green-500/10 flex items-center justify-center">
                <Clock className="h-6 w-6 text-green-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Orders */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Utensils className="h-5 w-5" />
              Orders to Prepare
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="all">All ({orders.length})</TabsTrigger>
                <TabsTrigger value="confirmed">
                  New ({confirmedCount})
                </TabsTrigger>
                <TabsTrigger value="preparing">
                  In Progress ({preparingCount})
                </TabsTrigger>
              </TabsList>

              <TabsContent value={activeTab}>
                {filteredOrders.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">
                      No orders in this category
                    </p>
                  </div>
                ) : (
                  <>
                    {/* Desktop/Tablet Table */}
                    <div className="hidden md:block">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Order ID</TableHead>
                            <TableHead>Customer</TableHead>
                            <TableHead>Items</TableHead>
                            <TableHead>Time</TableHead>
                            <TableHead>Prep Time</TableHead>
                            <TableHead>Priority</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {filteredOrders.map((order) => (
                            <TableRow key={order.id}>
                              <TableCell className="font-medium">
                                {order.id}
                              </TableCell>
                              <TableCell>
                                <p className="font-medium">
                                  {order.customer_name}
                                </p>
                                <p className="text-xs text-muted-foreground flex items-center gap-1">
                                  <Phone className="h-3 w-3" />
                                  {order.customer_phone}
                                </p>
                              </TableCell>
                              <TableCell>
                                <div className="space-y-1">
                                  {order.items.map((item, idx) => (
                                    <div key={idx} className="text-sm">
                                      <span className="font-medium">
                                        {item.quantity}x
                                      </span>{" "}
                                      {item.name}
                                      {item.notes && (
                                        <span className="text-xs text-muted-foreground ml-1">
                                          ({item.notes})
                                        </span>
                                      )}
                                    </div>
                                  ))}
                                </div>
                              </TableCell>
                              <TableCell className="text-sm text-muted-foreground">
                                {new Date(
                                  order.created_at
                                ).toLocaleTimeString()}
                              </TableCell>
                              <TableCell>
                                <Badge variant="outline">
                                  {order.prep_time}
                                </Badge>
                              </TableCell>
                              <TableCell>
                                <Badge
                                  variant={
                                    order.priority === "high"
                                      ? "destructive"
                                      : "secondary"
                                  }
                                >
                                  {order.priority}
                                </Badge>
                              </TableCell>
                              <TableCell>
                                <Badge
                                  variant={
                                    order.status === "preparing"
                                      ? "default"
                                      : "secondary"
                                  }
                                >
                                  {formatStatus(order.status)}
                                </Badge>
                              </TableCell>
                              <TableCell>
                                {order.status === "confirmed" && (
                                  <Button
                                    onClick={() =>
                                      updateOrderStatus(order.id, "preparing")
                                    }
                                    size="sm"
                                  >
                                    Start
                                  </Button>
                                )}
                                {order.status === "preparing" && (
                                  <Button
                                    onClick={() =>
                                      updateOrderStatus(order.id, "ready")
                                    }
                                    size="sm"
                                    variant="outline"
                                  >
                                    Mark Ready
                                  </Button>
                                )}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>

                    {/* Mobile Cards */}
                    <div className="md:hidden space-y-4">
                      {filteredOrders.map((order) => (
                        <Card key={order.id} className="overflow-hidden">
                          <div className="bg-muted/50 px-4 py-3 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="font-bold">{order.id}</span>
                              {order.priority === "high" && (
                                <Badge
                                  variant="destructive"
                                  className="text-xs"
                                >
                                  High Priority
                                </Badge>
                              )}
                            </div>
                            <Badge
                              variant={
                                order.status === "preparing"
                                  ? "default"
                                  : "secondary"
                              }
                            >
                              {formatStatus(order.status)}
                            </Badge>
                          </div>

                          <CardContent className="pt-4 space-y-4">
                            <div>
                              <p className="font-semibold text-lg">
                                {order.customer_name}
                              </p>
                              <p className="text-sm text-muted-foreground flex items-center gap-1">
                                <Phone className="h-3 w-3" />
                                {order.customer_phone}
                              </p>
                              <div className="flex items-center gap-3 mt-2">
                                <p className="text-xs text-muted-foreground">
                                  {new Date(
                                    order.created_at
                                  ).toLocaleTimeString()}
                                </p>
                                <Badge
                                  variant="outline"
                                  className="text-xs flex items-center gap-1"
                                >
                                  <Clock className="h-3 w-3" />
                                  {order.prep_time}
                                </Badge>
                              </div>
                            </div>

                            <div className="bg-muted/50 p-3 rounded-lg">
                              <p className="text-sm font-semibold mb-2">
                                Order Items:
                              </p>
                              <div className="space-y-1">
                                {order.items.map((item, idx) => (
                                  <div
                                    key={idx}
                                    className="text-sm flex justify-between"
                                  >
                                    <span>
                                      <span className="font-medium">
                                        {item.quantity}x
                                      </span>{" "}
                                      {item.name}
                                    </span>
                                    {item.notes && (
                                      <span className="text-xs text-muted-foreground italic">
                                        ({item.notes})
                                      </span>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>

                            {order.notes && (
                              <div className="bg-orange-500/10 border border-orange-500/20 p-3 rounded-lg">
                                <p className="text-sm font-semibold mb-1 flex items-center gap-1">
                                  <AlertCircle className="h-4 w-4" />
                                  Special Instructions:
                                </p>
                                <p className="text-sm">{order.notes}</p>
                              </div>
                            )}

                            <div className="flex gap-2">
                              {order.status === "confirmed" && (
                                <Button
                                  onClick={() =>
                                    updateOrderStatus(order.id, "preparing")
                                  }
                                  className="flex-1"
                                >
                                  Start Preparing
                                </Button>
                              )}
                              {order.status === "preparing" && (
                                <Button
                                  onClick={() =>
                                    updateOrderStatus(order.id, "ready")
                                  }
                                  className="flex-1"
                                  variant="outline"
                                >
                                  Mark as Ready
                                </Button>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </>
                )}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

export default CookDashboard
