import globalStyles from "../shared/Shared.module.scss";
import styles from "./TechnicianProfile.module.scss";
import Button from "../shared/Button";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Chat from "./Chat";
function TechnicianHeader() {
  const SwalModal = withReactContent(Swal);

  const OpenChat = () => {
    SwalModal.fire({
      html: <Chat />,
      showConfirmButton: false,
      customClass: "chatmodal",
    });
  };

  return (
    <div
      className={`${globalStyles.flex} ${globalStyles.flexAlignEnd} ${globalStyles.flexAlignStart_md} ${globalStyles.flexColumn_md} `}
    >
      <div className={`${styles.headercontent} ${globalStyles.mb_md_20} `}>
        <h5
          className={`${globalStyles.smalt} ${globalStyles.fontSize_18} ${globalStyles.fontBold} ${globalStyles.mb_10}`}
        >
          SERVICES
        </h5>
        <h1
          className={`${globalStyles.nero} ${globalStyles.fontSize_35} ${globalStyles.fontSize_lg_35} ${globalStyles.fontSize_sm_30} ${globalStyles.black} `}
        >
          YOUR TECHNICIAN ON HIS WAY.
        </h1>
      </div>
      <div onClick={OpenChat}>
        <Button
          height="50px"
          width="210px"
          maxWidth="385px"
          text="CHAT WITH TECHNICIAN"
          fontWeight="700"
          fontSize={"15px"}
          borderRadius="26px"
          textTransform={"uppercase"}
          margin="0"
          btnStyle="outline"
        />
      </div>
    </div>
  );
}

export default TechnicianHeader;
