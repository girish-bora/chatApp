import Chat from "./components/Chat/Chat";
import Detail from "./components/Detail/Detail";
import List from "./components/List/List";
import Login from "./components/Login/Login";
import Notification from "./components/Notification/Notification";

const App = () => {
  const user = true;

  return (
    <div className="container">
      {user ? (
        <>
          <List></List>
          <Chat></Chat>
          <Detail></Detail>
        </>
      ) : (
        <Login></Login>
      )}
      <Notification></Notification>
    </div>
  );
};

export default App;
