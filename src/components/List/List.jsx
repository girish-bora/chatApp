import ChatList from "./ChatList/ChatList";
import "./list.css";
import UserInfo from "./UserInfo/UserInfo";

const List = () => {
  return (
    <div className="list">
      <UserInfo></UserInfo>
      <ChatList></ChatList>
    </div>
  );
};

export default List;
