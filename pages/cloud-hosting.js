import React from "react";
import CloudHostingBanner from "../components/components/HostingComponents/CloudHostingBanner";
import Pricing from "../components/components/HostingComponents/Pricing";
import IncludedFeatures from "../components/components/HostingComponents/IncludedFeatures";
import ChooseUs from "../components/components/ChooseUs";

const CloudHosting = () => {
  return (
    <>
      <CloudHostingBanner />
      <ChooseUs />
      <Pricing />
      <IncludedFeatures />
    </>
  );
};

export default CloudHosting;
