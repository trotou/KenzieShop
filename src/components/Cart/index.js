import { Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import Product from "../Product";
import { CardTotal } from "./styles";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  console.log("carrinho", cart);
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
      }}
    >
      {cart.map((product, index) => (
        <Product key={index} product={product} isRemovable />
      ))}
      <CardTotal>
        <Typography variant="h5">Resumo do pedido</Typography>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: "7% 10%",
          }}
        >
          <p>{cart.length} produtos</p>
          <p>R$ {cart.reduce((acc, product) => acc + product.price, 0)}</p>
        </div>
      </CardTotal>
    </div>
  );
};

export default Cart;
