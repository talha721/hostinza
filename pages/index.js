import React from "react";
import Head from "next/head";
import Banner from "../components/components/HomeBanner";
import ChooseUs from "../components/components/ChooseUs";
import DomainPricing from "../components/components/HostingComponents/DomainComponents/DomainPricing";
import Features from "../components/components/HostingComponents/DomainComponents/Features";
import IncludedFeatures from "../components/components/HostingComponents/IncludedFeatures";
import Testinomial from "../components/components/HostingComponents/Testinomial";
import Clients from "../components/components/HostingComponents/Clients";

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Banner />
      <ChooseUs />
      <DomainPricing />
      <Features />
      <IncludedFeatures />
      <Testinomial />
      <Clients />
    </>
  );
};

export default Home;
