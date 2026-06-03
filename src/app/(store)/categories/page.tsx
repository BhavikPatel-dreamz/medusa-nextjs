import { Suspense } from "react";
import CategoryHero from "@/components/categories/CategoryHero";
import CategoryGrid from "@/components/categories/CategoryGrid";
import ProductCarouselWrapper from "@/components/categories/ProductCarouselWrapper";
import CategoriesLoading from "./loading";

export const metadata = {
  title: "Categories | Flatlogic",
  description: "Explore our curated collections and new arrivals.",
};

export default function CategoriesPage() {
  return (
    <Suspense fallback={<CategoriesLoading />}>
      <CategoriesPageContent />
    </Suspense>
  );
}

async function CategoriesPageContent() {
  return (
    <main className="w-full">
      <CategoryHero imageUrl="/images/category/categories-hero.png" title="NEW ARRIVALS" />
      <CategoryGrid />
      <ProductCarouselWrapper />
    </main>
  );
}