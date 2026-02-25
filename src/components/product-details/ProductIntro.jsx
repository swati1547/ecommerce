import React from "react";
import StarRateIcon from "@mui/icons-material/StarRate";
import StarIcon from "@mui/icons-material/Star";

export default function ProductIntro({ product }) {
  return (
    <div className="pdi">
      <h2 className="pdi__title">{product.brandName}</h2>
      <h2 className="pdi__name">{product.name}</h2>

      <div className="pdi__rating">
        <p>
          <span className="pdi__rating-value">{product.ratingAverage}</span>

          <StarIcon
            sx={{
              fontSize: 18,
            }}
            className="pdi__rating-icon"
          />

          <span className="pdi__divider">|</span>

          <span className="pdi__rating-text">
            {product.reviewCount} Ratings
          </span>
        </p>
      </div>
    </div>
  );
}
