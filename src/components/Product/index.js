// import { useState } from "react";
// import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// import { addToCart, removeFromCart } from "../../store/modules/cart/actions";
import { CardProduct, ButtonProduct, CardImage } from "./styles";
import { CardContent } from "@material-ui/core";
import {
  addToCartThunk,
  removeFromCartThunk,
} from "../../store/modules/cart/thunks";

const Product = ({ product, isRemovable = false }) => {
  const dispatch = useDispatch();
  // const estado = useSelector((state) => state);
  // console.log("state", estado);

  return (
    <>
      {isRemovable ? (
        <>
          <div
            style={{
              width: "60%",
              backgroundColor: "white",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "70%",
                height: "90%",
              }}
            >
              <img
                alt="imagem"
                src={`./images/product${product.id}.jpg`}
                height="80%"
                width="20%"
              />
              <ButtonProduct
                onClick={() => dispatch(removeFromCartThunk(product.id))}
              >
                Remover item do carrinho
              </ButtonProduct>
            </div>
            <p>{product.name}</p>
          </div>
          <hr></hr>
        </>
      ) : (
        <CardProduct>
          <CardImage
            alt="sei lá"
            style={{ height: "40%" }}
            image={`./images/product${product.id}.jpg`}
            title="galaxy"
          />
          <CardContent>
            <h3>{product.name}</h3>
            <h2>R$ {product.price}</h2>
          </CardContent>{" "}
          <ButtonProduct onClick={() => dispatch(addToCartThunk(product))}>
            Adicionar item ao carrinho
          </ButtonProduct>
        </CardProduct>
      )}
    </>
  );
};

export default Product;
