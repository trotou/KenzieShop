import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../store/modules/cart/actions";
import { CardProduct, ButtonProduct, CardImage } from "./styles";
import { CardContent } from "@material-ui/core";

const Product = ({ product, isRemovable = false }) => {
  const dispatch = useDispatch();

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
                onClick={() => dispatch(removeFromCart(product.id))}
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
          <ButtonProduct onClick={() => dispatch(addToCart(product))}>
            Adicionar item ao carrinho
          </ButtonProduct>
        </CardProduct>
      )}
    </>
  );
};

export default Product;
