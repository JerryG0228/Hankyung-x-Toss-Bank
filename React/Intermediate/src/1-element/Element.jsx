import React from "react";

const E1 = <h1 className="greeting">리액트 엘리먼트1</h1>;
const E2 = React.createElement(
  "h1",
  { className: "greeting" },
  "리액트 엘리먼트2"
);
const E3 = <h1 style={{ color: "blue" }}>리액트 엘리먼트3</h1>;

const fruits = ["사과", "바나나", "포도"];
const E4 = (
  <ul>
    {fruits.map((v) => (
      <li key={v}>{v}</li>
    ))}
  </ul>
);

export { E1, E2, E3, E4 };
