import HomePage from "./Pages/HomePage";
import MainLayout from "./Pages/MainLayout";
import ProductInfo from "./Pages/ProductInfo";
import ProductListingPage from "./Pages/ProductListingPage";

const routes = [
  {
    element: <MainLayout />, // 👈 LAYOUT WRAPPER
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: ":categorySlug/:subCategorySlug",
        element: <ProductListingPage />,
      },
      {
        path: "product/:productSlug/:productId",
        element: <ProductInfo />,
      },
      {
        path: "*",
        element: <p>Not Found</p>,
      },
    ],
  },
];

export default routes;
