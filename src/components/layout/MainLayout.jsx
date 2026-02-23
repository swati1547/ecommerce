import React from "react";
import Navbar from "../../components/layout/Navbar";
import BreadCrumb from "../../components/common/BreadCrumb";
import { Outlet } from "react-router-dom";
import { useBreadcrumbContext } from "../../context/BreadcrumbContext";
import Crash from "../common/Crash";

export default function MainLayout() {
  const { items } = useBreadcrumbContext();

  return (
    <div>
      {/* <Crash /> */}
      <Navbar />

      {/* all content & common breadcrumb */}
      <main className="main-content" style={{ paddingTop: "80px" }}>
        <BreadCrumb items={items} />
        <Outlet />
      </main>
    </div>
  );
}
