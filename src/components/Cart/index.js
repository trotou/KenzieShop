import { Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import Product from "../Product";
import { BoxCart, BoxCartInside, CardTotal } from "./styles";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  const cartLocal = JSON.parse(localStorage.getItem("cart"));

  return (
    <BoxCart>
      {cartLocal.map((product, index) => (
        <Product key={index} product={product} i={index} isRemovable />
      ))}
      <CardTotal>
        <Typography variant="h5">Resumo do pedido</Typography>

        <BoxCartInside>
          <p>{cart.length} produtos</p>

          <p>R$ {cart.reduce((acc, product) => acc + product.price, 0)}</p>
        </BoxCartInside>
      </CardTotal>
    </BoxCart>
  );
};

export default Cart;
