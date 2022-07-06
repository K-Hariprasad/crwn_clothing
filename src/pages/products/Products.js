import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../context/productsContext";
import ProductsGrid from "../../components/products-grid/ProductsGrid";

function Products() {
  const { category } = useParams();
  const productsData = useContext(ProductsContext);
  const [productsList, setProductsList] = useState([]);
  useEffect(() => {
    let filteredProducts = productsData.filter(
      (item) => {
        return item.title.toLowerCase() === category.toLowerCase()}
    );
    setProductsList(filteredProducts);
  },[productsData, category]);
  return (
    <ProductsGrid productsData={productsList} />
  );
}

export default Products;
