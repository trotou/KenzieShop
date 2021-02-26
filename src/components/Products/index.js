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
        backgroundColor: "#f8f9fa",
        marginTop: "3%",
      }}
    >
      {products.map((product, index) => (
        <Product key={index} shop={product} />
      ))}
    </div>
  );
};

export default Products;
