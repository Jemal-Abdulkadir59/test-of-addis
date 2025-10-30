import { ProductsByCarousel } from "./products-by-carousel"

export function Products() {
  return (
    <section id="trusted-by" className="container grid gap-8 -mt-12">
      <h2 className="sr-only">Products</h2>
      <ProductsByCarousel />
    </section>
  )
}
