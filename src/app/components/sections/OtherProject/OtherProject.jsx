import React, { useState, useEffect, useRef } from "react";
import sr from "../../utils/sr";
import styled from "styled-components";
import usePrefersReducedMotion from "../../hooks/usePrefersReducedMotion";

import { CSSTransition, TransitionGroup } from "react-transition-group";
import { srConfig } from "../../config";
import { FaFolder, FaGithub } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";

const OtherProjects = () => {
  const data = DATA;

  const [showMore, setShowMore] = useState(false);
  const revealTitle = useRef(null);
  const revealArchiveLink = useRef(null);
  const revealProjects = useRef([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealTitle.current, srConfig());
    sr.reveal(revealArchiveLink.current, srConfig());
    revealProjects.current.forEach((ref, i) =>
      sr.reveal(ref, srConfig(i * 100))
    );
  }, [prefersReducedMotion]);

  const GRID_LIMIT = 6;
  const projects = data;
  const firstSix = projects.slice(0, GRID_LIMIT);
  const projectsToShow = showMore ? projects : firstSix;

  const projectInner = (nodes) => {
    const { github, external, title, tech, desc, toGithub } = nodes;

    return (
      <a href={toGithub ? github : tech} target="_blank" rel="noreferrer">
        <div className="project-inner text-left">
          <header>
            <div className="project-top">
              <div className="folder">
                <FaFolder color="black " />
              </div>
              <div className="project-links">
                {github && (
                  <a
                    href={github}
                    aria-label="GitHub Link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub color="black " />
                  </a>
                )}
                {external && (
                  <a
                    href={external}
                    aria-label="External Link"
                    className="external"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <GoLinkExternal color="black" />
                  </a>
                )}
              </div>
            </div>

            <h3 className="project-title">
              <a href={external} className="mon">
                {title}
              </a>
            </h3>

            <div className="project-description ">
              <p className="notes">{desc}</p>
            </div>
          </header>

          <footer>
            {tech && (
              <ul className="project-tech-list">
                {tech.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            )}
          </footer>
        </div>
      </a>
    );
  };

  return (
    <StyledProjectsSection>
      <h2 ref={revealTitle} className="otherNotes">
        Other Noteworthy Projects
      </h2>

      <ul className="projects-grid">
        {prefersReducedMotion ? (
          <>
            {projectsToShow &&
              projectsToShow.map((node, i) => (
                <StyledProject key={i}>{projectInner(node)}</StyledProject>
              ))}
          </>
        ) : (
          <TransitionGroup component={null}>
            {projectsToShow &&
              projectsToShow.map((node, i) => (
                <CSSTransition
                  key={i}
                  classNames="fadeup"
                  timeout={i >= GRID_LIMIT ? (i - GRID_LIMIT) * 300 : 300}
                  exit={false}
                >
                  <StyledProject
                    key={i}
                    ref={(el) => (revealProjects.current[i] = el)}
                    style={{
                      transitionDelay: `${
                        i >= GRID_LIMIT ? (i - GRID_LIMIT) * 100 : 0
                      }ms`,
                    }}
                  >
                    {projectInner(node)}
                  </StyledProject>
                </CSSTransition>
              ))}
          </TransitionGroup>
        )}
      </ul>

      <button
        className="links mt-5 px-4 text-white"
        onClick={() => setShowMore(!showMore)}
      >
        Show {showMore ? "Less" : "More"}
      </button>
    </StyledProjectsSection>
  );
};

export default OtherProjects;

const StyledProjectsSection = styled.section`
  display: flex;
  background-color: black;
  flex-direction: column;
  align-items: center;
  padding: 5rem 0;
  h2 {
    font-size: clamp(24px, 5vw, var(--fz-heading));
  }
  .archive-link {
    font-family: var(--font-mono);
    font-size: var(--fz-sm);
    &:after {
      bottom: 0.1em;
    }
  }
  .projects-grid {
    list-style: none;
    padding: 0;
    margin: 0;
    width: 80%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    grid-gap: 15px;
    position: relative;
    margin-top: 50px;
    @media (max-width: 1080px) {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }
`;

