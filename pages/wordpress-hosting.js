import React from "react";
import WordpressHostingBanner from "../components/components/HostingComponents/WordpressHostingBanner";
import HostingDetails from "../components/components/HostingComponents/HostingDetails";
import Pricing from "../components/components/HostingComponents/Pricing";
import IncludedFeatures from "../components/components/HostingComponents/IncludedFeatures";
import Head from "next/head";
import Testinomial from "../components/components/HostingComponents/Testinomial";
import Clients from "../components/components/HostingComponents/Clients";

const WordpressHosting = () => {
  return (
    <>
      <Head>
        <title>Wordpress Hosting</title>
      </Head>
      <WordpressHostingBanner />
      <HostingDetails />
      <Pricing />
      <IncludedFeatures />
      <Testinomial />
      <Clients />
    </>
  );
};

export default WordpressHosting;
