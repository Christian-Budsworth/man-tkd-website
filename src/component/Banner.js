import * as React from "react";
import bannerImage from "../images/home/banner.jpg"
import manTKDLogo from "../images/home/mantkd_logo.png"
import "./styles/banner.css"

export default function Banner() {
  return (
    <div className="banner">
    <img className="image logo" src={manTKDLogo}/>
    <img className="image background" src={bannerImage}/>
    </div>
  );
}


