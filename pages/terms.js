import React from "react";
import TermsBanner from "../components/components/TermsComponents/TermsBanner";
import TermsOfServices from "../components/components/TermsComponents/TermsOfServices";
import Head from "next/head";

const Terms = () => {
  return (
    <>
      <Head>
        <title>Terms</title>
      </Head>
      <TermsBanner />
      <TermsOfServices />
    </>
  );
};

export default Terms;
