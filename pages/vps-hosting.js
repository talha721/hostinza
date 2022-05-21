import React from "react";
import VPSHostingBanner from "../components/components/HostingComponents/VPSHosting/VPSHostingBanner";
import VPSHostingDetails from "../components/components/HostingComponents/VPSHosting/HostingDetails";
import HostingDetails from "../components/components/HostingComponents/HostingDetails";
import IncludedFeatures from "../components/components/HostingComponents/IncludedFeatures";

const VpsHosting = () => {
  return (
    <>
      <VPSHostingBanner />
      <HostingDetails />
      <VPSHostingDetails />
      <IncludedFeatures />
    </>
  );
};

export default VpsHosting;
