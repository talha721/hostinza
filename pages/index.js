import Banner from "../components/components/HomeBanner";
import ChooseUs from "../components/components/ChooseUs";
import DomainPricing from "../components/components/HostingComponents/DomainComponents/DomainPricing";
import Features from "../components/components/HostingComponents/DomainComponents/Features";
import IncludedFeatures from "../components/components/HostingComponents/IncludedFeatures";

const Home = () => {
  return (
    <>
      <Banner />
      <ChooseUs />
      <DomainPricing />
      <Features />
      <IncludedFeatures />
    </>
  );
};

export default Home;
