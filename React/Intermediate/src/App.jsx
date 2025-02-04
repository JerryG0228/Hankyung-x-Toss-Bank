import "./App.css";
// import { E1, E2, E3, E4, E6 } from "./1-element/Element";
import { info } from "./1-element/practice-3";

const products = [
  { id: 1, name: "노트북", price: 8000 },
  { id: 2, name: "스마트폰", price: 4000 },
  { id: 3, name: "태블릿", price: 6000 },
];

function App() {
  return <>{info(products)}</>;
}

export default App;
