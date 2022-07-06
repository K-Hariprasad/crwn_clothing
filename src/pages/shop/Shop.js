import React, { useContext } from "react";
import { ProductsContext } from "../../context/productsContext";
import ProductsGrid from "../../components/products-grid/ProductsGrid";

function Shop() {
  const productsData = useContext(ProductsContext)
  return <ProductsGrid productsData={productsData} type="preview"/>;
}

export default Shop;
