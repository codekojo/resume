import React from "react";
import Slider from "react-slick";
import FeaturedCard from "./FeaturedCard";

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
    <section className="py-5 fPro">
      <h2 className="text-white projex ">Projects</h2>
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
    img: "https://cdn.turkishairlines.com/m/56e348843f554069/original/1400-660-jpg.jpg",
    projectName: "Self Driving Car",
    desc: "A nicer look at your GitHub profile and repository stats with data visualizations of your top languages and stars. ",
    lang: ["Next.js", "Chart.js", "GitHub API"],
  },
  {
    key: 2,
    img: "https://d2tyltutevw8th.cloudfront.net/media/image/ghana-640-1567604647.jpg",
    projectName: "VS Code Theme",
    desc: "A nicer look at your GitHub profile and repository stats with data visualizations of your top languages and stars. ",
    lang: ["Next.js", "Chart.js", "GitHub API"],
  },
  {
    key: 3,
    img: "https://cdn.getyourguide.com/img/country/565597ab57e46.jpeg/88.jpg",
    projectName: "Instagram Clone",
    desc: "A nicer look at your GitHub profile and repository stats with data visualizations of your top languages and stars. ",
    lang: ["Next.js", "Chart.js", "GitHub API"],
  },
];

export default FeaturedProject;
