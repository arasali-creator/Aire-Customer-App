import Button from "../shared/Button";
import globalStyles from "../shared/Shared.module.scss";
import Map from "./Map";
import ServiceDetails from "./ServiceDetails";
import TechnicianHeader from "./TechnicianHeader";
import TechnicianDetails from "./TehnicianDetails";
import VehicleDetails from "./VehicleDetails";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import SubmitModal from "./SubmitModal";
import { useState } from "react";
import { cancel } from "../ApiServices/CancelOrder.Service";
import cancelItem from "../../hooks/canceltem";
import { useRouter } from "next/router";

function TechnicianProfile({ data }) {
  const SwalModal = withReactContent(Swal);

  const router = useRouter();

  // const OpenChat = () => {
  //   SwalModal.fire({
  //     html: <SubmitModal />,
  //     showConfirmButton: false,
  //     customClass: "submitmodal",
  //   });
  // };(

  return (
    <section
      className={`${globalStyles.fullHeight}  ${globalStyles.pt_20} ${globalStyles.pb_65}`}
    >
      <div className={`${globalStyles.container}`}>
        <TechnicianHeader />
        <Map data={data} />
        <TechnicianDetails data={data} />
        {/* <ServiceDetails /> */}
        <VehicleDetails data={data} />
        <div
          className={`${globalStyles.column_100} ${globalStyles.flex} ${globalStyles.flexJustifyCenter}`}
        >
          <Button
            onClick={() => cancelItem(data.Id, cancel, router)}
            height="60px"
            width="100%"
            maxWidth="385px"
            text="CANCEL SERVICE"
            fontWeight="700"
            fontSize={"15px"}
            borderRadius="30px"
            textTransform={"uppercase"}
            margin="55px auto 0 auto"
            btnType="danger"
          />
        </div>
      </div>
    </section>
  );
}

export default TechnicianProfile;
