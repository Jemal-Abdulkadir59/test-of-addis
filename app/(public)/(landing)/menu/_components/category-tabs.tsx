"use client"

import { useState } from "react"
import { useGetMenuCategoriesQuery } from "@/generated/graphql"
import { Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

// const categories = [
//   "Offers",
//   "Burgers",
//   "Fries",
//   "Snacks",
//   "Salads",
//   "Cold drinks",
//   "Happy Meal®",
//   "Desserts",
//   "Hot drinks",
//   "Sauces",
//   "Orbit®",
// ]

interface SelectedCategotyProps {
  setSelectedCategory: (value: string | null) => void
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  searchTerm: string
}

const CategoryTabs = ({
  setSelectedCategory,
  handleChange,
  searchTerm,
}: SelectedCategotyProps) => {
  const [activeCategory, setActiveCategory] = useState("All")

  // Query categories
  const { data: categoriesData, loading: loadingCategories } =
    useGetMenuCategoriesQuery()

  const categories = [
    { id: "all", name: "All" },
    ...(categoriesData?.menu_categories ?? []),
  ]

  const handleCategoryClick = (category_id: string, category_name: string) => {
    setActiveCategory(category_name)
    setSelectedCategory(category_id === "all" ? null : category_id)
  }

  return (
    <section className="bg-card border-b sticky top-0 z-10">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">
            All Categories from Test Of Addis
          </h2>
          <div className="relative w-64 hidden md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search from menu..."
              className="pl-10"
              value={searchTerm}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {categories?.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.name ? "default" : "outline"}
              size="sm"
              onClick={() => handleCategoryClick(category.id, category.name)}
              className="whitespace-nowrap"
            >
              {category.name}
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategoryTabs
