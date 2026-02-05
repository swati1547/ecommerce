import { createRoot } from "react-dom/client";
// import './index.css'
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Store/store.js";
import "./styles/main.scss";
import { ThemeProvider } from "@emotion/react";
import theme from "./styles/theme.js";
import MainLayout from "./Pages/MainLayout.jsx";
import App from "./App.jsx";
import { BreadcrumbProvider } from "./context/BreadcrumbContext.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <BreadcrumbProvider>
          <App />
        </BreadcrumbProvider>
      </BrowserRouter>
    </ThemeProvider>
  </Provider>,
);
