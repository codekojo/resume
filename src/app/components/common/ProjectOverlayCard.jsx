import React from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";

function ProjectOverlayCard({
  title,
  desc,
  link,
  year,
  imgBackground,
  tech,
  github,
  external,
}) {
  const liveLink = external && external !== github ? external : null;
  const metaItems = [year, ...(tech || [])].filter(Boolean);

  return (
    <StyledProject>
      <div className="project-header">
        <div className="project-title-row">
          <h3 className="project-title">
            <span className="mon">{title}</span>
          </h3>

          <div className="project-links">
            <a
              href={link}
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View project
            </a>
            {github && (
              <a
                href={github}
                className="project-link project-link--icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            )}
            {liveLink && (
              <a
                href={liveLink}
                className="project-link project-link--icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="External link"
              >
                <GoLinkExternal />
              </a>
            )}
          </div>
        </div>

        {metaItems.length > 0 && (
          <p className="project-meta">
            {metaItems.map((item, i) => (
              <React.Fragment key={item}>
                {i > 0 && <span className="project-meta__sep">·</span>}
                <span>{item}</span>
              </React.Fragment>
            ))}
          </p>
        )}

        <p className="project-description">{desc}</p>
      </div>

      <a
        href={link}
        className="project-visual-link"
        target="_blank"
        rel="noopener noreferrer"
        aria-hidden="true"
        tabIndex={-1}
      >
        <div className="project-visual">
          {imgBackground ? (
            <img src={imgBackground} alt="" />
          ) : (
            <div className="project-visual__placeholder">{title.charAt(0)}</div>
          )}
        </div>
      </a>
    </StyledProject>
  );
}

export default ProjectOverlayCard;

const StyledProject = styled.li`
  position: relative;
  list-style: none;
  display: flex;
  flex-direction: column;
  text-align: left;

  @media (prefers-reduced-motion: no-preference) {
    &:hover .project-visual,
    &:focus-within .project-visual {
      transform: translateY(-5px);
      border-color: rgba(97, 231, 134, 0.45);
    }
  }

  .project-header {
    margin-bottom: 1rem;
  }

  .project-title-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 0.35rem;
  }

  .project-title {
    margin: 0;
    font-size: 1.125rem;
    color: white;
    min-width: 0;
  }

  .project-meta {
    margin: 0 0 0.65rem;
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);
    color: #61e786;
    line-height: 1.5;
  }

  .project-meta__sep {
    margin: 0 0.4rem;
    color: rgba(255, 255, 255, 0.35);
  }

  .project-description {
    margin: 0 0 0.75rem;
    font-family: "Source Code Pro", monospace;
    color: rgba(255, 255, 255, 0.75);
    font-size: 0.875rem;
    line-height: 1.5;
  }

  .project-links {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    flex-shrink: 0;
  }

  .project-link {
    font-family: "Caveat", cursive;
    font-size: 1rem;
    font-weight: bold;
    color: #61e786;
    text-decoration: none;
    border-bottom: 1px solid rgba(97, 231, 134, 0.4);
    padding-bottom: 1px;
    transition: color 0.15s ease, border-color 0.15s ease;

    &:hover {
      color: white;
      border-color: white;
    }
  }

  .project-link--icon {
    display: flex;
    align-items: center;
    border-bottom: none;
    padding-bottom: 0;
    font-size: 1.1rem;
    opacity: 0.9;

    &:hover {
      opacity: 1;
    }
  }

  .project-visual-link {
    text-decoration: none;
    display: block;
  }

  .project-visual {
    aspect-ratio: 4 / 3;
    border-radius: var(--border-radius);
    overflow: hidden;
    background-color: #1a1a1a;
    border: 1px solid rgba(255, 255, 255, 0.15);
    box-shadow: 0 10px 30px -15px var(--navy-shadow);
    transition: var(--transition);

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      display: block;
    }
  }

  .project-visual__placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.2);
    background: linear-gradient(145deg, #1a1a1a 0%, #2a2a2a 100%);
  }
`;