const StyledProject = styled.li`
  position: relative;
  cursor: default;
  transition: var(--transition);
  @media (prefers-reduced-motion: no-preference) {
    &:hover,
    &:focus-within {
      .project-inner {
        transform: translateY(-7px);
      }
    }
  }
  a {
    position: relative;
    z-index: 1;
  }
  .project-inner {
    box-shadow: 0 10px 30px -15px var(--navy-shadow);
    transition: var(--transition);

    &:hover,
    &:focus {
      box-shadow: 0 20px 30px -15px var(--navy-shadow);
    }
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    height: 100%;
    padding: 2rem 1.75rem;
    border-radius: var(--border-radius);
    background-color: #4995aa9d;
    transition: var(--transition);
  }
  .project-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 35px;
    .folder {
      color: var(--green);
      svg {
        width: 40px;
        height: 40px;
      }
    }
    .project-links {
      display: flex;
      align-items: center;
      margin-right: -10px;
      color: var(--light-slate);
      a {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px 7px;
        &.external {
          svg {
            width: 22px;
            height: 22px;
            margin-top: -4px;
          }
        }
        svg {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
  .project-title {
    margin: 0 0 10px;
    font-size: var(--fz-xxl);

    a {
      position: static;
      color: black;
      &:before {
        content: "";
        display: block;
        position: absolute;
        z-index: 0;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }
    }
  }
  .project-description {
    color: black;
    font-size: 17px;
    a {
      display: inline-block;
      text-decoration: none;
      text-decoration-skip-ink: auto;
      position: relative;
      transition: var(--transition);
      color: var(--green);
      &:hover,
      &:focus,
      &:active {
        color: var(--green);
        outline: 0;
        &:after {
          width: 100%;
        }
        & > * {
          color: var(--green) !important;
          transition: var(--transition);
        }
      }
      &:after {
        content: "";
        display: block;
        width: 0;
        height: 1px;
        position: relative;
        bottom: 0.37em;
        background-color: var(--green);
        transition: var(--transition);
        opacity: 0.5;
      }
    }
  }
  .project-tech-list {
    display: flex;
    align-items: flex-end;
    flex-grow: 1;
    flex-wrap: wrap;
    padding: 0;
    color: black;
    margin: 20px 0 0 0;
    list-style: none;
    li {
      font-family: var(--font-mono);
      font-size: var(--fz-xxs);
      line-height: 1.75;
      &:not(:last-of-type) {
        margin-right: 15px;
      }
    }
  }
`;

const DATA = [
  {
    title: "Twitter Clone",
    tech: ["React Native"],
    desc: "A twitter clone built in React Native with functionalities of navigation.",
    github: "https://github.com/codekojo/twitter-Clone",
    toGithub: true,
  },
  {
    title: "Spotify Clone",
    tech: ["React Native"],
    desc: "A spotify clone built in React Native with navigation and animation.",
    toGithub: true,
    github: "https://github.com/codekojo/spotify-clone",
  },
  {
    title: "Instagram Clone",
    tech: ["React Native"],
    desc: "An instagram clone built in React Native with functionalities of navigation.",
    toGithub: true,
    github: "https://github.com/codekojo/Instagram-Clone",
  },
  {
    title: "Capture Portfolio",
    tech: ["React", "Framer Motion", "Styled Components"],
    external: "https://naughty-hamilton-0dcc3b.netlify.app/",
    desc: "A web based capture portfolio website with animation framework - framer motion, built using react.js",
    toGithub: false,
    github: "https://github.com/codekojo/capture-site",
  },
  {
    title: "Music App",
    tech: ["React", "Napster API"],
    external: "https://objective-sammet-5d2d1e.netlify.app",
    desc: "A web based music app that fetches music from Napster API to be added to the library. Users can play or pause any of the songs from the library.",
    toGithub: false,
    github: "https://github.com/codekojo/music-react",
  },
  {
    title: "Photography Portfolio",
    tech: ["React", "Sass"],
    external: "https://hungry-goldwasser-549f9d.netlify.app",
    desc: "Elegant photography portfolio site built in react.js and sass",
    toGithub: false,
    github: "https://github.com/codekojo/photography-portfolio",
  },
  {
    title: "Advice App",
    tech: ["React", "Axios"],
    external: "https://awesome-mcclintock-4321d0.netlify.app/",
    desc: 'A react app that fetches random advice from an API anytime you click on "fetch advice" ',
    toGithub: false,
    github: "https://github.com/codekojo/Advice-Generator-React",
  },
  {
    title: "Cakey Cake",
    tech: ["React", "Bootstrap"],
    external: "https://peaceful-colden-9338c9.netlify.app/",
    desc: "A simple react app for a cake company",
    github: "https://github.com/codekojo/cakey-cake",
    toGithub: false,
  },
  {
    title: "JS Conf",
    tech: ["React", "Bootstrap"],
    desc: "A react application for javascript conference. It features information about the conference where users can view the schedule and events.",
    github: "https://github.com/codekojo/jsconf",
    toGithub: true,
  },
  {
    title: "Simple Landpage",
    tech: ["React", "Bootstrap"],
    external: "https://elegant-hamilton-df98e7.netlify.app/",
    desc: "A simple landing page built in react and bootstrap",
    toGithub: false,
    github: "https://github.com/codekojo/landingpage-jsconf",
  },
  {
    title: "Travel Site",
    tech: ["React", "Boostrap"],
    external: "https://gracious-benz-425308.netlify.app/",
    desc: "A travel site built in react and bootstrap",
    toGithub: false,
    github: "https://github.com/codekojo/travel-site",
  },
];
