import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080",
  }),
  endpoints: (builder) => ({
    getAllCategoriesbyDept: builder.query({
      query: (departmentId) =>
        `/categories/department/${departmentId}/with-subcategories`,
    }),
    getCategoryBySlug: builder.query({
      query: (slug) => `/categories/slug/${slug}`,
    }),
  }),
});
export const { useGetAllCategoriesbyDeptQuery, useGetCategoryBySlugQuery } =
  categoryApi;
