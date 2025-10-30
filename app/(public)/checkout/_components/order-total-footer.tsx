import { Lock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

interface OrderTotalFooterProps {
  subtotal: number
  deliveryFee: number
  tax: number
  discount: number
  total: number
  loading: boolean
  onCheckout: () => void
}

export const OrderTotalFooter = ({
  subtotal,
  deliveryFee,
  tax,
  discount,
  total,
  loading,
  onCheckout,
}: OrderTotalFooterProps) => {
  return (
    <Card className="sticky bottom-4 shadow-lg">
      <CardContent className="pt-6 space-y-3">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Subtotal</span>
            <span className="font-medium">£{subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Delivery Fee</span>
            <span className="font-medium">£{deliveryFee.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Tax (VAT 20%)</span>
            <span className="font-medium">£{tax.toFixed(2)}</span>
          </div>
          {discount > 0 && (
            <div className="flex justify-between text-sm text-green-600 dark:text-green-400">
              <span>Discount</span>
              <span className="font-medium">-£{discount.toFixed(2)}</span>
            </div>
          )}
        </div>

        <Separator />

        <div className="flex justify-between text-lg font-bold">
          <span>Total</span>
          <span>£{total.toFixed(2)}</span>
        </div>

        <Button
          onClick={onCheckout}
          disabled={loading}
          className="w-full h-12 text-base"
          size="lg"
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <span className="animate-spin">⏳</span>
              Processing...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Lock className="h-4 w-4" />
              Place Order
            </span>
          )}
        </Button>

        <p className="text-xs text-center text-muted-foreground">
          By placing this order, you agree to our Terms & Conditions
        </p>
      </CardContent>
    </Card>
  )
}
