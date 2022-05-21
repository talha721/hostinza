import React from "react";
import FaqBanner from "../components/components/FaqsComponents/FaqBanner";
import GeneralQuestions from "../components/components/FaqsComponents/GeneralQuestions";
import AskQuestionsForm from "../components/components/FaqsComponents/AskQuestionsForm";

const Faqs = () => {
  return (
    <>
      <FaqBanner />
      <GeneralQuestions />
      <AskQuestionsForm />
    </>
  );
};

export default Faqs;
