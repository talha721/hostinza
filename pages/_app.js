import Layout from "../components/Layout";
import React, { useEffect, useState } from "react";
// import "../public/assets/css/style.css";
// import "../public/assets/css/responsive.css";

const isServer = typeof window === "undefined";
const WOW = !isServer ? require("wow.js") : null;

function MyApp({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
  }, []);

  useEffect(() => {
    new WOW().init();
  });
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/assets/js/main.js";
    script.async = true;
    document.body.appendChild(script);
  });

  if (!showChild) {
    return null;
  }

  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }
}

export default MyApp;
