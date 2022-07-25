import Head from "next/head";
import React from "react";
import WebsiteLayout from "../components/layouts/WebsiteLayout";
import Hero from "../components/services/hero/Hero";

function Services({ data }) {
  return (
    <>
      <Head>
        <title>Aire - Services</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero data={data} />
    </>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(
    `https://aireapi.jinnbytedev.com/api/LookUp/Services?PageNumber=1&PageSize=10`
  );
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default Services;

Services.getLayout = function getLayout(page) {
  return <WebsiteLayout>{page}</WebsiteLayout>;
};
