import React from "react";

import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function ActionButtons() {
  return (
    <div className="button">
      <button className="button__style button__bag">
        <ShoppingBagIcon
          sx={{
            fontSize: 20,
            verticalAlign: "middle",
            paddingBottom: "3px",
            marginRight: "10px",
          }}
        />
        Add to bag
      </button>
      <button className="button__style button__wishlist">
        <FavoriteBorderIcon
          sx={{
            fontSize: 20,
            verticalAlign: "middle",
            paddingBottom: "3px",
            marginRight: "10px",
          }}
        />
        Wishlist
      </button>
    </div>
  );
}
