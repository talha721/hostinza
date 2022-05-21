import React from "react";
import WhoIsBanner from "../components/components/WhoIsComponents/WhoIsBanner";
import SearchDomain from "../components/components/WhoIsComponents/SearchDomain";
import GeneralQuestions from "../components/components/FaqsComponents/GeneralQuestions";

const WhoIs = () => {
  return (
    <>
      <WhoIsBanner />
      <SearchDomain />
      <GeneralQuestions />
    </>
  );
};

export default WhoIs;
