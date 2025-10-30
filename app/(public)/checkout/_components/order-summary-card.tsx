import { Clock, Edit, Store } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

interface CartItem {
  id: string
  type: string
  image: string
  title: string
  price: string
  quantity: number
  discount?: string
}

interface OrderSummaryCardProps {
  items: CartItem[]
  onEditItems?: () => void
}

export const OrderSummaryCard = ({
  items,
  onEditItems,
}: OrderSummaryCardProps) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <CardTitle>Order Summary</CardTitle>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Store className="h-4 w-4" />
              <span>Burger Palace</span>
            </div>
          </div>
          {onEditItems && (
            <Button variant="ghost" size="sm" onClick={onEditItems}>
              <Edit className="h-4 w-4 mr-2" />
              Edit
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 p-3 rounded-lg">
          <Clock className="h-4 w-4" />
          <span>Estimated delivery: 30-40 minutes</span>
        </div>

        <Separator />

        <div className="space-y-3">
          {items.length === 0 ? (
            <p className="text-center text-muted-foreground py-4">
              Your cart is empty
            </p>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h4 className="font-medium text-sm">{item.title}</h4>
                    <span className="font-semibold text-sm">
                      £{(parseFloat(item.price) * item.quantity).toFixed(2)}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Qty: {item.quantity} × £{parseFloat(item.price).toFixed(2)}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  )
}
