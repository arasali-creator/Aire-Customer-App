import styles from "./TechnicianProfile.module.scss";
import Image from "next/image";
import ChatImage from "../../assets/images/chat/Profile.png";
function ChatMessages() {
  return (
    <div className={styles.chatmessagecontainer}>
      <div className={styles.chatmessage}>
        <div className={styles.chatmessage_image}>
          <Image alt="chat user" src={ChatImage} layout="responsive" />
        </div>
        <div className={styles.chatmessageuser_messagecontainer}>
          <p className={styles.chatmessageuser_message}>
            Now, if you are interested in being the best player, getting really
            good money and knowing some tricks and advices of what to do in a
            live tournament.
          </p>
          <h6 className={styles.chatmessageuser_time}>07.44 pm</h6>
        </div>
      </div>
    </div>
  );
}

export default ChatMessages;
