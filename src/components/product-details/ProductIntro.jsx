import React from "react";
import StarRateIcon from "@mui/icons-material/StarRate";

export default function ProductIntro({ product }) {
  return (
    <div>
      <h2 className="pdi__title">{product.brandName}</h2>
      <h2 className="pdi__name">{product.name}</h2>
      <div className="pdi__rating">
        <p>
          {product.ratingAverage}
          <StarRateIcon
            sx={{
              fontSize: 14,
            }}
            className="pdi__rating-icon"
          />
          <span style={{ margin: 3, color: "#535766" }}>|</span>
          <span className="pdi__rating-text">
            {product.reviewCount} Ratings
          </span>
        </p>
      </div>
      <hr className="hr" />
      {product?.discountPercentage ? (
        <div className="price">
          <span className="price__current">
            &#8377;{product?.discountedPrice}
          </span>
          &nbsp;&nbsp;
          <span className="price__before">
            MRP <del>&#8377;{product?.basePrice}</del>
          </span>
          &nbsp;&nbsp;
          <span className="price__discount">
            ({product?.discountPercentage}% OFF)
          </span>
        </div>
      ) : (
        <p className="price__current">Rs.{product?.basePrice}</p>
      )}
      <p className="pdi__tax">inclusive of all taxes</p>
    </div>
  );
}
