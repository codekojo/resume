import React from "react";

function FeaturedCard({ img, projectName, desc }) {
  return (
    <div className="card mx-auto" style={{ width: "70%" }}>
      <img class="card-img-top" src={img} alt="Card cap" />
      <div class="card-body">
        <h5 class="card-title">{projectName}</h5>
        <p class="card-text mx-auto">{desc}</p>
        <a href="#link" class="links">
          View Project
        </a>
      </div>
    </div>
  );
}

export default FeaturedCard;
