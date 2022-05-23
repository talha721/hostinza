import Layout from "../components/Layout";
import { useEffect } from "react";

const isServer = typeof window === "undefined";
const WOW = !isServer ? require("wowjs") : null;

function MyApp({ Component, pageProps }) {
  // useEffect(() => {
  //   new WOW().init();
  // });
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
