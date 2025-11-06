"use client"

import { useState } from "react"
import { useGetMenuItemByIdQuery } from "@/generated/graphql"
import { Minus, Plus } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { ProductDetailSkeleton } from "@/components/skeleton/productDetailSkeleton"

interface ProductDetailProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onAddToCart?: (item: any, quantity: number) => void
  selectedProduct: string
  loadingAddToCart?: boolean
}

const ProductDetail = ({
  open,
  onOpenChange,
  onAddToCart,
  selectedProduct,
  loadingAddToCart,
}: ProductDetailProps) => {
  const [quantity, setQuantity] = useState(1)

  // query to fetch product details by ID
  const {
    data,
    loading: isLoadingDetail,
    error,
  } = useGetMenuItemByIdQuery({
    variables: { id: selectedProduct },
  })

  const {
    id,
    name,
    description,
    price,
    ingredients,
    calories,
    allergens,
    image_url: image,
  } = data?.menu_items_by_pk || {}

  const handleAddToCart = (e: React.MouseEvent, id: string) => {
    e.stopPropagation()

    if (onAddToCart) {
      onAddToCart(id, quantity)
      onOpenChange(false)
    }
  }

  if (isLoadingDetail)
    return <ProductDetailSkeleton open={open} onOpenChange={onOpenChange} />
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{name}</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <img
            src={`/img/menu_items/${image}`}
            alt={name}
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
                {allergens.map((allergen: string) => (
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

            <Button
              size="lg"
              className="gap-2"
              disabled={loadingAddToCart}
              onClick={(e) => handleAddToCart(e, id)}
            >
              Add to Cart - ETB {(parseFloat(price) * quantity).toFixed(2)}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ProductDetail
