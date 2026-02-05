import React, { useEffect } from "react";
import ProductGrid from "../Components/Product/ProductGrid";
import { useParams } from "react-router-dom";
import { useBreadcrumbContext } from "../context/BreadcrumbContext";
import { useGetsubCategoryInfoBySlugQuery } from "../Store/subCategoryApi";
import { useGetCategoryBySlugQuery } from "../Store/categoryapi";

export default function ProductListingPage() {
  const { categorySlug, subCategorySlug } = useParams();
  const { setItems } = useBreadcrumbContext();

  const { data: subCategory, isLoading: isSubLoading } =
    useGetsubCategoryInfoBySlugQuery(subCategorySlug);

  const { data: category, isLoading: isCategoryLoading } =
    useGetCategoryBySlugQuery(categorySlug);

  useEffect(() => {
    if (!category || !subCategory) return;
    setItems([
      { label: "Home", to: "/" },
      {
        label: category.name, // ✅ REAL category name
        to: `/${category.slug}`,
      },
      {
        label: subCategory.name, // ✅ REAL category name
        to: `/${category.slug}/${subCategory.slug}`,
      },
    ]);
  }, [category, subCategory, setItems]);

  if (isSubLoading || isCategoryLoading) return <p>Loading...</p>;
  // console.log(subCategorySlug, "listpage");
  return (
    <div>
      <ProductGrid subCategorySlug={subCategorySlug} />
    </div>
  );
}
