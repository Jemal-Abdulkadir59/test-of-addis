import { Skeleton } from "@/components/ui/skeleton"

export default function CategoryTabsSkeleton() {
  return (
    <section className="bg-card border-b sticky top-0 z-10">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-4">
          <Skeleton className="h-6 w-64" />
          <Skeleton className="h-10 w-64 hidden md:block" />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {[...Array(7)].map((_, i) => (
            <Skeleton key={i} className="h-8 w-24 rounded-full" />
          ))}
        </div>
      </div>
    </section>
  )
}
