import Head from "next/head";
import React from "react";
import WebsiteLayout from "../components/layouts/WebsiteLayout";
import Profile from "../components/profile/Profile";

function ProfilePage() {
  return (
    <>
      <Head>
        <title>Aire - Profile</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Profile />
    </>
  );
}

export default ProfilePage;

ProfilePage.getLayout = function getLayout(page) {
  return <WebsiteLayout>{page}</WebsiteLayout>;
};
