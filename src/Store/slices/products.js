import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const products = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/", // json-server port
  }),
  endpoints: (build) => ({
    getProductsById: build.query({
      query: (id) => `products/${id}`,
    }),

    // ⭐ IMPORTANT CHANGE
    getProductsBySubCategorySlug: build.query({
      query: (subCategorySlug) => `products?subCategorySlug=${subCategorySlug}`,
    }),
  }),
});

export const { useGetProductsBySubCategorySlugQuery, useGetProductsByIdQuery } =
  products;
