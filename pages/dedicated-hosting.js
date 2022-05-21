import React from "react";
import DedicatedHostingBanner from "../components/components/HostingComponents/DedicatedHosting/DedicatedHostingBanner";
import DedicatedServerPricing from "../components/components/HostingComponents/DedicatedHosting/DedicatedServerPricing";
import IncludedFeatures from "../components/components/HostingComponents/IncludedFeatures";
import ChooseUs from "../components/components/ChooseUs";

const DedicatedHosting = () => {
  return (
    <>
      <DedicatedHostingBanner />
      <ChooseUs />
      <DedicatedServerPricing />
      <IncludedFeatures />
    </>
  );
};

export default DedicatedHosting;
