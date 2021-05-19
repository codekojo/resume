import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { srConfig } from "../../config";
import sr from "../../utils/sr";
import usePrefersReducedMotion from "../../hooks/usePrefersReducedMotion";

const email = "codewithkojo@gmail.com";

const StyledContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }
  .overline {
    display: block;
    margin-bottom: 20px;
    color: #61e786;
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;
    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }
    &:after {
      display: none;
    }
  }
  .title {
    font-size: clamp(40px, 5vw, 60px);
  }
`;

const Contact = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <footer className="contact mx-auto" style={{ height: "80vh" }}>
      <StyledContactSection id="contact" ref={revealContainer}>
        <h2 className="numbered-heading overline">What’s Next?</h2>

        <h2 className="projex text-white ">Get In Touch</h2>

        <p className="user__info text-white">
          Although I'm not currently looking for any new opportunities, my inbox
          is always open. Whether you have a question or just want to say hi,
          I'll try my best to get back to you!
        </p>

        <a className="links mt-5 px-4 text-white" href={`mailto:${email}`}>
          Say Hello
        </a>
      </StyledContactSection>
    </footer>
  );
};

export default Contact;
