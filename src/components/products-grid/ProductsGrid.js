import React from "react";
import ProductCard from "../product-card/ProductCard";
import { useNavigate } from "react-router-dom";
import "./ProductsGrid.scss";
function ProductsGrid({ productsData, type }) {
  const navigate = useNavigate();
  return (
    <div className="productGrid-container">
      {productsData.map((productCategory) => (
        <div
          className="productGrid-category-container"
          key={productCategory.title}
        >
          <h2
            className="productGrid-category-title"
            onClick={() =>
              type === "preview" &&
              navigate(`${productCategory.title.toLowerCase()}`)
            }
          >
            {productCategory.title}
          </h2>
          <div className="productGrid-category-body">
            {type === "preview"
              ? productCategory.items.map(
                  (product, idx) =>
                    idx < 4 && (
                      <ProductCard key={product.id} product={product} />
                    )
                )
              : productCategory.items.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductsGrid;
