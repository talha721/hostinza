import React from "react";
import CloudHostingBanner from "../components/components/HostingComponents/CloudHostingBanner";
import Pricing from "../components/components/HostingComponents/Pricing";
import IncludedFeatures from "../components/components/HostingComponents/IncludedFeatures";
import ChooseUs from "../components/components/ChooseUs";
import Head from "next/head";

const CloudHosting = () => {
  return (
    <>
      <Head>
        <title>Cloud Hosting</title>
      </Head>
      <CloudHostingBanner />
      <ChooseUs />
      <Pricing />
      <IncludedFeatures />
    </>
  );
};

export default CloudHosting;
