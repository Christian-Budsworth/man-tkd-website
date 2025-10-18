import * as React from "react";
import Banner from "../../molecules/Banner/Banner";
import Navbar from "../../molecules/Navbar/Navbar";
import "./layout.css";

export default function Layout({ pageTitle, children }) {
  return (
    <div>
      <title>{pageTitle}</title>
      <div className="container">
        <div className="banner">
          <Banner />
        </div>
        <div className="sitemap">
          <Navbar />
        </div>
        <main className="mainContent">{children}</main>
      </div>
    </div>
  );
}

