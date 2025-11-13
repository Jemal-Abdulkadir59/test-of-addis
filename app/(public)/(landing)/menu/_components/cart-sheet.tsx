import React from "react"
import {
  useDeleteCartItemMutation,
  useGetSpecialOffersQuery,
  useUpdateCartItemMutation,
} from "@/generated/graphql"
import { Minus, Plus, X } from "lucide-react"

import { toast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import CartSkeleton from "@/components/skeleton/cartSkeleton"

// import { CartItem } from "./cart"

interface CartItem {
  __typename?: "cart" | undefined
  id: any
  quantity: number
  added_at?: any
  price_at_purchase: number
  user: {
    __typename?: "users" | undefined
    id: any
    name: string
    email: string
  }
  menu_item: {
    __typename?: "menu_items" | undefined
    id: any
    name: string
    description: string
    price: any
    image_url: string
    is_available: boolean
  }
}

interface CartSheetProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onCheckout: () => void
  cartItems: CartItem[]
  loading: boolean
}

const CartSheet = ({
  open,
  onOpenChange,
  cartItems,
  loading,
  onCheckout,
}: CartSheetProps) => {
  // Query special offers Data
  // const {
  //   data: offersData,
  //   loading: loadingOffers,
  //   error: errorOffer,
  // } = useGetSpecialOffersQuery()

  // const specialOffers = offersData?.special_offers ?? []

  const [deleteCartItem, { loading: loadingDelete, error }] =
    useDeleteCartItemMutation({
      refetchQueries: ["GetUserCart"],
      awaitRefetchQueries: true,
    })
  const [updateCartItem] = useUpdateCartItemMutation()

  // Delete item from cart
  const onRemoveItem = async (id: string, name: string) => {
    try {
      const res = await deleteCartItem({
        variables: { id },
      })

      if (res.data?.delete_cart_by_pk?.id) {
        toast({
          title: "Removed from cart",
          description: `${name} has been deleted successfully.`,
          variant: "default",
        })
      } else {
        toast({
          title: "Failed to delete",
          description: "Could not delete the item. Please try again.",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Delete failed:", error)
      toast({
        title: "Error",
        description: "Something went wrong while deleting the item.",
        variant: "destructive",
      })
    }
  }

  // Update item from cart
  const onUpdateQuantity = async (
    id: string,
    quantity: number,
    name: string
  ) => {
    try {
      if (quantity <= 0) {
        const res = await deleteCartItem({
          variables: { id },
        })

        if (res.data?.delete_cart_by_pk?.id) {
          toast({
            title: "Removed from cart",
            description: `${name} has been deleted successfully.`,
            variant: "default",
          })
        }
      } else {
        await updateCartItem({
          variables: { id, quantity },
        })
      }
    } catch (err) {
      console.error(err)
      toast({
        title: "Error",
        description: "Failed to update cart",
        variant: "destructive",
      })
    }
  }

  console.log(cartItems)
  const subtotal =
    cartItems?.reduce(
      (sum, item) => sum + Number(item.price_at_purchase) * item.quantity,
      0
    ) ?? 0

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
          <SheetTitle>Your Cart ({cartItems.length} items)</SheetTitle>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onOpenChange(false)}
            className="sm:hidden"
          >
            <X className="h-5 w-5" />
          </Button>
        </SheetHeader>

        {loading ? (
          <CartSkeleton />
        ) : cartItems.length === 0 ? (
          <div className="flex-1 flex items-center justify-center">
            <p className="text-muted-foreground">Your cart is empty</p>
          </div>
        ) : (
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Scrollable items */}
            <div className="flex-1 overflow-y-auto py-4 px-4 space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 bg-card p-4 rounded-lg"
                >
                  <img
                    src={`/img/menu_items/${item.menu_item.image_url}`}
                    alt={item.menu_item.name}
                    className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-sm truncate">
                        {item.menu_item.name}
                      </h3>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6"
                        disabled={loadingDelete}
                        onClick={() =>
                          onRemoveItem(item.id, item.menu_item.name)
                        }
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
                              item.quantity - 1,
                              item.menu_item.name
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
                            onUpdateQuantity(
                              item.id,
                              item.quantity + 1,
                              item.menu_item.name
                            )
                          }
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                      <p className="text-lg font-semibold">
                        ETB
                        {(
                          Number(item.price_at_purchase) * item.quantity
                        ).toFixed(2)}
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
                  <span>ETB{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Delivery Fee</span>
                  <span>ETB{deliveryFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span>ETB{total.toFixed(2)}</span>
                </div>
              </div>
              <Button className="w-full" size="lg" onClick={onCheckout}>
                Proceed to Checkout (ETB{total.toFixed(2)})
              </Button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}

export default CartSheet
