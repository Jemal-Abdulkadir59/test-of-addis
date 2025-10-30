import { Minus, Plus, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { CartItem } from "./cart"

interface CartSheetProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  items: CartItem[]
  onUpdateQuantity: (id: string, quantity: number) => void
  onRemoveItem: (id: string) => void
  onCheckout: () => void
}

const CartSheet = ({
  open,
  onOpenChange,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
}: CartSheetProps) => {
  // Demo static data for now
  items = [
    {
      id: "1",
      image: "/assets/burger-combo.jpg",
      title: "The classics for 3",
      price: "21.10",
      type: "product",
      quantity: 2,
    },
    {
      id: "2",
      image: "/assets/burger-combo.jpg",
      title: "The classics for 3",
      type: "product",
      quantity: 1,
      price: "21.10",
    },
  ]

  const subtotal = items.reduce(
    (sum, item) => sum + parseFloat(item.price) * item.quantity,
    0
  )
  const deliveryFee = 2.99
  const total = subtotal + deliveryFee

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="bottom"
        className="
          w-full max-h-screen
          sm:max-w-md sm:right-0 sm:left-auto sm:top-0 sm:h-screen
          flex flex-col
        "
      >
        {/* HEADER with close button */}
        <SheetHeader className="flex flex-row items-center justify-between">
          <SheetTitle>Your Cart ({items.length} items)</SheetTitle>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onOpenChange(false)}
            className="sm:hidden"
          >
            <X className="h-5 w-5" />
          </Button>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex items-center justify-center">
            <p className="text-muted-foreground">Your cart is empty</p>
          </div>
        ) : (
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Scrollable items */}
            <div className="flex-1 overflow-y-auto py-4 px-4 space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 bg-card p-4 rounded-lg"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-sm truncate">
                        {item.title}
                      </h3>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6"
                        onClick={() => onRemoveItem(item.id)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
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
                        <span className="text-sm font-medium w-8 text-center">
                          {item.quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7"
                          onClick={() =>
                            onUpdateQuantity(item.id, item.quantity + 1)
                          }
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                      <p className="text-lg font-semibold">
                        £{(parseFloat(item.price) * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer with totals & checkout */}
            <div className="border-t pt-4 px-4 pb-6 space-y-4 flex-shrink-0 bg-background">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>£{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Delivery Fee</span>
                  <span>£{deliveryFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span>£{total.toFixed(2)}</span>
                </div>
              </div>
              <Button className="w-full" size="lg" onClick={onCheckout}>
                Proceed to Checkout (£{total.toFixed(2)})
              </Button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}

export default CartSheet
