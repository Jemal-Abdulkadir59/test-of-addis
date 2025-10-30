import { Clock, Star, Wallet } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-card via-background to-muted/30">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-sm text-muted-foreground mb-2">I'm lovin' it</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Fresh Taste. Fast Delivery.
            </h1>
            <div className="flex flex-wrap gap-3 mb-6">
              <Button variant="secondary" className="gap-2">
                <Wallet className="h-4 w-4" />
                Minimum Order: 12 GBP
              </Button>
              <Button variant="secondary" className="gap-2">
                <Clock className="h-4 w-4" />
                Delivery in 20-30 Minutes
              </Button>
            </div>
            <Badge className="bg-primary text-primary-foreground">
              Open until 3:00 AM
            </Badge>
          </div>
          <div className="relative">
            <img
              src="/img/gallery/meal-small.jpg"
              alt="Delicious Meal"
              className="w-full h-85 object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute -top-4 -right-4 bg-card p-4 rounded-xl shadow-lg">
              <div className="flex items-center gap-2">
                <div className="text-4xl font-bold">3.4</div>
                <Star className="h-6 w-6 fill-primary text-primary" />
              </div>
              <p className="text-xs text-muted-foreground">1,360 reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
