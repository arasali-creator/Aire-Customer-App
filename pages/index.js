import Head from "next/head";
import Hero from "../components/home/hero/Hero";
import Location from "../components/home/location/Location";
import WebsiteLayout from "../components/layouts/WebsiteLayout";
import withAuth from "../components/shared/withAuth";

function Home() {
  return (
    <>
      <Head>
        <title>Aire - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Location />
    </>
  );
}



Home.getLayout = function getLayout(page) {
  return <WebsiteLayout>{page}</WebsiteLayout>;
};

export default Home;
