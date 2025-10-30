"use client"

import { useState } from "react"
import { Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import ProductDetail from "./product-detail"

interface ProductCardProps {
  image: string
  title: string
  description: string
  price: string
  ingredients?: string
  calories?: string
  allergens?: string[]
  onClick?: () => void
  onAddToCart?: (item: any, quantity: number) => void
}

const ProductCard = ({
  image,
  title,
  description,
  price,
  ingredients,
  calories,
  allergens,
  onClick,
  onAddToCart,
}: ProductCardProps) => {
  const [detailOpen, setDetailOpen] = useState(false)

  const handleCardClick = () => {
    if (onClick) {
      onClick()
    } else {
      setDetailOpen(true)
    }
  }

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (onAddToCart) {
      onAddToCart(
        {
          type: "product",
          image,
          title,
          price,
        },
        1
      )
    } else {
      setDetailOpen(true)
    }
  }

  return (
    <>
      <Card
        className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
        onClick={handleCardClick}
      >
        <div className="grid md:grid-cols-2 gap-4 p-4">
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="font-semibold text-lg mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {description}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold">GBP {price}</span>
              <Button
                size="icon"
                variant="default"
                className="rounded-full"
                onClick={handleAddToCart}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="aspect-[3/4] overflow-hidden rounded-lg">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </Card>

      <ProductDetail
        open={detailOpen}
        onOpenChange={setDetailOpen}
        image={image}
        title={title}
        description={description}
        price={price}
        ingredients={ingredients}
        calories={calories}
        allergens={allergens}
        onAddToCart={onAddToCart}
      />
    </>
  )
}

export default ProductCard
