import React from "react";

function FeaturedCard({ img, projectName, desc, link }) {
  return (
    <div className="card h-100 mx-auto featured-card">
      {img ? (
        <img className="card-img-top" src={img} alt={projectName} />
      ) : (
        <div className="featured-card__placeholder" aria-hidden="true">
          {projectName.charAt(0)}
        </div>
      )}
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{projectName}</h5>
        <p className="card-text flex-grow-1">{desc}</p>
        <a
          href={link}
          target="_blank"
          className="links align-self-start"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      </div>
    </div>
  );
}

export default FeaturedCard;
