"use client"

import { useState } from "react"
import { Minus, Plus, X } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface OfferDetailProps {
  image: string
  title: string
  discount: string
  description: string
  originalPrice: string
  discountedPrice: string
  validUntil?: string
  terms?: string[]
  onClose: () => void
  onAddToCart: (item: any, quantity: number) => void
}

const OfferDetail = ({
  image,
  title,
  discount,
  description,
  originalPrice,
  discountedPrice,
  validUntil = "December 31, 2025",
  terms = [
    "Valid for first order only",
    "Cannot be combined with other offers",
    "Minimum order value may apply",
  ],
  onClose,
  onAddToCart,
}: OfferDetailProps) => {
  const [quantity, setQuantity] = useState(1)

  const handleAddToCart = () => {
    onAddToCart(
      {
        type: "offer",
        image,
        title,
        price: discountedPrice,
        discount,
      },
      quantity
    )
  }

  return (
    <Card className="mb-8 overflow-hidden">
      <div className="relative">
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 z-10 bg-background/80 backdrop-blur-sm hover:bg-background"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
        </Button>

        <div className="grid md:grid-cols-2 gap-6 p-6">
          <div className="relative">
            <img
              src={image}
              alt={title}
              className="w-full h-80 object-cover rounded-lg"
            />
            <Badge className="absolute top-3 right-3 bg-secondary text-secondary-foreground font-semibold text-lg px-4 py-2">
              {discount}
            </Badge>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">{title}</h2>
              <p className="text-muted-foreground">{description}</p>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold text-primary">
                GBP {discountedPrice}
              </span>
              <span className="text-xl text-muted-foreground line-through">
                GBP {originalPrice}
              </span>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Valid Until</h3>
              <p className="text-muted-foreground">{validUntil}</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Terms & Conditions</h3>
              <ul className="space-y-1">
                {terms.map((term, index) => (
                  <li
                    key={index}
                    className="text-sm text-muted-foreground flex items-start"
                  >
                    <span className="mr-2">•</span>
                    <span>{term}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between pt-4 border-t">
              <div className="flex items-center gap-4">
                <Button
                  size="icon"
                  variant="outline"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="text-xl font-semibold w-8 text-center">
                  {quantity}
                </span>
                <Button
                  size="icon"
                  variant="outline"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>

              <Button size="lg" className="gap-2" onClick={handleAddToCart}>
                Add to Cart - GBP{" "}
                {(parseFloat(discountedPrice) * quantity).toFixed(2)}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default OfferDetail
