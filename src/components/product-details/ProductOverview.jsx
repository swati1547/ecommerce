import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useGetProductsByIdQuery } from "../../store/slices/products";
import { useBreadcrumbContext } from "../../context/BreadcrumbContext";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import ProductDetailsPage from "../../pages/ProductDetailsPage";

export default function ProductOverview() {
  const { productId } = useParams();

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
      { label: product.categoryName, to: `/${product.categorySlug}` },
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
    <Box className="product-overview">
      <Box className="product-overview__gallery">
        {product.images?.map((img) => (
          <Box
            key={img.url}
            component="img"
            src={img.url}
            alt={img.altText}
            className="product-overview__image"
          />
        ))}
      </Box>

      <Box className="product-overview__details">
        <ProductDetailsPage product={product} />
      </Box>
    </Box>
  );
}
