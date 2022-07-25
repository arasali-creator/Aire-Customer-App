import Head from "next/head";
import History from "../components/history/History";
import WebsiteLayout from "../components/layouts/WebsiteLayout";

function HistoryPage() {
  return (
    <>
      <Head>
        <title>Aire - History</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <History />
    </>
  );
}

export default HistoryPage;

HistoryPage.getLayout = function getLayout(page) {
  return <WebsiteLayout>{page}</WebsiteLayout>;
};
