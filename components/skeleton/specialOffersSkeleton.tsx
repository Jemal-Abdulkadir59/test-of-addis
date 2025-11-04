import { Card } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export function SpecialOffersSkeleton() {
  return (
    <section id="offers" className="mb-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
        {[...Array(3)].map((_, i) => (
          <Card className="relative overflow-hidden">
            {/* Image placeholder */}
            <div className="relative h-40 overflow-hidden">
              <Skeleton className="w-full h-full" />

              {/* Discount badge placeholder */}
              <div className="absolute top-3 right-3">
                <Skeleton className="h-6 w-16 rounded-md" />
              </div>
            </div>

            {/* Content placeholder */}
            <div className="p-4 flex items-center justify-between">
              <Skeleton className="h-5 w-32" />
              <Skeleton className="h-9 w-9 rounded-full" />
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
