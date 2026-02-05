import { useGetProductsBySubCategorySlugQuery } from "../Store/products";

export default function ProductCard({ subCategorySlug }) {
  const { data: products = [] } =
    useGetProductsBySubCategorySlugQuery(subCategorySlug);

  const handleClick = (productSlug, id) => {
    window.open(`/product/${productSlug}/${id}`, "_blank");
  };

  return (
    <>
      {products.map((product, idx) => (
        <div
          key={idx}
          onClick={() => handleClick(product.productSlug, product.id)}
        >
          {console.log({ product })}
          <img
            width={200}
            src={product?.image?.url}
            alt={product?.image?.altText}
          ></img>
          <p>{product?.brandName}</p>
          <p>{product?.name}</p>

          {product?.discountPercentage ? (
            <>
              <span>Rs.{product?.discountedPrice}</span>
              &nbsp;&nbsp;
              <del>Rs.{product?.basePrice}</del>
              &nbsp;&nbsp;
              <span>{product?.discountPercentage}% OFF</span>
            </>
          ) : (
            <>
              <p>Rs.{product?.basePrice}</p>
            </>
          )}
        </div>
      ))}
    </>
  );
}
