import React from "react";
import DedicatedHostingBanner from "../components/components/HostingComponents/DedicatedHosting/DedicatedHostingBanner";
import DedicatedServerPricing from "../components/components/HostingComponents/DedicatedHosting/DedicatedServerPricing";
import IncludedFeatures from "../components/components/HostingComponents/IncludedFeatures";
import ChooseUs from "../components/components/ChooseUs";
import Head from "next/head";

const DedicatedHosting = () => {
  return (
    <>
      <Head>
        <title>Dedicated Hosting</title>
      </Head>
      <DedicatedHostingBanner />
      <ChooseUs />
      <DedicatedServerPricing />
      <IncludedFeatures />
    </>
  );
};

export default DedicatedHosting;
