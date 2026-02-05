import React from "react";
import MyntraShoppingText from "./MyntraShoppingText";
import PopularSearchFooter from "../PopularSearchFooter";
import FooterLinks from "./FooterLinks";

export default function Footer() {
  return (
    <div style={{ backgroundColor: "gray", marginTop: "500px" }}>
      <FooterLinks />
      <PopularSearchFooter />
      <MyntraShoppingText />
    </div>
  );
}
