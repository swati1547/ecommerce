import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const products = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/product/",
  }),
  endpoints: (build) => ({
    getProductsById: build.query({
      query: (id) => `${id}`,
    }),
    getProductsBySubCategorySlug: build.query({
      query: (subCategorySlug) => `categories/${subCategorySlug}/products`,
    }),
  }),
});
export const { useGetProductsBySubCategorySlugQuery, useGetProductsByIdQuery } =
  products;
