import React from "react";
import ProductPrice from "./ProductPrice";
import ActionButtons from "./ActionButtons";

export default function VarientSelector({
  product,
  selectedVariant,
  onSelect,
}) {
  const prices = product.variants.map((v) => v.price);

  const isSamePrice =
    prices.length > 0 && prices.every((price) => price === prices[0]);

  const calculateDiscountedPrice = (price) => {
    if (!product.discountPercentage) return price;
    const discounted = price - (price * product.discountPercentage) / 100;
    return Math.round(discounted);
  };

  // FINAL PRICE LOGIC
  const finalPrice = selectedVariant
    ? calculateDiscountedPrice(selectedVariant.price)
    : product.basePrice;

  return (
    <div className="variant">
      <ProductPrice product={product} finalPrice={finalPrice} />
      <p className="variant__heading">Select Size</p>
      <div className="variant__list">
        {product?.variants?.map((variant) => {
          const finalPrice = calculateDiscountedPrice(variant.price);

          return (
            <div
              key={variant.variantId}
              onClick={() => variant.isAvailable && onSelect(variant)}
              className={`
            variant__circle  
            ${selectedVariant?.variantId === variant.variantId ? "variant__selected" : "variant__unselected"}
            ${!variant.isAvailable ? "variant__disabled" : "variant__available"}
            ${!isSamePrice ? "variant__diff-price" : ""}
          `}
            >
              <div className="variant__size">{variant.attributes.size}</div>

              {!isSamePrice && (
                <div className="variant__price">₹{finalPrice}</div>
              )}
            </div>
          );
        })}
      </div>
      <ActionButtons />
    </div>
  );
}
