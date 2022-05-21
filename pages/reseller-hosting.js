import React from "react";
import ResellerHostingBanner from "../components/components/HostingComponents/ResellerHostingBanner";
import Pricing from "../components/components/HostingComponents/Pricing";
import IncludedFeatures from "../components/components/HostingComponents/IncludedFeatures";
import ChooseUs from "../components/components/ChooseUs";

const ResellerHosting = () => {
  return (
    <>
      <ResellerHostingBanner />
      <ChooseUs />
      <Pricing />
      <IncludedFeatures />
    </>
  );
};

export default ResellerHosting;
