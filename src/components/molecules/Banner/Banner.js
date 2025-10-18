import * as React from "react";
import bannerImage from "../../../images/home/banner.jpg";
import manTKDLogo from "../../../images/home/mantkd_logo.png";
import Logo from "../../atoms/Logo/Logo";
import "./banner.css";

export default function Banner() {
  return (
    <div className="topbar">
      <Logo src={manTKDLogo} />
      <img className="image background" src={bannerImage} alt="Banner background" />
    </div>
  );
}

