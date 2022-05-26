import React from "react";
import DomainBanner from "../components/components/HostingComponents/DomainComponents/DomainBanner";
import SearchDomain from "../components/components/SearchDomain";
import DomainPricing from "../components/components/HostingComponents/DomainComponents/DomainPricing";
import Features from "../components/components/HostingComponents/DomainComponents/Features";
import IncludedFeatures from "../components/components/HostingComponents/IncludedFeatures";
import ChooseUs from "../components/components/ChooseUs";
import Head from "next/head";
import Testinomial from "../components/components/HostingComponents/Testinomial";
import Clients from "../components/components/HostingComponents/Clients";

const Domains = () => {
  return (
    <>
      <Head>
        <title>Domains</title>
      </Head>
      <DomainBanner />
      <SearchDomain />
      <ChooseUs />
      <DomainPricing />
      <Features />
      <IncludedFeatures />
      <Testinomial />
      <Clients />
    </>
  );
};

export default Domains;
