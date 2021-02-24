const defaultState = [
  { id: 1, name: "Geladeira", price: 200, unique: "" },
  { id: 2, name: "Fogão", price: 640, unique: "" },
  { id: 3, name: "Máquina de lavar", price: 420, unique: "" },
  { id: 4, name: "luminária", price: 45, unique: "" },
  { id: 5, name: "Televisor", price: 500, unique: "" },
  { id: 6, name: "Celular", price: 340, unique: "" },
  { id: 7, name: "Notebook", price: 730, unique: "" },
  { id: 8, name: "Cafeteira", price: 80, unique: "" },
  { id: 9, name: "Cama", price: 280, unique: "" },
];

const productsReducer = (state = defaultState) => {
  return state;
};

export default productsReducer;
