import "./App.css";
// import { E1, E2, E3, E4, E6 } from "./1-element/Element";
import { Greeting } from "./1-element/practice-2";

function App() {
  return <>{Greeting({ name: "홍길동", age: 25 })}</>;
}

export default App;
