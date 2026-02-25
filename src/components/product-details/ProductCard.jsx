import { useCallback } from "react";
import { useGetProductsBySubCategorySlugQuery } from "../../store/slices/products";
import { calculateDiscountedPrice } from "../../utils/priceUtils";

export default function ProductCard({ subCategorySlug }) {
  const { data: products = [] } =
    useGetProductsBySubCategorySlugQuery(subCategorySlug);

  const handleClick = useCallback((slug, id) => {
    window.open(`/product/${slug}/${id}`, "_blank");
  }, []);

  return (
    <>
      {products.map((product) => {
        const primaryImage = product?.images?.find(
          (img) => img.isPrimary === true,
        );

        const discountedPrice = calculateDiscountedPrice(
          product?.basePrice,
          product?.discountPercentage,
        );

        return (
          <div
            key={product.id}
            className="product-card"
            onClick={() => handleClick(product.productSlug, product.id)}
          >
            <img
              className="product-card__image"
              src={primaryImage?.url}
              alt={primaryImage?.altText}
            />

            <p className="product-card__brand">{product?.brandName}</p>
            <p className="product-card__name">{product?.name}</p>

            {product?.discountPercentage ? (
              <div>
                <span className="product-card__price">
                  Rs.{discountedPrice}
                </span>
                <del className="product-card__mrp">Rs.{product?.basePrice}</del>
                <span className="product-card__discount">
                  {product?.discountPercentage}% OFF
                </span>
              </div>
            ) : (
              <p className="product-card__price">Rs.{product?.basePrice}</p>
            )}
          </div>
        );
      })}
    </>
  );
}
