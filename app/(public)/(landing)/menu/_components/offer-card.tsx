import { useState } from "react"
import { Plus } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface OfferCardProps {
  id: any
  title: string
  banner_image?: string | null | undefined
  discount_price: any
  menu_item?: {
    id: any
    price: any
    is_available: boolean
  }
  onClick?: (id: string) => void
  onAddToCart?: (item: any, quantity: number) => void
  loadingAddToCart?: boolean
}

const OfferCard = ({
  id,
  banner_image,
  title,
  discount_price,
  menu_item,
  loadingAddToCart,
  onClick,
  onAddToCart,
}: OfferCardProps) => {
  const discount_percent = Math.round(
    ((menu_item?.price - discount_price) / menu_item?.price) * 100
  )
  const discountLabel = `-${discount_percent}%`

  const handleAddToCart = (e: React.MouseEvent, id: string) => {
    e.stopPropagation()

    if (onAddToCart) {
      onAddToCart(id, 1)
    }
  }
  return (
    <Card
      className="relative overflow-hidden group cursor-pointer hover:shadow-lg transition-all"
      onClick={(e) => onClick?.(id)}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={`/img/offers_banner/${banner_image}`}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Badge className="absolute top-3 right-3 bg-secondary text-secondary-foreground font-semibold">
          {discountLabel}
        </Badge>
      </div>
      <div className="p-4 flex items-center justify-between">
        <h3 className="font-semibold">{title}</h3>
        <Button
          size="icon"
          variant="default"
          className="rounded-full"
          disabled={!menu_item?.is_available || loadingAddToCart}
          onClick={(e) => handleAddToCart(e, menu_item?.id)}
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  )
}

export default OfferCard
