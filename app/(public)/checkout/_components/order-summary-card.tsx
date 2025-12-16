import { Clock, Edit, Store } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import CartMiniSkeleton from "@/components/skeleton/cartMiniSkeleton"

interface CartItem {
  id: string
  quantity: number
  added_at?: any
  price_at_purchase: number
  user: {
    id: string
    name: string
    email: string
  }
  menu_item: {
    id: string
    name: string
    description: string
    price: number
    image_url: string
    is_available: boolean
  }
}

interface OrderSummaryCardProps {
  items: CartItem[]
  onEditItems?: () => void
  loadingCart?: boolean
}

export const OrderSummaryCard = ({
  items,
  onEditItems,
  loadingCart,
}: OrderSummaryCardProps) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <CardTitle>Order Summary</CardTitle>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Store className="h-4 w-4" />
              <span>Food Palace</span>
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
          {loadingCart ? (
            <CartMiniSkeleton />
          ) : items.length === 0 ? (
            <p className="text-center text-muted-foreground py-4">
              Your cart is empty
            </p>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-3">
                <img
                  src={`/img/menu_items/${item.menu_item.image_url}`}
                  alt={item.menu_item.name}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h4 className="font-medium text-sm">
                      {item.menu_item.name}
                    </h4>
                    <span className="font-semibold text-sm">
                      £{(item.price_at_purchase * item.quantity).toFixed(2)}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Qty: {item.quantity} × £{item.price_at_purchase.toFixed(2)}
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
