import { Skeleton } from "@/components/ui/skeleton"

export default function CartMiniSkeleton() {
  return (
    <div className="space-y-3">
      {Array.from({ length: 2 }).map((_, i) => (
        <div key={i} className="flex gap-3">
          {/* Image skeleton */}
          <Skeleton className="w-16 h-16 rounded-lg" />

          <div className="flex-1 space-y-2">
            {/* Top row: title + price */}
            <div className="flex justify-between">
              <Skeleton className="h-4 w-2/3 rounded-md" />
              <Skeleton className="h-4 w-12 rounded-md" />
            </div>

            {/* Qty line */}
            <Skeleton className="h-3 w-32 rounded-md" />
          </div>
        </div>
      ))}
    </div>
  )
}
