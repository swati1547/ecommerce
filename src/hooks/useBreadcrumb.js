export function useBreadcrumb({ page, category, brand, product }) {
  const crumbs = [{ label: "Home", to: "/" }];

  if (page === "category" && category) {
    crumbs.push({
      label: category.name,
      to: `/category/${category.slug}`,
    });
  }

  if (page === "product" && category && brand && product) {
    crumbs.push({
      label: category.name,
      to: `/category/${category.slug}`,
    });

    crumbs.push({
      label: brand.name,
      to: `/brand/${brand.slug}`,
    });

    crumbs.push({
      label: product.name,
    });
  }

  return crumbs;
}
