import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import { Product } from "@/middleware/types/commerce.types"

interface MinPricedProduct extends Product {
  _minPrice?: number
}

/**
 * Helper function to sort products by price until the store API supports sorting by price
 * @param products
 * @param sortBy
 * @returns products sorted by price
 */
export function sortProducts(
  products: Product[],
  sortBy: SortOptions
): Product[] {
  let sortedProducts = products as MinPricedProduct[]

  if (["price_asc", "price_desc"].includes(sortBy)) {
    // Precompute the minimum price for each product
    sortedProducts.forEach((product) => {
      if (product.variants && product.variants.length > 0) {
        product._minPrice = Math.min(
          ...product.variants.map(
            (variant) => variant?.price || 0
          )
        )
      } else {
        product._minPrice = Infinity
      }
    })

    // Sort products based on the precomputed minimum prices
    sortedProducts.sort((a, b) => {
      const diff = a._minPrice! - b._minPrice!
      return sortBy === "price_asc" ? diff : -diff
    })
  }

  // Note: created_at might not exist on the canonical Product type yet, 
  // we could add it to the interface if needed or handle it specifically.
  // For now, if it's missing, we keep the order.

  return sortedProducts
}
