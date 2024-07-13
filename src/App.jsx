import Chat from "./components/Chat/Chat";
import Detail from "./components/Detail/Detail";
import List from "./components/List/List";
import Login from "./components/Login/Login";

const App = () => {
  const user = false;

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
    </div>
  );
};

export default App;
