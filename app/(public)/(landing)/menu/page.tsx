"use client"

import { useState } from "react"
import { useGetMenuQuery } from "@/generated/graphql"

import { useToast } from "@/hooks/use-toast"
import { Skeleton } from "@/components/ui/skeleton"
import { CartItem } from "./_components/cart"
// import CartSheet from "./_components/cart-sheet"
import CategoryTabs from "./_components/category-tabs"
import HeroSection from "./_components/hero-section"
// import Header from "./_components/layout/header"
import OfferCard from "./_components/offer-card"
import OfferDetail from "./_components/offer-detail"
import ProductCard from "./_components/product-card"
import ProductDetail from "./_components/product-detail"
import CategoryTabsSkeleton from "@/components/skeleton/categoryTabsSkeleton"
import ProductCardSkeleton from "@/components/skeleton/productCardSkeleton"
import { SpecialOffersSkeleton } from "@/components/skeleton/specialOffersSkeleton"

const Index = () => {
  const { toast } = useToast()

  const [selectedOffer, setSelectedOffer] = useState<any>(null)
  const [selectedProduct, setSelectedProduct] = useState<any>(null)
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  // const [isCartOpen, setIsCartOpen] = useState(false)

  const offers = [
    {
      id: 1,
      image: "/assets/offer-1.jpg",
      title: "First Order Discount",
      discount: "-20%",
      description:
        "Get 20% off on your first order! Enjoy our delicious menu at a special price.",
      originalPrice: "25.00",
      discountedPrice: "20.00",
      validUntil: "December 31, 2025",
      terms: [
        "Valid for first order only",
        "Cannot be combined with other offers",
        "Minimum order value GBP 15.00",
      ],
    },
    {
      id: 2,
      image: "/assets/offer-2.jpg",
      title: "Vegan Discount",
      discount: "-20%",
      description:
        "Special discount on all our vegan menu items. Tasty and healthy!",
      originalPrice: "18.00",
      discountedPrice: "14.40",
      validUntil: "January 15, 2026",
      terms: [
        "Valid on vegan items only",
        "Available all day",
        "No minimum order",
      ],
    },
    {
      id: 3,
      image: "/assets/offer-3.jpg",
      title: "Free Ice Cream Offer",
      discount: "-100%",
      description:
        "Get a free ice cream with any combo meal purchase. Sweet deal!",
      originalPrice: "3.50",
      discountedPrice: "0.00",
      validUntil: "November 30, 2025",
      terms: [
        "Must purchase a combo meal",
        "One per order",
        "Subject to availability",
      ],
    },
  ]

  const products = [
    {
      id: 1,
      image: "/img/gallery/meal-small.jpg",
      title: "The classics for 3",
      description:
        "McDonald's big tasty - Royal Cheeseburger 3 medium fries | Fries, Pepsi, 3 cold drinks",
      price: "21.10",
      ingredients:
        "Premium beef patty, sesame seed bun, cheddar cheese, lettuce, tomato, onions, pickles, special sauce",
      calories: "850",
      allergens: ["Gluten", "Dairy", "Eggs", "Soy"],
    },
    {
      id: 2,
      image: "/img/meals/cookie.jpg",
      title: "The classics for 3",
      description:
        "McDonald's big tasty - Royal Cheeseburger 3 medium fries | Fries, Pepsi, 3 cold drinks",
      price: "21.10",
      ingredients:
        "Premium beef patty, sesame seed bun, cheddar cheese, lettuce, tomato, onions, pickles, special sauce",
      calories: "850",
      allergens: ["Gluten", "Dairy", "Eggs", "Soy"],
    },
    {
      id: 3,
      image: "/img/meals/meal-3.jpg",
      title: "Royal Cheese Burger with extra Fries",
      description:
        "Royal Cheeseburger 3 medium fries | Fries, Pepsi, 3 cold drinks",
      price: "21.10",
      ingredients:
        "Quarter pound beef patty, sesame seed bun, double cheddar cheese, lettuce, onions, pickles, ketchup, mustard",
      calories: "720",
      allergens: ["Gluten", "Dairy", "Soy"],
    },
    {
      id: 4,
      image: "/img/meals/meal-4.jpg",
      title: "The classics for 3",
      description:
        "McDonald's big tasty - Royal Cheeseburger 3 medium fries | Fries, Pepsi, 3 cold drinks",
      price: "34.10",
      ingredients:
        "Premium beef patty, sesame seed bun, cheddar cheese, lettuce, tomato, onions, pickles, special sauce",
      calories: "850",
      allergens: ["Gluten", "Dairy", "Eggs", "Soy"],
    },
    {
      id: 5,
      image: "/img/meals/meal-5.jpg",
      title: "The classics for 3",
      description:
        "McDonald's big tasty - Royal Cheeseburger 3 medium fries | Fries, Pepsi, 3 cold drinks",
      price: "21.10",
      ingredients:
        "Premium beef patty, sesame seed bun, cheddar cheese, lettuce, tomato, onions, pickles, special sauce",
      calories: "850",
      allergens: ["Gluten", "Dairy", "Eggs", "Soy"],
    },
    {
      id: 6,
      image: "/img/meals/meal-6.jpg",
      title: "The classics for 3",
      description:
        "McDonald's big tasty - Royal Cheeseburger 3 medium fries | Fries, Pepsi, 3 cold drinks",
      price: "21.10",
      ingredients:
        "Premium beef patty, sesame seed bun, cheddar cheese, lettuce, tomato, onions, pickles, special sauce",
      calories: "850",
      allergens: ["Gluten", "Dairy", "Eggs", "Soy"],
    },
  ]

  // Query Data

  const handleAddToCart = (item: any, quantity: number) => {
    const newItem: CartItem = {
      id: `${item.type}-${Date.now()}-${Math.random()}`,
      type: item.type,
      image: item.image,
      title: item.title,
      price: item.price,
      quantity,
      discount: item.discount,
    }

    setCartItems([...cartItems, newItem])
    toast({
      title: "Added to cart",
      description: `${item.title} has been added to your cart.`,
    })
  }

  const handleOfferClick = (offer: any) => {
    setSelectedOffer(offer)

    // Wait for the component to render before scrolling
    setTimeout(() => {
      const detailSection = document.getElementById("offer-detail")
      if (detailSection) {
        detailSection.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }, 100) // small delay ensures OfferDetail is mounted
  }

  const { data, loading, error } = useGetMenuQuery()

  console.log("Menu Data:", data, loading, error)

  return (
    <div className="min-h-screen">
      {/*<Header*/}
      <HeroSection isLoading={loading} />
      {loading ? <CategoryTabsSkeleton /> : <CategoryTabs />}

      <main className="container mx-auto px-4 py-8">
        {selectedOffer && (
          <div className="mb-8" id="offer-detail">
            <OfferDetail
              {...selectedOffer}
              onClose={() => setSelectedOffer(null)}
              onAddToCart={handleAddToCart}
            />
          </div>
        )}
        {loading ? (
          <SpecialOffersSkeleton />
        ) : (
          <section id="offers" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Special Offers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {offers.map((offer) => (
                <OfferCard
                  key={offer.id}
                  {...offer}
                  onClick={() => handleOfferClick(offer)}
                />
              ))}
            </div>
          </section>
        )}
        {loading ? (
          Array.from({ length: 6 }).map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))
        ) : (
          <section>
            <h2 className="text-3xl font-bold mb-6">Foods</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  {...product}
                  image={product.image}
                  onClick={() => setSelectedProduct(product)}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          </section>
        )}
      </main>

      {/* <CartSheet
        open={isCartOpen}
        onOpenChange={setIsCartOpen}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
      /> */}

      {selectedProduct && (
        <ProductDetail
          open={!!selectedProduct}
          onOpenChange={(open) => !open && setSelectedProduct(null)}
          {...selectedProduct}
          onAddToCart={handleAddToCart}
        />
      )}
    </div>
  )
}

export default Index

// const handleUpdateQuantity = (id: string, quantity: number) => {
//   setCartItems(
//     cartItems.map((item) => (item.id === id ? { ...item, quantity } : item))
//   )
// }

// const handleRemoveItem = (id: string) => {
//   setCartItems(cartItems.filter((item) => item.id !== id))
//   toast({
//     title: "Removed from cart",
//     description: "Item has been removed from your cart.",
//   })
// }

// const handleCheckout = () => {
//   if (cartItems.length === 0) {
//     toast({
//       title: "Cart is empty",
//       description: "Please add items to your cart before checking out.",
//       variant: "destructive",
//     })
//     return
//   }
//   navigate("/checkout", { state: { cartItems } })
// }
