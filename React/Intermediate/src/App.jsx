import { Advertisement, Notification, UserProfile } from "./9-conditional_rendering/Ex";

function App() {
  return (
    <div>
      <UserProfile user={{ name: "홍길동", email: "abc@abc.com" }} />
      <UserProfile user="" />
      <Notification count={5} />
      <Notification count={0} />
      <Advertisement isPremium={true}/>
      <Advertisement isPremium={false}/>
    </div>
  );
}

export default App;
