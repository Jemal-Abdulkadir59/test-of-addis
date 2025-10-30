"use client"

import { useState } from "react"
import { Minus, Plus } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface ProductDetailProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  image: string
  title: string
  description: string
  price: string
  ingredients?: string
  calories?: string
  allergens?: string[]
  onAddToCart?: (item: any, quantity: number) => void
}

const ProductDetail = ({
  open,
  onOpenChange,
  image,
  title,
  description,
  price,
  ingredients = "Premium beef patty, lettuce, tomato, cheese, pickles, onions, special sauce",
  calories = "650",
  allergens = ["Gluten", "Dairy", "Eggs"],
  onAddToCart,
}: ProductDetailProps) => {
  const [quantity, setQuantity] = useState(1)

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(
        {
          type: "product",
          image,
          title,
          price,
        },
        quantity
      )
      onOpenChange(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{title}</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <img
            src="/assets/burger-combo.jpg"
            alt={title}
            className="w-full h-64 object-cover rounded-lg"
          />

          <div>
            <h3 className="font-semibold text-lg mb-2">Description</h3>
            <p className="text-muted-foreground">{description}</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Ingredients</h3>
            <p className="text-sm text-muted-foreground">{ingredients}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Calories</h3>
              <p className="text-muted-foreground">{calories} kcal</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Allergens</h3>
              <div className="flex flex-wrap gap-2">
                {allergens.map((allergen) => (
                  <Badge key={allergen} variant="secondary">
                    {allergen}
                  </Badge>
                ))}
              </div>
            </div>
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
              Add to Cart - GBP {(parseFloat(price) * quantity).toFixed(2)}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ProductDetail
