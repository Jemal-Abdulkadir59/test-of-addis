import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export function OfferDetailSkeleton() {
  return (
    <Card className="mb-8 overflow-hidden">
      <div className="relative">
        {/* Close button placeholder */}
        <div className="absolute top-4 right-4 z-10">
          <Skeleton className="h-8 w-8 rounded-md" />
        </div>

        <div className="grid md:grid-cols-2 gap-6 p-6">
          {/* Left Side: Image + Badge */}
          <div className="relative">
            <Skeleton className="w-full h-80 rounded-lg" />
            <div className="absolute top-3 right-3">
              <Skeleton className="h-8 w-24 rounded-md" />
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="space-y-6">
            {/* Title + Description */}
            <div>
              <Skeleton className="h-8 w-48 mb-3" />
              <Skeleton className="h-4 w-full mb-1" />
              <Skeleton className="h-4 w-3/4" />
            </div>

            {/* Prices */}
            <div className="flex items-center gap-4">
              <Skeleton className="h-8 w-28" />
              <Skeleton className="h-6 w-20" />
            </div>

            {/* Valid Until */}
            <div>
              <Skeleton className="h-6 w-32 mb-2" />
              <Skeleton className="h-4 w-40" />
            </div>

            {/* Terms */}
            <div>
              <Skeleton className="h-6 w-40 mb-2" />
              <div className="space-y-2">
                {[...Array(3)].map((_, i) => (
                  <Skeleton key={i} className="h-4 w-full" />
                ))}
              </div>
            </div>

            {/* Quantity + Add Button */}
            <div className="flex items-center justify-between pt-4 border-t">
              <div className="flex items-center gap-4">
                <Skeleton className="h-10 w-10 rounded-md" />
                <Skeleton className="h-6 w-8" />
                <Skeleton className="h-10 w-10 rounded-md" />
              </div>
              <Button
                size="lg"
                disabled
                className="opacity-50 pointer-events-none"
              >
                <Skeleton className="h-6 w-48 rounded-md" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
