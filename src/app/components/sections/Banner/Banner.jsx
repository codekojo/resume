import React, { useEffect, useRef } from "react";
import { srConfig } from "../../config";
import sr from "../../utils/sr";
import usePrefersReducedMotion from "../../hooks/usePrefersReducedMotion";
import swicman from "../../../../assets/swicman2.jpg";
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
    <section className="py-4 banner-section">
      <div className="banner-inner">
        <img
          className="banner-img"
          src={swicman}
          alt="Clinton Agyemang Duah"
        />
        <div className="banner-content" ref={revealContainer}>
          <h2 className="user__name">Hi, I'm Clinton.</h2>
          <h3 className="user__title text-muted">Software Engineer</h3>
          <p className="user__info">
            Software Engineer with 4+ years designing and developing production
            mobile applications, full-stack web applications, scalable software
            systems and backend services. Skilled in React Native, React,
            TypeScript, Express, and Python, with expertise in REST APIs, AWS,
            and CI/CD. Proven ability to take products from concept to
            production and deliver scalable, user-focused solutions.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Banner;
