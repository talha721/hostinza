import React from "react";
import WordpressHostingBanner from "../components/components/HostingComponents/WordpressHostingBanner";
import HostingDetails from "../components/components/HostingComponents/HostingDetails";
import Pricing from "../components/components/HostingComponents/Pricing";
import IncludedFeatures from "../components/components/HostingComponents/IncludedFeatures";

const WordpressHosting = () => {
  return (
    <>
      <WordpressHostingBanner />
      <HostingDetails />
      <Pricing />
      <IncludedFeatures />
    </>
  );
};

export default WordpressHosting;
