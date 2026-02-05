import { configureStore } from "@reduxjs/toolkit";
import wishList from "./Wishlist";
import { products } from "./products";
import { categoryApi } from "./categoryapi";
import { subCategoryApi } from "./subCategoryApi";

const store = configureStore({
  reducer: {
    store: wishList,
    [products.reducerPath]: products.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [subCategoryApi.reducerPath]: subCategoryApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(products.middleware)
      .concat(categoryApi.middleware)
      .concat(subCategoryApi.middleware),
});
export default store;
