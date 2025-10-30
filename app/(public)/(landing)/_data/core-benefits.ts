import type { CoreBenefitType } from "../types"

export const coreBenefitsData: CoreBenefitType[] = [
  {
    title: "Fresh Ingredients, Made Daily",
    description:
      "We believe great meals start with fresh, locally sourced ingredients—prepared with care every single day.",
    points: [
      "Locally sourced vegetables, meats, and spices",
      "No preservatives or artificial flavors",
      "Prepared fresh in our kitchen daily",
    ],
    images: ["/img/gallery/meal.jpg"],
  },
  {
    title: "Fast & Reliable Delivery",
    description:
      "Your favorite dishes, delivered hot and on time. We partner with trusted couriers to make sure every order arrives perfectly.",
    points: [
      "Average delivery time under 30 minutes",
      "Real-time order tracking available",
      "Eco-friendly packaging that keeps food warm",
    ],
    images: ["/img/gallery/delivery.jpg"],
  },
  {
    title: "Delicious Variety for Every Taste",
    description:
      "From classic comfort food to bold new flavors, our menu offers something special for everyone in the family.",
    points: [
      "Wide selection of cuisines and meal types",
      "Vegan, vegetarian, and gluten-free options",
      "Chef’s specials updated weekly",
    ],
    images: ["/img/gallery/meal-2.jpg"],
  },
]
