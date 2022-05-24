import Layout from "../components/Layout";
import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const isServer = typeof window === "undefined";
const WOW = !isServer ? require("wow.js") : null;

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    new WOW().init();
  });
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "/assets/js/main.js";
    script.async = true;

    document.body.appendChild(script);
  });
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
