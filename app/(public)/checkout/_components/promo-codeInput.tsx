import { useState } from "react"
import { Check, Tag, X } from "lucide-react"

import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

interface PromoCodeInputProps {
  onPromoApplied?: (discount: number) => void
  setPromoCode?: (code: string) => void
  promoCode?: string
}

export const PromoCodeInput = ({
  onPromoApplied,
  setPromoCode = (code: string) => {},
  promoCode = "",
}: PromoCodeInputProps) => {
  const [appliedPromo, setAppliedPromo] = useState<{
    code: string
    discount: number
  } | null>(null)
  const { toast } = useToast()

  const validPromoCodes = {
    SAVE10: 10,
    WELCOME20: 20,
    FIRST15: 15,
  }

  const applyPromoCode = () => {
    const code = promoCode.toUpperCase()
    const discount = validPromoCodes[code as keyof typeof validPromoCodes]

    if (discount) {
      setAppliedPromo({ code, discount })
      onPromoApplied?.(discount)
      toast({
        title: "Promo code applied!",
        description: `You saved ${discount}% on your order.`,
      })
    } else {
      toast({
        title: "Invalid promo code",
        description: "Please check your code and try again.",
        variant: "destructive",
      })
    }
  }

  const removePromoCode = () => {
    setAppliedPromo(null)
    setPromoCode("")
    onPromoApplied?.(0)
    toast({
      title: "Promo code removed",
      description: "Your discount has been removed.",
    })
  }

  return (
    <Card>
      <CardContent className="pt-6">
        {!appliedPromo ? (
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Tag className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Enter promo code"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="pl-10"
                onKeyDown={(e) => e.key === "Enter" && applyPromoCode()}
              />
            </div>
            <Button onClick={applyPromoCode} disabled={!promoCode}>
              Apply
            </Button>
          </div>
        ) : (
          <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-800">
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-600 dark:text-green-400" />
              <div>
                <div className="font-medium text-sm text-green-900 dark:text-green-100">
                  {appliedPromo.code}
                </div>
                <div className="text-xs text-green-700 dark:text-green-300">
                  {appliedPromo.discount}% discount applied
                </div>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={removePromoCode}
              className="h-8 w-8"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        )}
        <div className="mt-3 text-xs text-muted-foreground">
          Try: SAVE10, WELCOME20, or FIRST15
        </div>
      </CardContent>
    </Card>
  )
}
