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

const Menu = ({ isAuth, setIsAuth }) => {
  const history = useHistory();

  const cart = useSelector((state) => state.cart);

  const sendTo = (path) => {
    history.push(path);
  };

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography>Kenzie Shop</Typography>
        <div
          style={{
            display: "flex",
            width: "90%",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <IconButton onClick={() => sendTo("/")}>
            <HomeOutlinedIcon />
          </IconButton>
          <IconButton onClick={() => sendTo("/carrinho")}>
            <Badge badgeContent={cart.length} color="secondary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </IconButton>
          <MenuItem>Entrar</MenuItem>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Menu;
