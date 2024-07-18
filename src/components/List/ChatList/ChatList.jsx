import { useEffect, useState } from "react";
import "./chatList.css";
import AddUser from "./AddUser/AddUser";
import { useUserStore } from "../../../lib/userStore";
import { onSnapshot, doc, getDoc } from "firebase/firestore";
import { db } from "../../../lib/firebase";
import { useChatStore } from "../../../lib/chatStore";

const ChatList = () => {
  const [addMode, setAddMode] = useState(false);

  const [chats, setChats] = useState([]);

  const { currentUser } = useUserStore();

  const { chatId, changeChat } = useChatStore();

  useEffect(() => {
    const unsub = onSnapshot(
      doc(db, "userchats", currentUser.id),
      async (res) => {
        const items = res.data().chats;

        const promises = items.map(async (item) => {
          const userDocRef = doc(db, "user", item.receiverId);
          const userDocSnap = await getDoc(userDocRef);

          const user = userDocSnap.data();

          return { ...item, user };
        });

        const chatData = await Promise.all(promises);

        setChats(chatData.sort((a, b) => b.updatedAt - a.updatedAt));
      }
    );

    return () => {
      unsub();
    };
  }, [currentUser.id]);

  const handleSelect = async (chat) => {
    changeChat(chat.chatId, chat.user);
  };

  return (
    <div className="chatList">
      <div className="search">
        <div className="searchBar">
          <input type="text" placeholder="Search" />
          <img src="/search.png" alt="" />
        </div>
        <div className="add">
          <img
            src={addMode ? "minus.png" : "./plus.png"}
            alt=""
            onClick={() => setAddMode((prev) => !prev)}
          />
        </div>
      </div>
      {chats.map((chat) => (
        <div
          className="item"
          key={chat.chatId}
          onClick={() => handleSelect(chat)}
        >
          <img src={chat.user.avatar || "./avatar.png"} alt="" />
          <div className="texts">
            <span>{chat.user.username}</span>
            <p>{chat.lastMessage}</p>
          </div>
        </div>
      ))}

      {addMode && <AddUser></AddUser>}
    </div>
  );
};

export default ChatList;
