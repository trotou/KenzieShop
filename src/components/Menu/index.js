import { AppBar, Toolbar, MenuItem } from "@material-ui/core/";

import { useHistory } from "react-router-dom";

const Menu = ({ isAuth, setIsAuth }) => {
  const history = useHistory();

  const sendTo = (path) => {
    history.push(path);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <MenuItem onClick={() => sendTo("/")}>Home</MenuItem>
        <MenuItem onClick={() => sendTo("/carrinho")}>Carrinho</MenuItem>
        <MenuItem>Entrar</MenuItem>
      </Toolbar>
    </AppBar>
  );
};

export default Menu;
