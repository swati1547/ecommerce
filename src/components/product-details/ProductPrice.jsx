import React from "react";

export default function ProductPrice({ product, finalPrice }) {
  const showDiscount = product?.discountPercentage;

  return (
    <div>
      {showDiscount ? (
        <div className="price">
          <span className="price__current">&#8377;{finalPrice}</span>
          <span className="price__before">
            MRP <del>&#8377;{product?.basePrice}</del>
          </span>
          &nbsp;&nbsp;
          <span className="price__discount">
            ({product?.discountPercentage}% OFF)
          </span>
        </div>
      ) : (
        <p className="price__current">Rs.{finalPrice}</p>
      )}

      <p className="price__tax">inclusive of all taxes</p>
    </div>
  );
}
