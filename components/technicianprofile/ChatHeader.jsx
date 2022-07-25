import globalStyles from "../shared/Shared.module.scss";
import styles from "./TechnicianProfile.module.scss";
import Image from "next/image";
import ChatImage from "../../assets/images/chat/avatar.png";
import CrossImage from "../../assets/images/chat/icon_cancel.svg";
import Swal from "sweetalert2";

function ChatHeader() {
  const closeSwal = () => {
    Swal.close();
  };
  return (
    <div
      className={`${globalStyles.flex} ${globalStyles.flexJustifyBetween} ${globalStyles.flexAlignStart} ${styles.chatheader}`}
    >
      <div
        className={`${globalStyles.flex} ${globalStyles.flexJustifyBetween} ${globalStyles.flexAlignStart}  ${globalStyles.fullWidth} `}
      >
        <div className={`${styles.chatcontent} ${globalStyles.flex}`}>
          <div
            style={{ width: "35px", height: "35px", borderRadius: "35px" }}
            className={`${globalStyles.mr_10}`}
          >
            <Image alt="chat user" src={ChatImage} layout="responsive" />
          </div>
          <div
            className={`${globalStyles.flex} ${globalStyles.flexAlignStart} ${globalStyles.flexColumn} ${styles.innerchatcontent}`}
          >
            <h5
              className={`${globalStyles.nero} ${globalStyles.fontSize_12} ${globalStyles.fontBold} ${globalStyles.mb_0} `}
            >
              David James
            </h5>
            <p
              className={`${globalStyles.cloudygrey} ${globalStyles.fontSize_10} ${globalStyles.fontRegular} `}
            >
              to <span className={`${globalStyles.fontBold}`}> me</span>
            </p>
          </div>
        </div>
        <div
          style={{ width: "20px", height: "20px", cursor: "pointer" }}
          onClick={closeSwal}
        >
          <Image alt="cross" src={CrossImage} layout="responsive" />
        </div>
      </div>
    </div>
  );
}

export default ChatHeader;
