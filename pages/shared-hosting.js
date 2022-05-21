import React from "react";
import SharedHostingBanner from "../components/components/HostingComponents/SharedHostingBanner";
import HostingDetails from "../components/components/HostingComponents/HostingDetails";
import Pricing from "../components/components/HostingComponents/Pricing";
import IncludedFeatures from "../components/components/HostingComponents/IncludedFeatures";

const SharedHosting = () => {
  return (
    <>
      <SharedHostingBanner />
      <HostingDetails />
      <Pricing />
      <IncludedFeatures />
    </>
  );
};

export default SharedHosting;
