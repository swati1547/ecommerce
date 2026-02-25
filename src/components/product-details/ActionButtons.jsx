import React from "react";

import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function ActionButtons() {
  return (
    <div className="button">
      <button type="button" className="button__style button__bag">
        <ShoppingBagIcon className="button__icon" />
        Add to bag
      </button>

      <button type="button" className="button__style button__wishlist">
        <FavoriteBorderIcon className="button__icon" />
        Wishlist
      </button>
    </div>
  );
}
