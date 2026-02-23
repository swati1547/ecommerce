import React, { useState } from "react";
import OfferPlans from "../components/product-details/OfferPlans";
import DeliveryOptions from "../components/product-details/DeliveryOptions";
import ProductData from "../components/product-details/ProductCard";
import ActionButtons from "../components/product-details/ActionButtons";
import ProductIntro from "../components/product-details/ProductIntro";
import VarientSelector from "../components/product-details/VariantSelector";

export default function ProductDetailsPage({ product }) {
  const [selectedVariant, setSelectedVariant] = useState(null);

  return (
    <div className="pdp">
      <ProductIntro product={product} />
      <p className="pdp__heading">Select Size</p>
      <VarientSelector
        variants={product.variants}
        discount={product.discountPercentage}
        selectedVariant={selectedVariant}
        onSelect={setSelectedVariant}
      />
      <ActionButtons />
      <hr className="hr" />
      <DeliveryOptions />
      <OfferPlans />
      <ProductData product={product} />
    </div>
  );
}
