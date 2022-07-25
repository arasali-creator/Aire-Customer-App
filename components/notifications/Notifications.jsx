import globalStyles from "../shared/Shared.module.scss";
import Notification from "./Notification";
import NotificationImage from "../../assets/images/notifications/Notification.png";
import styles from "./Notifications.module.scss";
import { useEffect, useState } from "react";
import { notifications } from "../ApiServices/Notifactions";
function Notifications() {
  const [notificationList, setNotificationList] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await notifications(
        JSON.parse(localStorage.getItem("aireuser")).user.id
      );
      debugger;
      if (response.data.code === 1) {
        setNotificationList(response.data.data);
      }
      if (response.data.code === 0) {
        Swal.fire({
          position: "center",
          icon: "error",
          title: response.data.data.message,
          showConfirmButton: true,
          timer: 5000,
        });
      }
    })();
  }, []);

  return (
    <section
      className={`${globalStyles.fullHeight} ${globalStyles.culturedbackground} ${globalStyles.pt_45} ${globalStyles.pt_sm_20} ${globalStyles.pb_sm_20} ${globalStyles.pb_35}`}
    >
      <div
        className={`${globalStyles.container} ${globalStyles.fullHeight} ${globalStyles.flex} ${globalStyles.flexAlignCenter}`}
      >
        <div
          className={styles.notificationcontainer}
          style={{
            boxShadow: "0px 0px 18px #00000014",
            borderRadius: "5px",
            width: "100%",
            backgroundColor: "white",
          }}
        >
          {notificationList.map((item, index) => (
            <Notification
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Notifications;
