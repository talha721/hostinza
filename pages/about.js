import React from "react";
import AboutBanner from "../components/components/AboutComponents/AboutBanner";
import WhoWeAre from "../components/components/AboutComponents/WhoWeAre";
import ChooseUs from "../components/components/ChooseUs";
import OurOffice from "../components/components/AboutComponents/OurOffice";
import OurExperts from "../components/components/AboutComponents/OurExperts";
import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>About Us</title>
      </Head>
      <AboutBanner />
      <WhoWeAre />
      <ChooseUs />
      <OurOffice />
      <OurExperts />
    </>
  );
};

export default About;
