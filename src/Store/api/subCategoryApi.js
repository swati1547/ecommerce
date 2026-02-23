import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const subCategoryApi = createApi({
  reducerPath: "subCategoryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080",
  }),
  endpoints: (builder) => ({
    getsubCategoryInfoBySlug: builder.query({
      query: (slug) => `/subcategories/slug/${slug}`,
    }),
  }),
});
export const { useGetsubCategoryInfoBySlugQuery } = subCategoryApi;
