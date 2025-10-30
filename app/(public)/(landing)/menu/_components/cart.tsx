import { Minus, Plus, ShoppingCart, Trash2 } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

export interface CartItem {
  id: string
  type: "product" | "offer"
  image: string
  title: string
  price: string
  quantity: number
  discount?: string
}

interface CartProps {
  items: CartItem[]
  onUpdateQuantity: (id: string, quantity: number) => void
  onRemoveItem: (id: string) => void
  onCheckout?: () => void
}

const Cart = ({
  items,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
}: CartProps) => {
  const subtotal = items.reduce(
    (sum, item) => sum + parseFloat(item.price) * item.quantity,
    0
  )
  const deliveryFee = 3.0
  const total = subtotal + deliveryFee

  if (items.length === 0) {
    return (
      <Card className="sticky top-4 p-6">
        <div className="flex items-center gap-2 mb-6">
          <ShoppingCart className="h-5 w-5" />
          <h2 className="text-2xl font-bold">Your Cart</h2>
        </div>
        <div className="text-center py-8 text-muted-foreground">
          <ShoppingCart className="h-12 w-12 mx-auto mb-4 opacity-50" />
          <p>Your cart is empty</p>
        </div>
      </Card>
    )
  }

  return (
    <Card className="sticky top-4">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5" />
            <h2 className="text-2xl font-bold">Your Cart</h2>
          </div>
          <Badge variant="secondary">{items.length} items</Badge>
        </div>

        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex gap-3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-semibold text-sm leading-tight">
                      {item.title}
                    </h3>
                    {item.discount && (
                      <Badge variant="secondary" className="text-xs shrink-0">
                        {item.discount}
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm font-semibold text-primary mb-2">
                    GBP {(parseFloat(item.price) * item.quantity).toFixed(2)}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-7 w-7"
                        onClick={() =>
                          onUpdateQuantity(
                            item.id,
                            Math.max(1, item.quantity - 1)
                          )
                        }
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="text-sm font-medium w-6 text-center">
                        {item.quantity}
                      </span>
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-7 w-7"
                        onClick={() =>
                          onUpdateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-7 w-7"
                      onClick={() => onRemoveItem(item.id)}
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        <Separator className="my-4" />

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Subtotal</span>
            <span className="font-medium">GBP {subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Delivery Fee</span>
            <span className="font-medium">GBP {deliveryFee.toFixed(2)}</span>
          </div>
          <Separator className="my-2" />
          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span className="text-primary">GBP {total.toFixed(2)}</span>
          </div>
        </div>

        <Button className="w-full mt-6" size="lg" onClick={onCheckout}>
          Proceed to Checkout
        </Button>
      </div>
    </Card>
  )
}

export default Cart
