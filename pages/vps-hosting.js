import React, { useEffect } from "react";
import VPSHostingBanner from "../components/components/HostingComponents/VPSHosting/VPSHostingBanner";
import VPSHostingDetails from "../components/components/HostingComponents/VPSHosting/HostingDetails";
import HostingDetails from "../components/components/HostingComponents/HostingDetails";
import IncludedFeatures from "../components/components/HostingComponents/IncludedFeatures";
import Head from "next/head";
import Testinomial from "../components/components/HostingComponents/Testinomial";
import Clients from "../components/components/HostingComponents/Clients";

const VpsHosting = () => {
  return (
    <>
      <Head>
        <title>VPS Hosting</title>
      </Head>
      <VPSHostingBanner />
      <HostingDetails />
      <VPSHostingDetails />
      <IncludedFeatures />
      <Testinomial />
      <Clients />
    </>
  );
};

export default VpsHosting;
