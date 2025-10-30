import { Plus } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface OfferCardProps {
  image: string
  title: string
  discount: string
  onClick?: () => void
}

const OfferCard = ({ image, title, discount, onClick }: OfferCardProps) => {
  return (
    <Card
      className="relative overflow-hidden group cursor-pointer hover:shadow-lg transition-all"
      onClick={onClick}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Badge className="absolute top-3 right-3 bg-secondary text-secondary-foreground font-semibold">
          {discount}
        </Badge>
      </div>
      <div className="p-4 flex items-center justify-between">
        <h3 className="font-semibold">{title}</h3>
        <Button
          size="icon"
          variant="default"
          className="rounded-full"
          onClick={(e) => {
            e.stopPropagation()
            onClick?.()
          }}
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  )
}

export default OfferCard
