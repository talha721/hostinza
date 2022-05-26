import React from "react";
import SharedHostingBanner from "../components/components/HostingComponents/SharedHostingBanner";
import HostingDetails from "../components/components/HostingComponents/HostingDetails";
import Pricing from "../components/components/HostingComponents/Pricing";
import IncludedFeatures from "../components/components/HostingComponents/IncludedFeatures";
import Head from "next/head";
import Testinomial from "../components/components/HostingComponents/Testinomial";
import Clients from "../components/components/HostingComponents/Clients";

const SharedHosting = () => {
  return (
    <>
      <Head>
        <title>Shared Hosting</title>
      </Head>
      <SharedHostingBanner />
      <HostingDetails />
      <Pricing />
      <IncludedFeatures />
      <Testinomial />
      <Clients />
    </>
  );
};

export default SharedHosting;
