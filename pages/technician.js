import Head from "next/head";
import WebsiteLayout from "../components/layouts/WebsiteLayout";
import TechnicianProfile from "../components/technicianprofile/TechnicianProfile";
import Pusher from "pusher-js";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Swal from "sweetalert2";

function Technician() {
  const router = useRouter();
  const [loader, setLoader] = useState(true);
  const [data, setData] = useState();
  const pusher = new Pusher("45f06df00cffc5c4a337", {
    cluster: "ap2",
  });

  const channel = pusher.subscribe(
    "customer-" + JSON.parse(localStorage.getItem("aireuser")).user.id
  );

  channel.bind("Order", (data) => {
    debugger;
    // alert(JSON.stringify(data));
    // setData(data.message.Data);
    localStorage.setItem("AireTechnician", JSON.stringify(data.message.Data));
    localStorage.setItem(
      "AireTechnicianId",
      JSON.stringify(data.message.Data.TechnicianId)
    );
    console.log(data);
    setData(JSON.parse(localStorage.getItem("AireTechnician")));
    setLoader(false);
  });
  // if (loader === true) {
  // const time = setTimeout(() => {
  //   if (loader === true) {
  //     router.push("/");
  //     Swal.fire({
  //       position: "center",
  //       icon: "error",
  //       title: "Technician not found",
  //       showConfirmButton: true,
  //       timer: 5000,
  //       customClass: "messageshow",
  //     });
  //     clearTimeout(time);
  //   }
  // }, 60000);
  // }
  useEffect(() => {
    if (localStorage.getItem("AireTechnician")) {
      setData(JSON.parse(localStorage.getItem("AireTechnician")));

      setLoader(false);
    } else {
    }
    console.log(data);
  }, []);

  return (
    <>
      <Head>
        <title>Aire - Technician</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {loader ? (
        <div className="loader_container">
          {" "}
          <div className="loader"></div>
          <h1 className="loader_text">Please Wait Finding Technician....</h1>
        </div>
      ) : (
        <TechnicianProfile data={data} />
      )}
    </>
  );
}

Technician.getLayout = function getLayout(page) {
  return <WebsiteLayout>{page}</WebsiteLayout>;
};

export default Technician;
