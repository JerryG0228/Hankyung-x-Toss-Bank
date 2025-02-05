import { useState } from "react";
import { Ex1, Ex2, Ex3 } from "./5-lifecycle,useEffect/Ex";

function App() {
  const [mount, setMount] = useState(true);

  return (
    <div>
      <Ex1 />
      <Ex2 />
      {mount && <Ex3 />}
      <button onClick={() => setMount(!mount)}>마운트버튼</button>
    </div>
  );
}

export default App;
