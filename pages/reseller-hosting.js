import React from "react";
import ResellerHostingBanner from "../components/components/HostingComponents/ResellerHostingBanner";
import Pricing from "../components/components/HostingComponents/Pricing";
import IncludedFeatures from "../components/components/HostingComponents/IncludedFeatures";
import ChooseUs from "../components/components/ChooseUs";
import Head from "next/head";
import Testinomial from "../components/components/HostingComponents/Testinomial";
import Clients from "../components/components/HostingComponents/Clients";

const ResellerHosting = () => {
  return (
    <>
      <Head>
        <title>Reseller Hosting</title>
      </Head>
      <ResellerHostingBanner />
      <ChooseUs />
      <Pricing />
      <IncludedFeatures />
      <Testinomial />
      <Clients />
    </>
  );
};

export default ResellerHosting;
