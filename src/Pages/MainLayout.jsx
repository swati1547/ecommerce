import React from "react";
import Navbar from "../Components/Navbar";
import BreadCrumb from "../Components/Product/BreadCrumb";
import { Outlet } from "react-router-dom";
import { useBreadcrumbContext } from "../context/BreadcrumbContext";

export default function MainLayout() {
  const { items } = useBreadcrumbContext();

  return (
    <div>
      <Navbar />
      <BreadCrumb items={items} />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
}
