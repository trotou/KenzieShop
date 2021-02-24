// const count = {
//   counter: 0,
// };

// export const counterReducer = (state = count, action) => {
//   switch (action.type) {
//     case "@cart/ADD":
//       const { cart } = action;
//       return "";
//     default:
//       return state;
//   }
// };
// const checkTrue = () => {
//   if (localStorage.getItem("cart")) {
//     return localStorage.getItem("cart");
//   } else {
//     return [];
//   }
// };

export const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "@cart/ADD":
      const { product } = action;
      if (localStorage.getItem("cart")) {
        return JSON.parse(localStorage.getItem("cart"));
      }
      return [...state, product];

    case "@cart/REMOVE":
      const { list } = action;
      // const newList = state.filter((product) => product.id !== id);
      return list;

    default:
      return state;
  }
};

// export default cartReducer;
