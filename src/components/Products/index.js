import { useSelector } from "react-redux";

import Product from "../Product";

const Products = () => {
  const products = useSelector((state) => state.products);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        backgroundColor: "white",
      }}
    >
      {products.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </div>
  );
};

export default Products;
