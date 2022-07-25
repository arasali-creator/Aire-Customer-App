import globalStyles from "../shared/Shared.module.scss";
import ChatFooter from "./ChatFooter";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import { initializeApp } from "firebase/app";
import {
  collection as fireStoreCollectione,
  query as fireStoreQuery,
  where as fireStoreWhere,
  getDocs as fireStoreDocs,
  onSnapshot,
  doc,
  QuerySnapshot,
  getFirestore,
  serverTimestamp,
  addDoc,
  orderBy,
  Firestore,
  Timestamp,
} from "firebase/firestore";
import { db, firebaseConfig } from "../../constants/Firebase";
import { useEffect } from "react";
function Chat() {
  const appNew = initializeApp(firebaseConfig);
  const dbNew = getFirestore(appNew);

  // useEffect(() => {
  //   if (roomId !== "") {
  //     const q = fireStoreQuery(
  //       fireStoreCollectione(dbNew, "Messages"),
  //       fireStoreWhere("roomId", "==", roomId),
  //       orderBy("timeStamp", "asc")
  //     );

  //     const unsubscribe = onSnapshot(q, (querySnapshot) => {
  //       setLoader(true);
  //       const messaages = [];
  //       querySnapshot.forEach((doc) => {
  //         var date = new Date(doc.data().timeStamp); // create Date object

  //         messaages.push({
  //           message: doc.data().message,
  //           roomId: doc.data().roomId,
  //           senderId: doc.data().senderId,
  //           timeStamp: date,
  //         });
  //       });

  //       let sortedDates = messaages.sort(function (a, b) {
  //         // Turn your strings into dates, and then subtract them
  //         // to get a value that is either negative, positive, or zero.
  //         return new Date(b.timeStamp) - new Date(a.timeStamp);
  //       });

  //       let reversedArray = sortedDates.reverse();
  //       setMessages([...reversedArray]);
  //       setLoader(false);
  //     });
  //   }
  // }, [dbNew, roomId]);
  return (
    <div
      className={`${globalStyles.pb_25} ${globalStyles.pt_25} ${globalStyles.pr_25} ${globalStyles.pl_25}`}
    >
      <ChatHeader />
      <ChatMessages />
      <ChatFooter />
    </div>
  );
}

export default Chat;
