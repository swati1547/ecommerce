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
        // ✅ get primary image
        const primaryImage = product?.images?.find(
          (img) => img.isPrimary === true,
        );

        // ✅ calculate discount
        const discountedPrice = calculateDiscountedPrice(
          product?.basePrice,
          product?.discountPercentage,
        );

        return (
          <div
            key={product.id}
            onClick={() => handleClick(product.productSlug, product.id)}
            style={{ cursor: "pointer" }}
          >
            <img
              width={200}
              src={primaryImage?.url}
              alt={primaryImage?.altText}
            />

            <p>{product?.brandName}</p>
            <p>{product?.name}</p>

            {product?.discountPercentage ? (
              <>
                <span>Rs.{discountedPrice}</span>
                &nbsp;&nbsp;
                <del>Rs.{product?.basePrice}</del>
                &nbsp;&nbsp;
                <span>{product?.discountPercentage}% OFF</span>
              </>
            ) : (
              <p>Rs.{product?.basePrice}</p>
            )}
          </div>
        );
      })}
    </>
  );
}
