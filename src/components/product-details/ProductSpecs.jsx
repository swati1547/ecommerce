import React from "react";

export default function ProductSpecs({ product }) {
  return (
    <div className="details">
      {product?.productDetails?.map((detail, index) => {
        return (
          <p key={index} className="details__text">
            {detail}
          </p>
        );
      })}
      <p className="details__title">Size & Fit</p>
      <p className="details__text">
        The model (height {product.sizeAndFit.modelHeight}) is wearing a size
        {product.sizeAndFit.modelSize}
      </p>
      <p className="details__title">Material & Care</p>
      <p className="details__text">{product.materialAndCare.material}</p>
      <p className="details__text">{product.materialAndCare.care}</p>
      <p className="details__title">Specifications</p>
      <div className="specGrid">
        {Object.entries(product.specifications || {}).map(([key, value]) => (
          <div key={key} className="specItem">
            <p className="specKey">{key}</p>
            <p className="specValue">{value}</p>
            <hr className="hr" />
          </div>
        ))}
      </div>
      <a href="#" className="link">
        See More
      </a>
    </div>
  );
}
