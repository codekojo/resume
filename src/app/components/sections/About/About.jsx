import React, { useEffect, useRef } from "react";
import { srConfig } from "../../config";
import sr from "../../utils/sr";
import usePrefersReducedMotion from "../../hooks/usePrefersReducedMotion";

function About() {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }
    sr.reveal(revealContainer.current, srConfig());
  }, [prefersReducedMotion]);
  return (
    <section id="about" className="py-5 fPro ">
      <h2 className="otherNotes">About Me</h2>
      <div className="row mr-0 ml-0 about-section-io pt-4">
        <div className="col-10 col-lg-3 px-5 py-5 mx-auto"></div>

        <div
          className="col-10 col-lg-9 px-4 py-5 text-left mx-auto border rounded"
          ref={revealContainer}
        >
          <p className="user__info text-white">
            As the youngest computer enthusiast in my household, I was the
            default teen-ag-er for troubleshooting everyone’s faulty gadgets.
            <br />
            <br />
            With time I developed a lot of interest in anything computer-related
            and eventually got good at it. So when it was time to make plans for
            College, after high school, I chose to study Computer Science and
            engineering.
            <br />
            <br />
            Circa 2017, I started my first startup. I started my first
            e-commerce store, subsequently followed by an entertainment website,
            and a website about finance. I faced many challenges throughout but
            my passion kept me focused.
            <br />
            <br />
            Today, I stand proud of the decision I took. The experiences and
            knowledge I have acquired offered me the privilege of working with a
            start-up company, assisting my friends with their projects, and
            creating futuristic ideas on my own.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
