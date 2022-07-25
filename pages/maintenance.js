import Head from "next/head";
import WebsiteLayout from "../components/layouts/WebsiteLayout";
import Maintenance from "../components/maintenance/Maintenance";

function MaintenancePage() {
  return (
    <>
      <Head>
        <title>Aire - Maintenance</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Maintenance />
    </>
  );
}

MaintenancePage.getLayout = function getLayout(page) {
  return <WebsiteLayout>{page}</WebsiteLayout>;
};

export default MaintenancePage;
