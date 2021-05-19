import React, { useEffect, useRef } from "react";
import { srConfig } from "../../config";
import sr from "../../utils/sr";
import usePrefersReducedMotion from "../../hooks/usePrefersReducedMotion";

function Banner() {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <section className="py-5 banner-section">
      <div className="row mr-0 ml-0">
        <div className="col-10 col-lg-3 px-5 py-5 mx-auto">
          <img
            className="img-fluid banner-img"
            src="https://images.unsplash.com/photo-1515364310571-7b89b0bc681c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bmFrZWR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            alt="new profile"
          />
        </div>
        <div
          className="col-10 col-lg-9 px-4 py-5 text-left mx-auto border rounded"
          ref={revealContainer}
        >
          <h2 className="user__name">Hi, I'm CLINTON.</h2>
          <h3 className="user__title text-muted">
            Web and Mobile Developer & AI Enthusiast.
          </h3>
          <p className="user__info ">
            I'm a Boston-based software engineer who specializes in building
            (and occasionally designing) exceptional digital experiences.
            Currently, I'm an engineer at Upstatement focused on building
            accessible, human-centered products.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, non
            odio sint tempora totam quidem ullam repudiandae nesciunt! Laborum
            quod perferendis officia voluptatem, voluptas neque, earum
            <br />
          </p>
        </div>
      </div>
    </section>
  );
}

export default Banner;

function IconComponent({ icon, name }) {
  return (
    <div className="icons__set ">
      <p className="icons__title ">
        <span>{icon}</span> {name}
      </p>
    </div>
  );
}
