import Cart from "../../components/Cart";
import { motion } from "framer-motion";

const Carrinho = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Cart />
    </motion.div>
  );
};

export default Carrinho;
