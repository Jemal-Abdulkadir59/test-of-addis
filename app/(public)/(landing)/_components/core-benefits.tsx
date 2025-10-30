import { CoreBenefitsList } from "./core-benefits-list"

export function CoreBenefits() {
  return (
    <section id="benefits" className="container grid gap-8">
      <div className="text-center mx-auto space-y-1.5">
        <h2 className="text-4xl font-semibold">Why Dine With Us</h2>
        <p className="max-w-prose text-sm text-muted-foreground">
          At Online Restaurant, we combine the passion of real chefs with the
          convenience of modern delivery. Every meal is freshly prepared,
          beautifully packed, and delivered to your door — hot and delicious.
        </p>
      </div>
      <CoreBenefitsList />
    </section>
  )
}
