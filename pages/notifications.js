import Head from "next/head";
import { useEffect } from "react";
import WebsiteLayout from "../components/layouts/WebsiteLayout";
import Notifications from "../components/notifications/Notifications";

function NotificationsPage() {
  return (
    <>
      <Head>
        <title>Aire - Notifications</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Notifications />
    </>
  );
}

export default NotificationsPage;

NotificationsPage.getLayout = function getLayout(page) {
  return <WebsiteLayout>{page}</WebsiteLayout>;
};
