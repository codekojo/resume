import React from "react";
import Slider from "react-slick";
import FeaturedCard from "./FeaturedCard";
import self from "../../../../assets/self.png";
import renter from "../../../../assets/renterss.png";
import vsimg from "../../../../assets/vsimg.png";

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
    key: 1,
    img: self,
    projectName: "Self Driving Car",
    link: "https://www.researchgate.net/publication/351736176_Full_Self_Driving_Car_Using_Computer_Vision_and_Artificial_Intelligence",
    desc: "This is a behavioural clone of a driving car using CNN and computer vision. A thesis-based project which was done in fulfillment of my degree. ",
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
