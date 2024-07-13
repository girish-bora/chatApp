import Chat from "./components/Chat/Chat";
import Detail from "./components/Detail/Detail";
import List from "./components/List/List";

const App = () => {
  return (
    <div className="container">
      <List></List>
      <Chat></Chat>
      <Detail></Detail>
    </div>
  );
};

export default App;
