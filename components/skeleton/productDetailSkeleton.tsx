import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Skeleton } from "@/components/ui/skeleton"

type DialogSkeletonProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ProductDetailSkeleton({
  open,
  onOpenChange,
}: DialogSkeletonProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">
            <Skeleton className="h-7 w-56" />
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Image */}
          <Skeleton className="w-full h-64 rounded-lg" />

          {/* Description */}
          <div>
            <Skeleton className="h-5 w-32 mb-2" />
            <Skeleton className="h-4 w-full mb-1" />
            <Skeleton className="h-4 w-3/4" />
          </div>

          {/* Ingredients */}
          <div>
            <Skeleton className="h-5 w-32 mb-2" />
            <Skeleton className="h-4 w-2/3 mb-1" />
            <Skeleton className="h-4 w-1/2" />
          </div>

          {/* Calories & Allergens */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Skeleton className="h-5 w-24 mb-2" />
              <Skeleton className="h-4 w-16" />
            </div>
            <div>
              <Skeleton className="h-5 w-24 mb-2" />
              <div className="flex flex-wrap gap-2">
                {[...Array(3)].map((_, i) => (
                  <Skeleton key={i} className="h-6 w-16 rounded-full" />
                ))}
              </div>
            </div>
          </div>

          {/* Quantity & Button */}
          <div className="flex items-center justify-between pt-4 border-t">
            <div className="flex items-center gap-4">
              <Skeleton className="h-10 w-10 rounded-md" />
              <Skeleton className="h-6 w-8" />
              <Skeleton className="h-10 w-10 rounded-md" />
            </div>
            <Button
              size="lg"
              disabled
              className="gap-2 opacity-50 pointer-events-none"
            >
              <Skeleton className="h-6 w-40 rounded-md" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
