import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"

export default function CartSkeleton() {
  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Scrollable items skeletons */}
      <div className="flex-1 overflow-y-auto py-4 px-4 space-y-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="flex gap-4 bg-card p-4 rounded-lg">
            {/* Image */}
            <Skeleton className="w-20 h-20 rounded-lg flex-shrink-0" />

            {/* Info */}
            <div className="flex-1 min-w-0 flex flex-col justify-between">
              <div className="flex justify-between items-start mb-2">
                <Skeleton className="h-4 w-2/3 rounded-md" />
                <Skeleton className="h-4 w-4 rounded-md" />
              </div>

              <div className="flex items-center justify-between">
                {/* Quantity controls */}
                <div className="flex items-center gap-2">
                  <Skeleton className="h-7 w-7 rounded-md" />
                  <Skeleton className="h-5 w-8 rounded-md" />
                  <Skeleton className="h-7 w-7 rounded-md" />
                </div>

                {/* Price */}
                <Skeleton className="h-5 w-16 rounded-md" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer skeleton */}
      <div className="border-t pt-4 px-4 pb-6 space-y-4 flex-shrink-0 bg-background">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-16" />
          </div>
          <div className="flex justify-between text-sm">
            <Skeleton className="h-4 w-28" />
            <Skeleton className="h-4 w-16" />
          </div>
          <div className="flex justify-between text-lg font-semibold">
            <Skeleton className="h-5 w-20" />
            <Skeleton className="h-5 w-16" />
          </div>
        </div>
        <Button disabled className="w-full h-11 opacity-70">
          <Skeleton className="h-6 w-1/2 mx-auto rounded-md" />
        </Button>
      </div>
    </div>
  )
}
