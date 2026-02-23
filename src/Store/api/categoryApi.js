import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080",
  }),
  endpoints: (builder) => ({
    getAllCategoriesbyDept: builder.query({
      // JSON DONE
      query: (departmentId) => `/categories?departmentId=${departmentId}`,
    }),
    getAllCategories: builder.query({
      // JSON DONE
      query: () => "/categories",
    }),
  }),
});
export const { useGetAllCategoriesbyDeptQuery, useGetAllCategoriesQuery } =
  categoryApi;
