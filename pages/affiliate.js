import React from "react";
import AffiliateBanner from "../components/components/AffiliateComponents/AffiliateBanner";
import IntroVideo from "../components/components/AffiliateComponents/IntroVideo";
import AffiliateWorks from "../components/components/AffiliateComponents/AffiliateWorks";
import AffiliatePricing from "../components/components/AffiliateComponents/AffiliatePricing";
import AffiliatePackages from "../components/components/AffiliateComponents/AffiliatePackages";
import Head from "next/head";
import Testinomial from "../components/components/HostingComponents/Testinomial";
import Clients from "../components/components/HostingComponents/Clients";

const Affiliate = () => {
  return (
    <>
      <Head>
        <title>Affiliate</title>
      </Head>
      <AffiliateBanner />
      <IntroVideo />
      <AffiliateWorks />
      <AffiliatePricing />
      <AffiliatePackages />
      <Testinomial />
      <Clients />
    </>
  );
};

export default Affiliate;
