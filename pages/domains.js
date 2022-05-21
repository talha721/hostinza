import React from "react";
import DomainBanner from "../components/components/HostingComponents/DomainComponents/DomainBanner";
import SearchDomain from "../components/components/SearchDomain";
import DomainPricing from "../components/components/HostingComponents/DomainComponents/DomainPricing";
import Features from "../components/components/HostingComponents/DomainComponents/Features";
import IncludedFeatures from "../components/components/HostingComponents/IncludedFeatures";
import ChooseUs from "../components/components/ChooseUs";

const Domains = () => {
  return (
    <>
      <DomainBanner />
      <SearchDomain />
      <ChooseUs />
      <DomainPricing />
      <Features />
      <IncludedFeatures />
    </>
  );
};

export default Domains;
