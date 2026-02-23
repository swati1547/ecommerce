import React from "react";

export default function VarientSelector({
  variants,
  discount,
  selectedVariant,
  onSelect,
}) {
  const prices = variants.map((v) => v.price);

  const isSamePrice =
    prices.length > 0 && prices.every((price) => price === prices[0]);

  const calculateDiscountedPrice = (price) => {
    if (!discount) return price;

    const discounted = price - (price * discount) / 100;
    return Math.round(discounted);
  };
  return (
    <div className="variant">
      {variants.map((variant) => {
        const finalPrice = calculateDiscountedPrice(variant.price, discount);

        return (
          <div
            key={variant.variantId}
            onClick={() => variant.isAvailable && onSelect(variant)}
            className={`
                variant__circle  
                ${selectedVariant?.variantId === variant.variantId ? "variant__selected" : "variant__unselected"}
                ${!variant.isAvailable ? "variant__disabled" : "variant__available"}
                ${!isSamePrice ? "variant__diff-price" : ""}`}
          >
            <div style={{ fontWeight: 700, fontSize: "14px" }}>
              {variant.attributes.size}
            </div>

            {!isSamePrice && (
              <div style={{ fontSize: "12px", marginTop: "4px" }}>
                ₹{finalPrice}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
