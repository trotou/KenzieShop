import { Switch, Route } from "react-router-dom";
import Carrinho from "../pages/Carrinho";
import Home from "../pages/Home";
import { AnimatePresence } from "framer-motion";

const Routes = () => {
  return (
    <AnimatePresence>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/carrinho">
          <Carrinho />
        </Route>
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;
