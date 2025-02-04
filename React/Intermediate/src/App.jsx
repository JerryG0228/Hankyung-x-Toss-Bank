import "./App.css";
import {
  Greeting,
  UserCard,
  ItemList,
  ClickButton,
  InfoCard,
} from "./4-props/Ex";

function App() {
  return (
    <>
      <Greeting name={["A", "B", "C"]} />
      <UserCard
        p={[
          { name: "A", age: "20", job: "student" },
          { name: "B", age: "20", job: "student" },
        ]}
      />
      <ItemList
        items={[
          ["A", "B"],
          ["C", "D"],
        ]}
      />
      <ClickButton />
      <InfoCard title="첫번째">
        <div>a</div>
        <div>b</div>
      </InfoCard>
      <InfoCard title="두번째">
        <div>c</div>
        <div>d</div>
      </InfoCard>
    </>
  );
}

export default App;
