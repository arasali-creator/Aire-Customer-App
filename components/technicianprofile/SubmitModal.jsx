import globalStyles from "../shared/Shared.module.scss";
import styles from "./TechnicianProfile.module.scss";
import Button from "../shared/Button";
import Rating from "react-rating";
import Image from "next/image";
import StarEmpty from "../../assets/images/technician/starempty.svg";
import StarFull from "../../assets/images/technician/starfull.svg";
function SubmitModal() {
  return (
    <div
      className={`${globalStyles.pb_60} ${globalStyles.pt_60} ${globalStyles.pl_35} ${globalStyles.pr_35}`}
    >
      <h3
        className={`${globalStyles.black} ${globalStyles.fontSize_35} ${globalStyles.fontBold} ${globalStyles.mb_60}`}
      >
        Customer Reviews
      </h3>
      <Rating
        emptySymbol={
          <div
            style={{
              width: "35px",
              height: "35px",
              marginRight: "10px",
              marginBottom: "30px",
            }}
          >
            <Image
              src={StarEmpty}
              className="iconstar"
              layout="responsive"
              alt="Star Empty"
            />
          </div>
        }
        fullSymbol={
          <div
            style={{
              width: "35px",
              height: "35px",
            }}
          >
            <Image
              src={StarFull}
              className="iconstar"
              layout="responsive"
              alt="Star Full"
            />
          </div>
        }
      />
      <p
        className={`${globalStyles.cloudygrey} ${globalStyles.fontSize_15} ${globalStyles.fontRegular} ${globalStyles.mb_40} `}
      >
        How much you satisfied with the technician?
      </p>
      <textarea
        name=""
        id=""
        placeholder="YOUR REMARKS"
        style={{
          color: "rgb(#515C6F, 0.5)",
        }}
        className={`${styles.modalnote} ${globalStyles.pb_20}  ${globalStyles.pt_20} ${globalStyles.pl_25} ${globalStyles.pr_25} ${globalStyles.cloudygrey} ${globalStyles.fontSize_12} ${globalStyles.fontMedium} `}
      ></textarea>
      <Button
        height="50px"
        width="100%"
        maxWidth="385px"
        text="SUBMIT"
        fontWeight="700"
        fontSize={"15px"}
        padding="0"
        borderRadius="30px"
        textTransform={"uppercase"}
        margin="0 auto"
        btnType="primary"
      />
    </div>
  );
}
export default SubmitModal;
