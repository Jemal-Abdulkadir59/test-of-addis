"use client"

import { useState } from "react"
import { Plus } from "lucide-react"

import { formatCurrency } from "@/lib/utils"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import ProductDetail from "./product-detail"

interface ProductCardProps {
  id: string
  category_id: string
  name: string
  description: string
  ingredients: string
  price: number
  image_url: string
  is_available: boolean
  calories?: string
  allergens?: string[]
  loadingAddToCart?: boolean
  // onClick?: () => void
  onAddToCart?: (item: any, quantity: number) => void
  specialOffers?: {
    id: string
    title: string
    discount_price: number
    banner_image?: string | null | undefined
    menu_item?: {
      id: string
      name: string
      price: number
      description: string
      image_url: string
      is_available: boolean
    }
  }[]
}

const ProductCard = ({
  id,
  name,
  image_url: image,
  description,
  price,
  ingredients,
  is_available,
  calories,
  allergens,
  loadingAddToCart,
  specialOffers,
  onAddToCart,
}: ProductCardProps) => {
  const [detailOpen, setDetailOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<any>(null)

  const handleCardClick = (e: React.MouseEvent, id: string) => {
    e.stopPropagation()
    if (id) setSelectedProduct(id)
    setDetailOpen(true)
  }

  const handleAddToCart = (e: React.MouseEvent, id: string) => {
    e.stopPropagation()

    if (onAddToCart) {
      onAddToCart(id, 1)
    } else {
      setDetailOpen(true)
    }
  }

  const specialOffer = specialOffers?.find(
    (offer) => offer.menu_item?.id === id
  )

  let discountLabel
  if (specialOffer) {
    const priceValue = Number(price) || 0
    let discount_percent = 0
    if (priceValue > 0) {
      discount_percent = Math.round(
        ((priceValue - specialOffer.discount_price) / priceValue) * 100
      )
    }
    discountLabel = `-${discount_percent}%`
  }

  const itemPrice = specialOffer ? specialOffer.discount_price : price

  return (
    <>
      <Card
        className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
        onClick={(e) => handleCardClick(e, id)}
      >
        <div className="grid md:grid-cols-2 gap-4 p-4">
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="font-semibold text-lg mb-2">{name}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {description}
              </p>
            </div>

            <div>
              <div>
                {specialOffer && (
                  <span className="text-sm text-muted-foreground line-through">
                    {formatCurrency(price, "en", "ETB")}
                  </span>
                )}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold">
                  {formatCurrency(itemPrice, "en", "ETB")}
                </span>

                <Button
                  size="icon"
                  variant="default"
                  className="rounded-full"
                  disabled={!is_available || loadingAddToCart}
                  onClick={(e) => handleAddToCart(e, id)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          <div className="relative aspect-[4/4] overflow-hidden rounded-lg">
            <img
              src={`/img/menu_items/${image}`}
              alt={name}
              className="w-full h-full object-cover rounded-lg"
            />
            {specialOffer && (
              <Badge className="absolute top-2 right-2 bg-secondary text-secondary-foreground font-semibold">
                {discountLabel}
              </Badge>
            )}
          </div>
        </div>
      </Card>

      {detailOpen && selectedProduct ? (
        <ProductDetail
          open={detailOpen}
          onOpenChange={setDetailOpen}
          selectedProduct={selectedProduct}
          onAddToCart={onAddToCart}
          loadingAddToCart={loadingAddToCart}
          specialOffers={specialOffers}
        />
      ) : null}
    </>
  )
}

export default ProductCard
