import { useEffect } from "react";
import { useParams } from "react-router-dom";

import ProductGrid from "../components/product-details/ProductGrid";
import { useGetAllCategoriesQuery } from "../store/api/categoryApi";
import { useGetProductsBySubCategorySlugQuery } from "../store/slices/products";
import { useBreadcrumbContext } from "../context/BreadcrumbContext";

export default function ProductListingPage() {
  const { categorySlug, subCategorySlug } = useParams();
  const { setItems } = useBreadcrumbContext();

  // fetch categories (json-server)
  const { data: categories = [] } = useGetAllCategoriesQuery();

  useEffect(() => {
    if (!categories.length) return;

    // find category
    const category = categories.find(
      (cat) => cat.categorySlug === categorySlug,
    );

    // find subcategory
    const subCategory = category?.subCategories?.find(
      (sub) => sub.slug === subCategorySlug,
    );

    if (!category || !subCategory) return;

    setItems([
      { label: "Home", to: "/" },
      {
        label: category.categoryName,
        to: `/${category.categorySlug}`,
      },
      {
        label: subCategory.name,
        to: `/${category.categorySlug}/${subCategory.slug}`,
      },
    ]);
  }, [categories, categorySlug, subCategorySlug, setItems]);

  return <ProductGrid subCategorySlug={subCategorySlug} />;
}
