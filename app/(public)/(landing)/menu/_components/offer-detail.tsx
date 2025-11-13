"use client"

import { useState } from "react"
import { useGetOfferByIdQuery } from "@/generated/graphql"
import { Minus, Plus, X } from "lucide-react"

import { formatCurrency, formatDate } from "@/lib/utils"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { OfferDetailSkeleton } from "@/components/skeleton/offerDetailSkeleton"

interface OfferDetailProps {
  selectedOffer: string
  onClose: () => void
  onAddToCart: (item: any, quantity: number) => void
}

const OfferDetail = ({
  selectedOffer,
  onClose,
  onAddToCart,
}: OfferDetailProps) => {
  const [quantity, setQuantity] = useState(1)

  const {
    data: data,
    loading: isLoadingOffers,
    error,
  } = useGetOfferByIdQuery({
    variables: { id: selectedOffer },
  })

  const offerData = data?.special_offers_by_pk

  const discount_percent = Math.round(
    ((offerData?.menu_item?.price - offerData?.discount_price) /
      offerData?.menu_item?.price) *
      100
  )
  const discountLabel = `-${discount_percent}%`

  const handleAddToCart = (e: React.MouseEvent, id: string) => {
    e.stopPropagation()

    if (onAddToCart) {
      onAddToCart(id, quantity)
    }
  }

  return (
    <Card className="mb-8 overflow-hidden">
      {isLoadingOffers ? (
        <OfferDetailSkeleton />
      ) : (
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
                src={`/img/menu_items/${offerData?.menu_item?.image_url}`}
                alt={offerData?.title}
                className="w-full h-80 object-cover rounded-lg"
              />
              <Badge className="absolute top-3 right-3 bg-secondary text-secondary-foreground font-semibold text-lg px-4 py-2">
                {discountLabel}
              </Badge>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-2">
                  {offerData?.menu_item?.name}
                </h2>
                <p className="text-muted-foreground mb-2">
                  {offerData?.description}
                </p>
                <p className="text-muted-foreground">
                  {offerData?.menu_item?.description}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-primary">
                  {formatCurrency(offerData?.discount_price, "en", "ETB")}
                </span>
                <span className="text-xl text-muted-foreground line-through">
                  {formatCurrency(offerData?.menu_item?.price, "en", "ETB")}
                </span>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Valid Until</h3>
                <p className="text-muted-foreground">
                  {formatDate(offerData?.valid_until)}
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Terms & Conditions
                </h3>
                <ul className="space-y-1">
                  {offerData?.terms?.map((term, index) => (
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

                <Button
                  size="lg"
                  className="gap-2"
                  onClick={(e) => handleAddToCart(e, offerData?.menu_item?.id)}
                >
                  Add to Cart - ETB{" "}
                  {(parseFloat(offerData?.discount_price) * quantity).toFixed(
                    2
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Card>
  )
}

export default OfferDetail
