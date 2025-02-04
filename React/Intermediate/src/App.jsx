import "./App.css";
import { Hello, Sum, DrinkMachine, Greeting } from "./2-jsx/ex";

function App() {
  return (
    <>
      <Hello name="홍길동" />
      <Sum n1="3" n2="5" />
      <DrinkMachine price="1000원" />
      <Greeting hour="8" />
    </>
  );
}

export default App;
