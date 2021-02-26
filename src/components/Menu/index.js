import { useSelector } from "react-redux";
import {
  AppBar,
  Toolbar,
  MenuItem,
  IconButton,
  Badge,
  Typography,
} from "@material-ui/core/";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import { useHistory } from "react-router-dom";
import { BoxDiv } from "./styles";

const Menu = () => {
  const history = useHistory();

  const cart = useSelector((state) => state.cart);

  const sendTo = (path) => {
    history.push(path);
  };
  const reload = () => window.location.reload();

  const checkCartItens = () => {
    if (localStorage.getItem("cart")) {
      sendTo("/carrinho");
    } else {
      sendTo("/");
    }
  };

  const handleCloseApplication = () => {
    localStorage.clear();
    sendTo("/");
    setTimeout(() => {
      reload();
    }, 300);
  };

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography>Kenzie Shop</Typography>

        <BoxDiv>
          <IconButton onClick={() => sendTo("/")}>
            <HomeOutlinedIcon />
          </IconButton>

          <IconButton onClick={checkCartItens}>
            <Badge badgeContent={cart.length} color="secondary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </IconButton>

          <MenuItem onClick={handleCloseApplication}>
            Esvaziar Carrinho
          </MenuItem>
        </BoxDiv>
      </Toolbar>
    </AppBar>
  );
};

export default Menu;
