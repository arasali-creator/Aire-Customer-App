import Image from "next/image";
import ChatImage from "../../assets/images/chat/Send.svg";
import styles from "./TechnicianProfile.module.scss";
function ChatFooter() {
  return (
    <form
      style={{
        position: "relative",
      }}
    >
      <input className={styles.chatinput} placeholder="Type Something" />
      <button
        style={{
          width: "15px",
          height: "15px",
          position: "absolute",
          top: "50%",
          right: "15px",
          transform: "translateY(-50%)",
          background: "none",
          border: "none",
          padding: 0,
        }}
      >
        <Image alt="send" src={ChatImage} layout="responsive" />
      </button>
    </form>
  );
}

export default ChatFooter;
