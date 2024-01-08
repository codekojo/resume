import React from "react";
import Slider from "react-slick";
import FeaturedCard from "./FeaturedCard";
import self from "../../../../assets/self.png";
import renter from "../../../../assets/renterss.png";
import vsimg from "../../../../assets/vsimg.png";
import highschool from "../../../../assets/highschool.png";
import easyrent from "../../../../assets/easyrent.png";
import sophie from "../../../../assets/sophie.png";

function FeaturedProject() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <section id="projects" className="py-5 fPro">
      <h2 className="text-white projex">Projects</h2>
      <div className="container mt-5">
        <div className="row">
          <div className="col-11 mx-auto">
            <Slider {...settings}>
              {DATA.map((node) => (
                <FeaturedCard {...node} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}

const DATA = [
  {
    key: 10,
    img: easyrent,
    projectName: "Easy Rent Ghana",
    link: "https://apps.apple.com/gh/app/easy-rent-ghana-homes-more/id1658827141",
    desc: "This is a thriving real estate app with a growing userbase.",
  },
  {
    key: 1,
    img: self,
    projectName: "Self Driving Car Using AI",
    link: "https://www.researchgate.net/publication/351736176_Full_Self_Driving_Car_Using_Computer_Vision_and_Artificial_Intelligence",
    desc: "This is a behavioural clone of a driving car using CNN and computer vision. A thesis-based project which was done in fulfillment of my degree. ",
  },
  {
    key: 5,
    img: highschool,
    projectName: "High School Admissions",
    link: "https://unitechsolutions.online/",
    desc: "This is a high school admissions portal used by over 25+ schools in Ghana.",
  },
  {
    key: 51,
    img: sophie,
    projectName: "Immigration Web App for A Client",
    link: "https://sofftlandinginternational.com/",
    desc: "This is a web application that assist people to Settle In Canada",
  },
  {
    key: 2,
    img: renter,
    projectName: "Renters Property",
    desc: "A react based application that allows users to search for properties on the real estate market",

    link: "https://angry-brown-e7651e.netlify.app",
  },
  {
    key: 3,
    img: vsimg,
    projectName: "VS Code Theme",
    desc: "A minimal, dark blue theme for VS Code. Available on Visual Studio Marketplace",
    link: "https://marketplace.visualstudio.com/items?itemName=SwiclyMo.swicly",
  },
];

export default FeaturedProject;
