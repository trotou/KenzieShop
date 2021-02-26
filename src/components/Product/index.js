import { useDispatch } from "react-redux";
import {
  CardProduct,
  ButtonProduct,
  CardImage,
  BoxCardOut,
  BoxCardInn,
} from "./styles";
import { CardContent } from "@material-ui/core";
import {
  addToCartThunk,
  removeFromCartThunk,
} from "../../store/modules/cart/thunks";

const Product = ({ product, i, shop, isRemovable = false }) => {
  const dispatch = useDispatch();

  return (
    <>
      {isRemovable ? (
        <>
          <BoxCardOut>
            <BoxCardInn>
              <img alt="imagem" src={product.image} height="80%" width="20%" />
              <ButtonProduct
                onClick={() => dispatch(removeFromCartThunk(product.id))}
              >
                Remover item do carrinho
              </ButtonProduct>
            </BoxCardInn>

            <p>{product.name}</p>

            <p>R$ {product.price}</p>
          </BoxCardOut>
        </>
      ) : (
        <CardProduct>
          <CardImage
            alt="sei lá"
            style={{ height: "40%" }}
            image={shop.image}
            title="galaxy"
          />
          <CardContent>
            <h3>{shop.name}</h3>
            <h2>R$ {shop.price}</h2>
          </CardContent>

          <ButtonProduct onClick={() => dispatch(addToCartThunk(shop, i))}>
            Adicionar item ao carrinho
          </ButtonProduct>
        </CardProduct>
      )}
    </>
  );
};

export default Product;
