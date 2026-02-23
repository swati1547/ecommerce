import React from "react";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";

export default function ProductData({ product }) {
  return (
    <div className="details">
      <div className="details__head">
        <p>Product Details</p>
        <ArticleOutlinedIcon sx={{ fontSize: "18px", marginLeft: "10px" }} />
      </div>
      {product.ProductDetailsPage.map((detail, index) => {
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
      {/* <p>Currency: {product.currency}</p>
      <p>Discount: {product.discountPercentage}%</p>
      <p>Status: {product.isActive ? "Active" : "Inactive"}</p>
      <p>Featured: {product.isFeatured ? "Yes" : "No"}</p>
      <p>Views: {product.viewCount}</p>
      <h3>Tags</h3>
      <ul>
        {product.tags?.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
      <h3>Images</h3>

      <h3>Variants</h3>
      {product.variants?.map((variant, index) => (
        <React.Fragment key={index}>
          <p>{variant.size}</p>
          <p>{variant.color}</p>
          <p>{variant.qty}</p>
        </React.Fragment>
      ))} */}
    </div>
  );
}
