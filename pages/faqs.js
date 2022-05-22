import React from "react";
import FaqBanner from "../components/components/FaqsComponents/FaqBanner";
import GeneralQuestions from "../components/components/FaqsComponents/GeneralQuestions";
import AskQuestionsForm from "../components/components/FaqsComponents/AskQuestionsForm";
import Head from "next/head";

const Faqs = () => {
  return (
    <>
      <Head>
        <title>FAQs</title>
      </Head>
      <FaqBanner />
      <GeneralQuestions />
      <AskQuestionsForm />
    </>
  );
};

export default Faqs;
