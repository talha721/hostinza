import Banner from "../components/components/HomeBanner";
import ChooseUs from "../components/components/ChooseUs";
import DomainPricing from "../components/components/HostingComponents/DomainComponents/DomainPricing";
import Features from "../components/components/HostingComponents/DomainComponents/Features";
import IncludedFeatures from "../components/components/HostingComponents/IncludedFeatures";
import Head from "next/head";

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
    </>
  );
};

export default Home;
