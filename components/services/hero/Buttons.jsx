import Image from "next/image";
import Link from "next/link";
import globalStyles from "../../shared/Shared.module.scss";
import Maintenance from "../../../assets/images/services/icon_maintenance.svg";
import Clock from "../../../assets/images/services/clock.svg";
import Diagnostics from "../../../assets/images/services/icon_diagnostics.svg";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import BookedModal from "./BookedModal";
import { useRouter } from "next/router";
function Buttons({ data }) {
  // setInterval(() => {
  //   console.log(data);
  // }, 5000);
  const router = useRouter();
  const SwalModal = withReactContent(Swal);

  const OpenBookedModal = () => {
    SwalModal.fire({
      html: <BookedModal />,
      showConfirmButton: false,
      customClass: "bookedmodal",
    });
  };

  const handleClick = (id, type) => {
    debugger;
    if (type.trim() === "Maintenance") {
      const orderPayload = JSON.parse(sessionStorage.getItem("orderPayload"));
      orderPayload.serviceType = type;
      orderPayload.serviceId = id;
      sessionStorage.setItem("orderPayload", JSON.stringify(orderPayload));

      router.push("/maintenance");
    } else {
      router.push("/technician");
    }
  };

  return (
    <div
      className={`${globalStyles.row} ${globalStyles.flex}  ${globalStyles.flexColumn_md} ${globalStyles.flexAlignCenter} `}
    >
      <div
        className={`${globalStyles.column_50} ${globalStyles.mb_lg_30}   ${globalStyles.column_lg_100} ${globalStyles.fullWidth}`}
      >
        <div
          onClick={() =>
            handleClick(
              data.data.services?.[0].id,
              data.data.services?.[0].type
            )
          }
          className="Maintenance"
          style={{
            boxShadow: "0px 15px 32px #0000000A",
            borderRadius: "4px",
            padding: "25px",
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <Image alt="maintenance" src={Maintenance} />
          <div className={`${globalStyles.ml_15}`}>
            <h5
              className={`${globalStyles.black} ${globalStyles.fontSize_18} ${globalStyles.fontBold} ${globalStyles.mb_5}`}
            >
              {data.data.services?.[0].type}
            </h5>
            <h6
              className={`${globalStyles.black} ${globalStyles.fontSize_16} ${globalStyles.fontMedium} ${globalStyles.mb_5}`}
            >
              ${data.data.services?.[0].price}
            </h6>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              {/* <Image alt="Clock" src={Clock} />
              <h6
                className={`${globalStyles.cloudygrey} ${globalStyles.fontSize_15} ${globalStyles.fontRegular} ${globalStyles.ml_5}`}
              >
                Time: 35 min
              </h6> */}
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={() =>
          handleClick(data.data.services?.[1].id, data.data.services?.[1].type)
        }
        className={`${globalStyles.column_50}    ${globalStyles.column_lg_100} ${globalStyles.fullWidth}`}
      >
        <div
          className="Diagnostics"
          style={{
            boxShadow: "0px 15px 32px #0000000A",
            borderRadius: "4px",
            padding: "25px",
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <Image alt="Diagnostics" src={Diagnostics} />
          <div className={`${globalStyles.ml_15}`}>
            <h5
              className={`${globalStyles.black} ${globalStyles.fontSize_18} ${globalStyles.fontBold} ${globalStyles.mb_5}`}
            >
              {data.data.services?.[1].type}
            </h5>
            <h6
              className={`${globalStyles.black} ${globalStyles.fontSize_16} ${globalStyles.fontMedium} ${globalStyles.mb_5}`}
            >
              ${data.data.services?.[1].price}
            </h6>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              {/* <Image alt="Clock" src={Clock} />
              <h6
                className={`${globalStyles.cloudygrey} ${globalStyles.fontSize_15} ${globalStyles.fontRegular} ${globalStyles.ml_5}`}
              >
                Time: 35 min
              </h6> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Buttons;
