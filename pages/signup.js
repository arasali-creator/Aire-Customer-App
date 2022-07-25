import Head from "next/head";
import withAuth from "../components/shared/withAuth";
import Signup from "../components/signup/Signup";

function signup() {
  return (
    <>
      <Head>
        <title>Aire - Signup</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Signup />
    </>
  );
}

export default withAuth(signup);
