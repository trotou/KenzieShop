const defaultState = [
  { id: "", name: "Geladeira", price: 200, image: "./images/product1.jpg" },
  { id: "", name: "Fogão", price: 640, image: "./images/product2.jpg" },
  {
    id: "",
    name: "Máquina de lavar",
    price: 420,
    image: "./images/product3.jpg",
  },
  { id: "", name: "luminária", price: 45, image: "./images/product4.jpg" },
  { id: "", name: "Televisor", price: 500, image: "./images/product5.jpg" },
  { id: "", name: "Celular", price: 340, image: "./images/product6.jpg" },
  { id: "", name: "Notebook", price: 730, image: "./images/product7.jpg" },
  { id: "", name: "Cafeteira", price: 80, image: "./images/product8.jpg" },
  { id: "", name: "Cama", price: 280, image: "./images/product9.jpg" },
];

const productsReducer = (state = defaultState) => {
  return state;
};

export default productsReducer;
