import React from "react";
import PreLoader from "./components/PreLoader";
import Topbar from "./components/Topbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LanguageSwitcher from "./components/LanguageSwitcher";
import SidebarCartMenu from "./components/SidebarCartMenu";

const Layout = ({ children }) => {
  return (
    <>
      <PreLoader />
      <div className="header-transparent nav-sticky">
        <Topbar />
        <Header />
      </div>
      {children}
      <LanguageSwitcher />
      <SidebarCartMenu />
      <Footer />
    </>
  );
};

export default Layout;
