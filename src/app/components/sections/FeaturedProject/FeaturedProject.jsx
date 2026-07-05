import React from "react";
import styled from "styled-components";
import ProjectOverlayCard from "../../common/ProjectOverlayCard";
import easyrent from "../../../../assets/easyrent.png";
import highschool from "../../../../assets/highschool.png";
import sophie from "../../../../assets/sophie.png";
import self from "../../../../assets/self.png";
import vsimg from "../../../../assets/vsimg.png";
import renter from "../../../../assets/renterss.png";
import twitter from "../../../../assets/twitter.png";
import spotify from "../../../../assets/spotify.png";
import ig from "../../../../assets/ig.png";
import cakey from "../../../../assets/cakey.png";
import music from "../../../../assets/music.png";
import photography from "../../../../assets/photography.png";
import beselina from "../../../../assets/beselina.png";
import habitpattern from "../../../../assets/habitpatter.png";

const CATEGORIES = [
  {
    label: "Mobile",
    projects: [
      {
        key: "mobile-beselina",
        title: "Beselina",
        year: "2025",
        desc: "AI-powered shared journal app for mindfulness, reflection, and partner journaling. Live on iOS & Android.",
        link: "https://apps.apple.com/us/app/beselina-handwritten-journal/id6744127162",
        external: "https://apps.apple.com/us/app/beselina-handwritten-journal/id6744127162",
        imgBackground: beselina,
        tech: ["React Native", "Mobile"],
      },
      {
        key: "mobile-habitpattern",
        title: "HabitPattern",
        year: "2026",
        desc: "AI habit tracker using behavioral neuroscience, heatmaps, and real-time Circuit Breaker interventions.",
        link: "https://apps.apple.com/us/app/habitpattern-ai-habit-tracker/id6756988383",
        external: "https://apps.apple.com/us/app/habitpattern-ai-habit-tracker/id6756988383",
        imgBackground: habitpattern,
        tech: ["AI", "React Native", "Mobile"],
      },
      {
        key: "mobile-easyrent",
        title: "Easy Rent Ghana",
        year: "2022",
        desc: "Real estate app with a growing userbase. Live on the App Store.",
        link: "https://apps.apple.com/gh/app/easy-rent-ghana-homes-more/id1658827141",
        external: "https://apps.apple.com/gh/app/easy-rent-ghana-homes-more/id1658827141",
        imgBackground: easyrent,
        tech: ["React Native", "Mobile"],
      },
      {
        key: "mobile-twitter",
        title: "Twitter Clone",
        year: "2020",
        desc: "React Native clone with navigation.",
        link: "https://github.com/codekojo/twitter-Clone",
        github: "https://github.com/codekojo/twitter-Clone",
        imgBackground: twitter,
        tech: ["React Native"],
      },
      {
        key: "mobile-spotify",
        title: "Spotify Clone",
        year: "2020",
        desc: "React Native clone with navigation and animation.",
        link: "https://github.com/codekojo/spotify-clone",
        github: "https://github.com/codekojo/spotify-clone",
        imgBackground: spotify,
        tech: ["React Native"],
      },
      {
        key: "mobile-instagram",
        title: "Instagram Clone",
        year: "2019",
        desc: "React Native clone with navigation.",
        link: "https://github.com/codekojo/Instagram-Clone",
        github: "https://github.com/codekojo/Instagram-Clone",
        imgBackground: ig,
        tech: ["React Native"],
      },
    ],
  },
  {
    label: "Web",
    projects: [
      {
        key: "web-admissions",
        title: "High School Admissions",
        year: "2023",
        desc: "Admissions portal used by 25+ schools.",
        link: "https://unitechsolutions.online/",
        external: "https://unitechsolutions.online/",
        imgBackground: highschool,
        tech: ["React", "Web"],
      },
      {
        key: "web-sofft",
        title: "Immigration Web App for A Client",
        year: "2023",
        desc: "Web application that helps people settle in Canada.",
        link: "https://sofftlandinginternational.com/",
        external: "https://sofftlandinginternational.com/",
        imgBackground: sophie,
        tech: ["React", "Web"],
      },
      {
        key: "web-renters",
        title: "Renters Property",
        year: "2021",
        desc: "React app for searching properties on the real estate market.",
        link: "https://angry-brown-e7651e.netlify.app",
        external: "https://angry-brown-e7651e.netlify.app",
        imgBackground: renter,
        tech: ["React"],
      },
      {
        key: "web-vscode",
        title: "VS Code Theme",
        year: "2020",
        desc: "Minimal dark blue theme on the Visual Studio Marketplace.",
        link: "https://marketplace.visualstudio.com/items?itemName=SwiclyMo.swicly",
        external: "https://marketplace.visualstudio.com/items?itemName=SwiclyMo.swicly",
        imgBackground: vsimg,
        tech: ["VS Code", "Web"],
      },
      {
        key: "web-cakey",
        title: "Cakey Cake",
        year: "2020",
        desc: "React app for a cake company.",
        link: "https://peaceful-colden-9338c9.netlify.app/",
        external: "https://peaceful-colden-9338c9.netlify.app/",
        github: "https://github.com/codekojo/cakey-cake",
        imgBackground: cakey,
        tech: ["React", "Bootstrap"],
      },
      {
        key: "web-capture",
        title: "Capture Portfolio",
        year: "2021",
        desc: "Photography portfolio with Framer Motion animations.",
        link: "https://naughty-hamilton-0dcc3b.netlify.app/",
        external: "https://naughty-hamilton-0dcc3b.netlify.app/",
        github: "https://github.com/codekojo/capture-site",
        imgBackground: photography,
        tech: ["React", "Framer Motion"],
      },
      {
        key: "web-music",
        title: "Music App",
        year: "2020",
        desc: "Music library app powered by the Napster API.",
        link: "https://objective-sammet-5d2d1e.netlify.app",
        external: "https://objective-sammet-5d2d1e.netlify.app",
        github: "https://github.com/codekojo/music-react",
        imgBackground: music,
        tech: ["React", "Napster API"],
      },
      {
        key: "web-photo",
        title: "Photography Portfolio",
        year: "2019",
        desc: "Elegant photography portfolio built with React and Sass.",
        link: "https://hungry-goldwasser-549f9d.netlify.app",
        external: "https://hungry-goldwasser-549f9d.netlify.app",
        github: "https://github.com/codekojo/photography-portfolio",
        tech: ["React", "Sass"],
      },
      {
        key: "web-advice",
        title: "Advice App",
        year: "2021",
        desc: "Fetches random advice from an API on each click.",
        link: "https://awesome-mcclintock-4321d0.netlify.app/",
        external: "https://awesome-mcclintock-4321d0.netlify.app/",
        github: "https://github.com/codekojo/Advice-Generator-React",
        tech: ["React", "Axios"],
      },
      {
        key: "web-jsconf",
        title: "JS Conf",
        year: "2019",
        desc: "Conference site with schedule and events.",
        link: "https://github.com/codekojo/jsconf",
        github: "https://github.com/codekojo/jsconf",
        tech: ["React", "Bootstrap"],
      },
      {
        key: "web-landing",
        title: "Simple Landing Page",
        year: "2019",
        desc: "Clean landing page built with React and Bootstrap.",
        link: "https://elegant-hamilton-df98e7.netlify.app/",
        external: "https://elegant-hamilton-df98e7.netlify.app/",
        github: "https://github.com/codekojo/landingpage-jsconf",
        tech: ["React", "Bootstrap"],
      },
      {
        key: "web-travel",
        title: "Travel Site",
        year: "2020",
        desc: "Travel site built with React and Bootstrap.",
        link: "https://gracious-benz-425308.netlify.app/",
        external: "https://gracious-benz-425308.netlify.app/",
        github: "https://github.com/codekojo/travel-site",
        tech: ["React", "Bootstrap"],
      },
    ],
  },
  {
    label: "AI",
    projects: [
      {
        key: "ai-selfdriving",
        title: "Self Driving Car Using AI",
        year: "2021",
        desc: "Thesis project using CNN and computer vision. Published research.",
        link: "https://www.researchgate.net/publication/351736176_Full_Self_Driving_Car_Using_Computer_Vision_and_Artificial_Intelligence",
        external: "https://www.researchgate.net/publication/351736176_Full_Self_Driving_Car_Using_Computer_Vision_and_Artificial_Intelligence",
        imgBackground: self,
        tech: ["CNN", "Computer Vision", "AI"],
      },
    ],
  },
];

function FeaturedProject() {
  return (
    <section id="projects" className="pt-5 pb-5 fPro projects-section">
      <h2 className="text-white projex">Projects</h2>
      <StyledProjectsSection>
        {CATEGORIES.map((category) => (
          <div key={category.label} className="project-category">
            <h3 className="project-category__label">{category.label}</h3>
            <ul className="projects-grid">
              {category.projects.map((project) => (
                <ProjectOverlayCard key={project.key} {...project} />
              ))}
            </ul>
          </div>
        ))}
      </StyledProjectsSection>
    </section>
  );
}

export default FeaturedProject;

const StyledProjectsSection = styled.div`
  width: 80%;
  max-width: 1200px;
  margin: 4rem auto 0;

  .project-category {
    margin-bottom: 5rem;
  }

  .project-category:last-child {
    margin-bottom: 0;
  }

  .project-category__label {
    font-family: "Source Code Pro", monospace;
    font-size: 1.75rem;
    font-weight: 600;
    color: #61e786;
    margin-bottom: 2rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid rgba(97, 231, 134, 0.45);
    display: inline-block;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    text-align: left;
  }

  .projects-grid {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    row-gap: 4rem;
    column-gap: 1.5rem;

    @media (max-width: 1080px) {
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }
  }
`;
