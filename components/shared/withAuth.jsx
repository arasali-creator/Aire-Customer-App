import { useRouter } from "next/router";

const withAuth = (WrappedComponent) => {
  // eslint-disable-next-line react/display-name
  return (props) => {
    const parseJwt = (token) => {
      try {
        return JSON.parse(atob(token.split(".")[1]));
      } catch (e) {
        return null;
      }
    };

    if (typeof window !== "undefined") {
      const Router = useRouter();
      const user = JSON.parse(localStorage.getItem("aireuser"));

      const accessToken = parseJwt(user?.token)?.exp * 1000 < Date.now();

      if (accessToken) {
        Router.replace("/login");
      } else {
        return <WrappedComponent {...props} />;
      }
      // if (
      //   !accessToken &&
      //   Router.pathname !== "/login" &&
      //   !accessToken &&
      //   Router.pathname !== "/signup" &&
      //   Router.pathname !== "/forgot"
      // ) {
      //   Router.replace("/login");
      //   return null;
      // } else if (
      //   (!accessToken && Router.pathname === "/login") ||
      //   (!accessToken && Router.pathname === "/signup") ||
      //   (!accessToken && Router.pathname === "/forgot")
      // ) {
      //   return <WrappedComponent {...props} />;
      // } else if (
      //   (accessToken && Router.pathname === "/login") ||
      //   (accessToken && Router.pathname === "/signup") ||
      //   (accessToken && Router.pathname === "/forgot")
      // ) {
      //   Router.replace("/");
      //   return null;
      // }

      // If this is an accessToken we just render the component that was passed with all its props

      // return <WrappedComponent {...props} />;
    }

    return null;
  };
};

export default withAuth;
