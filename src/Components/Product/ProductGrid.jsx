import React from "react";
import ProductCard from "../../Pages/ProductCard";

export default function ProductGrid({ subCategorySlug }) {
  return (
    <div className="product-grid">
      <ProductCard subCategorySlug={subCategorySlug} />
    </div>
  );
}
