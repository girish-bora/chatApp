import EmojiPicker from "emoji-picker-react";
import "./chat.css";
import { useEffect, useRef, useState } from "react";
import { db } from "../../lib/firebase";
import { doc, onSnapshot } from "firebase/firestore";
import { useChatStore } from "../../lib/chatStore";

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [chat, setChat] = useState("");

  const { chatId } = useChatStore();

  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    const unSub = onSnapshot(
      doc(db, "chats", chatId ),
      (res) => {
        setChat(res.data());
      }
    );

    return () => {
      unSub();
    }
  }, [chatId]);

  console.log(chat);

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Blanditiis quisquam veritatis, voluptatem placeat velit soluta
              explicabo corrupti cupiditate, eius optio temporibus voluptates,
              minima quis eaque totam tempora exercitationem repudiandae omnis.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Blanditiis quisquam veritatis, voluptatem placeat velit soluta
              explicabo corrupti cupiditate, eius optio temporibus voluptates,
              minima quis eaque totam tempora exercitationem repudiandae omnis.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Blanditiis quisquam veritatis, voluptatem placeat velit soluta
              explicabo corrupti cupiditate, eius optio temporibus voluptates,
              minima quis eaque totam tempora exercitationem repudiandae omnis.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Blanditiis quisquam veritatis, voluptatem placeat velit soluta
              explicabo corrupti cupiditate, eius optio temporibus voluptates,
              minima quis eaque totam tempora exercitationem repudiandae omnis.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Blanditiis quisquam veritatis, voluptatem placeat velit soluta
              explicabo corrupti cupiditate, eius optio temporibus voluptates,
              minima quis eaque totam tempora exercitationem repudiandae omnis.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <img
              src="https://images.pexels.com/photos/25435588/pexels-photo-25435588/free-photo-of-a-close-up-of-pink-roses-in-a-garden.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Blanditiis quisquam veritatis, voluptatem placeat velit soluta
              explicabo corrupti cupiditate, eius optio temporibus voluptates,
              minima quis eaque totam tempora exercitationem repudiandae omnis.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          type="text"
          placeholder="Type a message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="emoji">
          <img
            src="./emoji.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
          <div className="picker">
            <EmojiPicker
              height={400}
              width={300}
              open={open}
              onEmojiClick={handleEmoji}
            />
          </div>
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
};

export default Chat;
