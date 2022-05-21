import React from "react";
import ContactBanner from "../components/components/ContactComponents/ContactBanner";
import ContactInfo from "../components/components/ContactComponents/ContactInfo";
import ContactForm from "../components/components/ContactComponents/ContactForm";
// import GoogleMap from "../components/components/GoogleMap";

const Contact = () => {
  return (
    <>
      <ContactBanner />
      <ContactInfo />
      <ContactForm />
      {/*<GoogleMap />*/}
    </>
  );
};

export default Contact;
