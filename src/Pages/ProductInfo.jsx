import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetProductsByIdQuery } from "../Store/products";
import { useBreadcrumbContext } from "../context/BreadcrumbContext";

export default function ProductInfo() {
  const { productSlug, productId } = useParams();

  const {
    data: product,
    isLoading,
    isError,
  } = useGetProductsByIdQuery(productId);

  // BREADCRUMB
  const { setItems } = useBreadcrumbContext();

  useEffect(() => {
    if (!product) return;

    setItems([
      { label: "Home", to: "/" },
      {
        label: product.categoryName,
        to: `/${product.categorySlug}`,
      },
      {
        label: product.subCategoryName,
        to: `/${product.categorySlug}/${product.subCategorySlug}`,
      },
      {
        label: product.brandName,
        to: `/brand/${product.brandSlug}`,
      },
      { label: product.name },
    ]);
  }, [product, setItems]);

  // /BREADCRUMB

  if (isLoading) return <p>Loading product...</p>;
  if (isError) return <p>Failed to load product</p>;
  if (!product) return null;

  return (
    <>
      {console.log(product, "infopage in jsx")}
      <p>{product.brandName}</p>
      <p>{product.name}</p>
      <p>{product.basePrice}</p>
      <p>{product.discountPercentage}</p>
      <span>inclusive of all taxes</span>
      <p>{product.ratingAverage}</p>
      <p>{product.reviewCount}</p>
      <p>{product.viewCount}</p>
      <p></p>
    </>
  );
}
