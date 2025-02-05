import { useState } from "react";
import { Ex1, Ex2, Ex3, Ex4, Ex5 } from "./5-lifecycle,useEffect/Ex";

function App() {
  const [mount, setMount] = useState(true);

  return (
    <div>
      <Ex1 />
      <Ex2 />
      {mount && <Ex3 />}
      {mount && <Ex4 />}
      <Ex5 />
      <button onClick={() => setMount(!mount)}>마운트버튼</button>
    </div>
  );
}

export default App;
