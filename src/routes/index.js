import { Switch, Route } from "react-router-dom";
import Carrinho from "../pages/Carrinho";
import Home from "../pages/Home";

const Routes = ({ setIsAuth }) => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      {/* <Route path="/home">
        <Home setIsAuth={setIsAuth} />
      </Route> */}
      <Route path="/carrinho">
        <Carrinho />
      </Route>
    </Switch>
  );
};

export default Routes;
