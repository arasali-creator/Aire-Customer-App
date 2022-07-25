import Head from "next/head";
import ForgotPasswordPage from "../components/login/ForgotPasswordPage";
import withAuth from "../components/shared/withAuth";

function login() {
  return (
    <>
      <Head>
        <title>Aire - Forgot Password</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ForgotPasswordPage />
    </>
  );
}

export default withAuth(login);
