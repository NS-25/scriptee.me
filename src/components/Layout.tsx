import React from "react";
import Navbar from "./Navbar";
import Content from "./Content";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
