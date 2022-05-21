import React from "react";
import PreLoader from "./components/PreLoader";
import Topbar from "./components/Topbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LanguageSwitcher from "./components/LanguageSwitcher";
import SidebarCartMenu from "./components/SidebarCartMenu";
import Testinomial from "./components/HostingComponents/Testinomial";
import Clients from "./components/HostingComponents/Clients";

const Layout = ({ children }) => {
  return (
    <>
      <PreLoader />
      <div className="header-transparent nav-sticky">
        <Topbar />
        <Header />
      </div>
      {children}
      <Testinomial />
      <Clients />
      <LanguageSwitcher />
      <SidebarCartMenu />
      <Footer />
    </>
  );
};

export default Layout;
