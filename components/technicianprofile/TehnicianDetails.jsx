import Image from "next/image";
import globalStyles from "../shared/Shared.module.scss";
import MapImage from "../../assets/images/technician/Profile.png";
import styles from "./TechnicianProfile.module.scss";
import { Data } from "@react-google-maps/api";
function TechnicianDetails({ data }) {
  return (
    <div
      className={`${styles.card} ${globalStyles.pb_30} ${globalStyles.mb_30}  ${globalStyles.pt_30} ${globalStyles.pl_55} ${globalStyles.pr_55} ${globalStyles.pb_sm_20}  ${globalStyles.pt_sm_20} ${globalStyles.pr_sm_20} ${globalStyles.pl_sm_20} ${globalStyles.mt_30}`}
    >
      <div className={`${globalStyles.mb_30}`}>
        <h5
          className={`${globalStyles.nero} ${globalStyles.fontSize_18} ${globalStyles.fontBold} ${globalStyles.mb_0} `}
        >
          Technician Details
        </h5>
      </div>
      <div className={styles.techniciancontent}>
        <div style={{ width: "175px", height: "175px", borderRadius: "15px" }}>
          {/* <Image
            alt="map"
            src={
              data?.TechnicianProfilePicPath !== "not available"
                ? data?.TechnicianProfilePicPath
                : MapImage
            }
          /> */}
        </div>
        <div className={`${globalStyles.row} ${styles.techniciancontent_row} `}>
          <div
            className={`${globalStyles.column_33} ${globalStyles.column_md_50} ${globalStyles.mb_30} ${globalStyles.column_sm_100} `}
          >
            <h5
              className={`${globalStyles.nero} ${globalStyles.fontSize_16} ${globalStyles.fontBold} ${globalStyles.mb_10} `}
            >
              First Name
            </h5>
            <h6
              className={`${globalStyles.cloudygrey} ${globalStyles.fontSize_15} ${globalStyles.fontRegular} ${globalStyles.mb_0} `}
            >
              {data?.TechnicianFirstName}
            </h6>
          </div>
          <div
            className={`${globalStyles.column_33} ${globalStyles.column_md_50} ${globalStyles.mb_30} ${globalStyles.column_sm_100} `}
          >
            <h5
              className={`${globalStyles.nero} ${globalStyles.fontSize_16} ${globalStyles.fontBold} ${globalStyles.mb_10} `}
            >
              Last Name
            </h5>
            <h6
              className={`${globalStyles.cloudygrey} ${globalStyles.fontSize_15} ${globalStyles.fontRegular} ${globalStyles.mb_0} `}
            >
              {data?.TechnicianMiddleName}
            </h6>
          </div>
          <div
            className={`${globalStyles.column_33} ${globalStyles.column_md_50} ${globalStyles.mb_30} ${globalStyles.column_sm_100} `}
          >
            <h5
              className={`${globalStyles.nero} ${globalStyles.fontSize_16} ${globalStyles.fontBold} ${globalStyles.mb_10} `}
            >
              Phone Number
            </h5>
            <h6
              className={`${globalStyles.cloudygrey} ${globalStyles.fontSize_15} ${globalStyles.fontRegular} ${globalStyles.mb_0} `}
            >
              {data?.TechnicianPhoneNumber}
            </h6>
          </div>
          <div
            className={`${globalStyles.column_33} ${globalStyles.column_md_50} ${globalStyles.mb_0} ${globalStyles.mb_sm_30} ${globalStyles.column_sm_100} `}
          >
            <h5
              className={`${globalStyles.nero} ${globalStyles.fontSize_16} ${globalStyles.fontBold} ${globalStyles.mb_10} `}
            >
              Email
            </h5>
            <h6
              className={`${globalStyles.cloudygrey} ${globalStyles.fontSize_15} ${globalStyles.fontRegular} ${globalStyles.mb_0} `}
            >
              {data?.TechnicianEmail}
            </h6>
          </div>
          <div
            className={`${globalStyles.column_33} ${globalStyles.column_md_50} ${globalStyles.mb_0} ${globalStyles.column_sm_100} `}
          >
            <h5
              className={`${globalStyles.nero} ${globalStyles.fontSize_16} ${globalStyles.fontBold} ${globalStyles.mb_10} `}
            >
              Ratings
            </h5>
            <h6
              className={`${globalStyles.cloudygrey} ${globalStyles.fontSize_15} ${globalStyles.fontRegular} ${globalStyles.mb_0} `}
            >
              3.5
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechnicianDetails;
