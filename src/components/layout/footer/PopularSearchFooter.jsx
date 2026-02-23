import React from "react";
import popularSearches from "../data/popularSearches";

export default function PopularSearchFooter() {
  return (
    <div>
      <h6>POPULAR SEARCHES</h6>
      {popularSearches.map((item, idx) => (
        <React.Fragment key={idx}>
          {item}
          {idx !== popularSearches.length - 1 && " | "}
        </React.Fragment>
      ))}
      <div>
        <p>In case of any concern, Contact Us</p>
        <p>© 2026 www.myntra.com. All rights reserved.</p>
        <p>A Flipkart company</p>
      </div>
    </div>
  );
}
