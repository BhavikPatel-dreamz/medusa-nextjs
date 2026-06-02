import ProductDetails from "@/components/product/ProductDetails";
import ProductReviews from "@/components/product/ProductReviews";
import RelatedProducts from "@/components/product/RelatedProducts";

import { AdapterFactory } from "@/middleware/factory/adapter.factory";
import { notFound } from "next/navigation";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const adapter = AdapterFactory.getAdapter();

  console.log("Clicked ID:", id);

  // TEMP FIX
  // Instead of adapter.getProduct(id)
  // fetch all products and find the matching one
  const { products } = await adapter.listProducts({
    limit: 100,
  });

  const product = products.find(
    (p) => p.id === id
  );

  console.log("Product:", product);

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  const reviews = [
    {
      id: 1,
      name: "John Smith",
      date: "2026-02-10",
      avatar: "/review1.jpg",
      comment: "Amazing product",
    },
    {
      id: 2,
      name: "Sarah Parker",
      date: "2026-03-05",
      avatar: "/review2.jpg",
      comment: "Very good quality and fast delivery.",
    },
  ];

  return (
    <>
      <ProductDetails
        product={product}
        price={
          product.price?.amount ??
          product.variants?.[0]?.price ??
          0
        }
      />

      <ProductReviews reviews={reviews} />

      <RelatedProducts
        products={relatedProducts}
      />
    </>
  );
}