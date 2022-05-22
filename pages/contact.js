import React from "react";
import ContactBanner from "../components/components/ContactComponents/ContactBanner";
import ContactInfo from "../components/components/ContactComponents/ContactInfo";
import ContactForm from "../components/components/ContactComponents/ContactForm";
import Head from "next/head";
// import GoogleMap from "../components/components/GoogleMap";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Us</title>
      </Head>
      <ContactBanner />
      <ContactInfo />
      <ContactForm />
      {/*<GoogleMap />*/}
    </>
  );
};

export default Contact;
