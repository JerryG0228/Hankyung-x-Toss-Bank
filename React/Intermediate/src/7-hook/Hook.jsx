export function Counter1() {
  let count = 0;

  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={() => count + 1}>증가</button>
    </>
  );
}
