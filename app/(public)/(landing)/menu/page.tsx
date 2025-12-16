"use client"

import { useCallback, useMemo, useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import {
  useAddToCartMutation,
  useGetMenuQuery,
  useGetSpecialOffersQuery,
  useGetUserCartQuery,
  useSearchMenuLazyQuery,
} from "@/generated/graphql"
import { getSession } from "next-auth/react"

import { useToast } from "@/hooks/use-toast"
import { Skeleton } from "@/components/ui/skeleton"
// import CartSheet from "./_components/cart-sheet"
import CategoryTabs from "./_components/category-tabs"
import HeroSection from "./_components/hero-section"
// import Header from "./_components/layout/header"
import OfferCard from "./_components/offer-card"
import OfferDetail from "./_components/offer-detail"
import ProductCard from "./_components/product-card"
import CategoryTabsSkeleton from "@/components/skeleton/categoryTabsSkeleton"
import ProductCardSkeleton from "@/components/skeleton/productCardSkeleton"
import { SpecialOffersSkeleton } from "@/components/skeleton/specialOffersSkeleton"
import debounce from "lodash.debounce"

const Index = () => {
  const { toast } = useToast()
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedOffer, setSelectedOffer] = useState<string>("")
  const router = useRouter()
  const pathname = usePathname()

  // query to search menu items
  const [searchTerm, setSearchTerm] = useState("")
  const [searchMenu, { data: searchResults, loading: loadingSearch }] =
    useSearchMenuLazyQuery()
  const searchedMenuItems = searchResults?.menu_items || []

  // If searchResults exist, use them; otherwise, use full menu query results
  // Debounced search function (400ms)
  const debouncedSearch = useCallback(
    debounce((value: string) => {
      searchMenu({
        variables: { search: `%${value}%` },
      })
    }, 400),
    []
  )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchTerm(value)
    debouncedSearch(value)
  }

  // Query special offers Data
  const {
    data: offersData,
    loading: loadingOffers,
    error: errorOffer,
  } = useGetSpecialOffersQuery()

  const specialOffers = offersData?.special_offers ?? []

  //# Query to fetch menu items
  const { data: products, loading, error } = useGetMenuQuery()

  // ✅ UseMemo prevents recalculation every render
  const filteredProducts = useMemo(() => {
    if (!products?.menu_items) return []
    if (!selectedCategory) {
      return searchedMenuItems.length > 0
        ? searchedMenuItems
        : products.menu_items
    }

    if (searchedMenuItems) {
      return searchedMenuItems.filter(
        (item) => item.category_id === selectedCategory
      )
    }
    return products.menu_items.filter(
      (item) => item.category_id === selectedCategory
    )
  }, [products, selectedCategory, searchedMenuItems])

  //# Mutation to add item to cart
  const [
    addToCart,
    { data: addToCartData, loading: loadingAddToCart, error: errorAddToCart },
  ] = useAddToCartMutation({
    refetchQueries: ["GetUserCart"],
    awaitRefetchQueries: true,
  })

  const handleAddToCart = async (menuItemId: string, quantity: number) => {
    const session = await getSession()

    if (!session) {
      return router.push(`/auth/sign-in?redirectTo=${pathname}`)
    }

    // find the selected menu item and any related special offer
    const menuItem = products?.menu_items.find((item) => item.id === menuItemId)
    const specialOffer = specialOffers?.find(
      (offer) => offer.menu_item?.id === menuItemId
    )

    if (!menuItem) return

    // calculate correct price at purchase
    const price_at_purchase = specialOffer
      ? specialOffer.discount_price
      : menuItem.price

    try {
      const result = await addToCart({
        variables: {
          user_id: session.user.id,
          menu_item_id: menuItemId,
          quantity: quantity,
          special_offer_id: specialOffer?.id ?? null,
          price_at_purchase,
        },
      })

      const itemName = result.data?.insert_cart_one?.menu_item?.name

      toast({
        title: "Added to cart",
        description: `${itemName} has been added to your cart.`,
      })
    } catch (error: any) {
      console.error("Add to cart error:", error)

      // Extract error message from GraphQL error
      const message = error?.message || ""
      if (
        message.includes("Uniqueness violation") ||
        message.includes("duplicate key value")
      ) {
        toast({
          title: "Item already in cart",
          description: "This item is already in your cart.",
          variant: "destructive",
        })
      } else {
        toast({
          title: "Failed to add item to cart",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        })
      }
    }
  }

  const handleOfferClick = (id: string) => {
    setSelectedOffer(id)

    // Wait for the component to render before scrolling
    setTimeout(() => {
      const detailSection = document.getElementById("offer-detail")
      if (detailSection) {
        detailSection.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }, 100) // small delay ensures OfferDetail is mounted
  }

  return (
    <div className="min-h-screen">
      {/*<Header*/}
      <HeroSection isLoading={loading} />
      {loading ? (
        <CategoryTabsSkeleton />
      ) : (
        <CategoryTabs
          setSelectedCategory={setSelectedCategory}
          handleChange={handleChange}
          searchTerm={searchTerm}
        />
      )}

      <main className="container mx-auto px-4 py-8">
        {selectedOffer && (
          <div className="mb-8" id="offer-detail">
            <OfferDetail
              selectedOffer={selectedOffer}
              onClose={() => setSelectedOffer("")}
              onAddToCart={handleAddToCart}
            />
          </div>
        )}
        {loadingOffers ? (
          <SpecialOffersSkeleton />
        ) : (
          <section id="offers" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Special Offers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {specialOffers.map((offer) => (
                <OfferCard
                  key={offer.id}
                  {...offer}
                  menu_item={offer.menu_item ?? undefined}
                  onAddToCart={handleAddToCart}
                  loadingAddToCart={loadingAddToCart}
                  onClick={(id) => handleOfferClick(id)}
                />
              ))}
            </div>
          </section>
        )}
        {loading || loadingSearch ? (
          <>
            <h2 className="text-3xl font-bold mb-6">
              {" "}
              <Skeleton className="h-8 w-20" />
            </h2>
            {Array.from({ length: 2 }).map((_, i) => (
              <ProductCardSkeleton key={i} />
            ))}
          </>
        ) : (
          <section>
            <h2 className="text-3xl font-bold mb-6">Menu</h2>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts?.map((product: any) => (
                <ProductCard
                  key={product.id}
                  {...product}
                  specialOffers={specialOffers}
                  onAddToCart={handleAddToCart}
                  loadingAddToCart={loadingAddToCart}
                />
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  )
}

export default Index
