import { useState } from "react"
import { Banknote, CreditCard, Plus, Wallet } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

interface PaymentMethodCardProps {
  selectedMethod: string
  onMethodChange: (method: string) => void
}

const savedCards = [
  {
    id: "card-1",
    type: "Visa",
    last4: "4242",
    expiry: "12/25",
  },
  {
    id: "card-2",
    type: "Mastercard",
    last4: "8888",
    expiry: "03/26",
  },
]

export const PaymentMethodCard = ({
  selectedMethod,
  onMethodChange,
}: PaymentMethodCardProps) => {
  const [showNewCard, setShowNewCard] = useState(false)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Method</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <RadioGroup value={selectedMethod} onValueChange={onMethodChange}>
          <div className="space-y-3">
            {savedCards.map((card) => (
              <div
                key={card.id}
                className={`flex items-center space-x-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                  selectedMethod === card.id
                    ? "border-primary bg-primary/5"
                    : "border-border hover:bg-muted"
                }`}
                onClick={() => onMethodChange(card.id)}
              >
                <RadioGroupItem value={card.id} id={card.id} />
                <CreditCard className="h-5 w-5 text-muted-foreground" />
                <Label htmlFor={card.id} className="flex-1 cursor-pointer">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">
                      {card.type} •••• {card.last4}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      Expires {card.expiry}
                    </span>
                  </div>
                </Label>
              </div>
            ))}

            {!showNewCard ? (
              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={() => setShowNewCard(true)}
              >
                <Plus className="h-4 w-4 mr-2" />
                Add New Card
              </Button>
            ) : (
              <div className="p-4 border rounded-lg space-y-3">
                <div className="space-y-2">
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input
                    id="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    maxLength={19}
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input id="expiry" placeholder="MM/YY" maxLength={5} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvv">CVV</Label>
                    <Input id="cvv" placeholder="123" maxLength={4} />
                  </div>
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowNewCard(false)}
                >
                  Cancel
                </Button>
              </div>
            )}

            <div
              className={`flex items-center space-x-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                selectedMethod === "wallet"
                  ? "border-primary bg-primary/5"
                  : "border-border hover:bg-muted"
              }`}
              onClick={() => onMethodChange("wallet")}
            >
              <RadioGroupItem value="wallet" id="wallet" />
              <Wallet className="h-5 w-5 text-muted-foreground" />
              <Label htmlFor="wallet" className="flex-1 cursor-pointer">
                <span className="font-medium">Digital Wallet</span>
                <span className="text-xs text-muted-foreground ml-2">
                  Apple Pay / Google Pay
                </span>
              </Label>
            </div>

            <div
              className={`flex items-center space-x-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                selectedMethod === "cash"
                  ? "border-primary bg-primary/5"
                  : "border-border hover:bg-muted"
              }`}
              onClick={() => onMethodChange("cash")}
            >
              <RadioGroupItem value="cash" id="cash" />
              <Banknote className="h-5 w-5 text-muted-foreground" />
              <Label htmlFor="cash" className="flex-1 cursor-pointer">
                <span className="font-medium">Cash on Delivery</span>
              </Label>
            </div>
          </div>
        </RadioGroup>
      </CardContent>
    </Card>
  )
}
