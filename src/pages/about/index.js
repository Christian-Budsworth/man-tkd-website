// Step 1: Import your component
import * as React from "react";
import Layout from '../../component/layout'
import fundraising from "../../images/about_us/mantkd_fundraising.jpg";
import coaches from "../../images/about_us/mantkd_coaches.jpg";
import '../../component/styles/about-us.css'
const text = {
  title: "About Us",
  headers: {
    header1: "Who we are",
    header2: "About manTKD",
    header3: "Meet the coaches",
  },
  body: {
    body1:
      "Mantkd Taekwondo Academy is a grass roots club, working in local communities to provide access to affordable Taekwondo sessions for all. Mantkd's chief instructor is Master Bilal and began learning Taekwondo in 1984 whilst living in Cumbria. Bilal Achieved his 1st Dan in 1988 and subsequently won, 'The Redrose Trophy' for excellence in Taekwondo. He is currently an International Poomsae judge, approved examiner and competes/judges at Poomsae competitions here in the UK and internationally. He runs Mantkd Taekwondo Academy, along with its dedicated instructors and students at various venues around Manchester.",
    body2:
      "We are a 'British Taekwondo' club. British Taekwondo was established in 1982 and is the National Governing Body for World Taekwondo in the United Kingdom. BT is a member of the WT, British Olympic Association (BOA), European Taekwondo Union (ETU) and recognised by UK Sport, Sport England: the government agency for High Performance Sport.",
    contactText: "If you would like to know more information please contact:",
    emailContact: "info@mantkd.co.uk",
    mobileContact: "Mob: 07946 650820",
  },
};

const links = {
  classes: {
    href: "#",
    text: "Please see classes for the venues available!",
  },
  email: {
    href: "mailto:info@mantkd.co.uk",
    text: "info@mantkd.co.uk",
  },
  mobile: {
    href: "tel:07946650820",
    text: "07946 650 820",
  },
};

const images = {
  manTKD_fundraising: {
    location: fundraising,
    alt: "Master Bilal standing inbetween two tiger mascots",
  },
  manTKD_coaches: {
    location: coaches,
    alt: "man T K D coaches, from left to right:",
  },
};
// Step 2: Define your component
const AboutPage = () => {
    return (
        <Layout pageTitle="About Us">
          <h1>{text.title}</h1>
          <h2>{text.headers.header1}</h2>
          <p>{text.body.body1}</p>
          <img src={images.manTKD_fundraising.location} alt={images.manTKD_fundraising.alt}/>
          <h2>{text.headers.header2}</h2>
          <p>{text.body.body2}</p>
          <h2>{text.headers.header3}</h2>
          <img src={images.manTKD_coaches.location} alt={images.manTKD_coaches.alt}/>
          
        </Layout>
      )
};
// Step 3: Export your component
export default AboutPage;
