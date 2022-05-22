import React from "react";
import WhoIsBanner from "../components/components/WhoIsComponents/WhoIsBanner";
import SearchDomain from "../components/components/WhoIsComponents/SearchDomain";
import GeneralQuestions from "../components/components/FaqsComponents/GeneralQuestions";
import Head from "next/head";

const WhoIs = () => {
  return (
    <>
      <Head>
        <title>Who Is</title>
      </Head>
      <WhoIsBanner />
      <SearchDomain />
      <GeneralQuestions />
    </>
  );
};

export default WhoIs;
