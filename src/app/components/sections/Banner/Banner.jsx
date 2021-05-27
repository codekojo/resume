import React, { useEffect, useRef } from "react";
import { srConfig } from "../../config";
import sr from "../../utils/sr";
import usePrefersReducedMotion from "../../hooks/usePrefersReducedMotion";
import swicman from "../../../../assets/swicman1.jpg";
function Banner() {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }
    sr.reveal(revealContainer.current, srConfig());
  }, [prefersReducedMotion]);

  return (
    <section className="py-5 banner-section">
      <div className="row mr-0 ml-0">
        <div className="col-10 col-lg-3 px-5 py-5 mx-auto">
          <img
            className="img-fluid banner-img"
            src={swicman}
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
          <p className="user__info">
            I’m a remote-based software engineer who has passion for building
            web application and cross-platform mobile apps. I have passion for
            coding and creating digital experiences. I am an avid music lover
            and listener
            <br />
            <br />
            Skilled in Cross-Platform Mobile App Development( using React Native
            and Flutter), Backend Development (NodeJS, Express, MongoDB,
            Firebase), Frontend Development (React). Strong engineering
            professional with Btech. Computer Science & Engineering focused in
            Software Engineering.
            <br />
          </p>
        </div>
      </div>
    </section>
  );
}

export default Banner;
