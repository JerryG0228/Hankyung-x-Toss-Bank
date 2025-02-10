import {
  DynamicList,
  DynamicPost,
  FetchList,
  ProductList,
  TaskList,
} from "./10-list/Ex";

function App() {
  return (
    <div>
      <TaskList />
      <ProductList />
      <DynamicList />
      <FetchList />
      <DynamicPost />
    </div>
  );
}

export default App;
