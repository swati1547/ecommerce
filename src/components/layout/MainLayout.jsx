import React from "react";
import Navbar from "../../components/layout/Navbar";
import BreadCrumb from "../../components/common/BreadCrumb";
import { Outlet } from "react-router-dom";
import { useBreadcrumbContext } from "../../context/BreadcrumbContext";
// import Crash from "../common/Crash";

export default function MainLayout() {
  const { items } = useBreadcrumbContext();

  return (
    <div className="app-layout">
      {/* <Crash /> */}
      <Navbar />

      {/* all content & common breadcrumb */}
      <main className="main-content">
        <BreadCrumb items={items} />
        <Outlet />
      </main>
    </div>
  );
}
