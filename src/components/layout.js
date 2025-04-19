import * as React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import "./styles/layout.css";

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <title>{pageTitle}</title>
      <div class="container">
        <div class="banner">
          <Banner />
        </div>
        <div class="sitemap">
          <Navbar />
        </div>
        <main class="mainContent">{children}</main>
      </div>
    </div>
  );
};
export default Layout;
