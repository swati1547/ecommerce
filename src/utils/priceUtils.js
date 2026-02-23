export const calculateDiscountedPrice = (basePrice, discountPercentage) => {
  if (!basePrice || !discountPercentage) return basePrice;

  return Math.round(basePrice - (basePrice * discountPercentage) / 100);
};
