import React from "react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
function IconComponentMain() {
  return (
    <div className="d-none d-lg-flex flex-column align-items-center okk">
      <IconComponent
        icon={<GoLocation size={20} color="#DB4437" />}
        name="Remote"
      />
      <IconComponent
        icon={<FaTwitter color="#1DA1F2" size={20} />}
        name="kojoswic"
        link="https://twitter.com/kojoswic"
      />
      <IconComponent
        icon={<FaLinkedin color="#2867B2" size={20} />}
        name="agyemangduahc"
        link="https://www.linkedin.com/in/agyemangduah/"
      />
      <IconComponent
        icon={<FaGithub size={20} color="white" />}
        name="codekojo"
        link="https://github.com/codekojo"
      />
      <IconComponent
        icon={<AiOutlineMail size={20} color="white" />}
        name="codewithkojo@gmail.com"
        link="mailto:codewithkojo@gmail.com"
      />
      <div
        style={{ width: "0.1rem", backgroundColor: "grey", height: "150px" }}
      ></div>
    </div>
  );
}

export default IconComponentMain;

function IconComponentLg() {
  return (
    <div className="d-lg-none d-flex justify-content-around w-50 container pt-5">
      <IconComponent
        icon={<GoLocation size={20} color="#DB4437" />}
        name="Remote"
      />
      <IconComponent
        icon={<FaTwitter color="#1DA1F2" size={20} />}
        name="kojoswic"
        link="https://twitter.com/kojoswic"
      />
      <IconComponent
        icon={<FaLinkedin color="#2867B2" size={20} />}
        name="agyemangduahc"
        link="https://www.linkedin.com/in/agyemangduah/"
      />
      <IconComponent
        icon={<FaGithub size={20} color="white" />}
        name="codekojo"
        link="https://github.com/codekojo"
      />
      <IconComponent
        icon={<AiOutlineMail size={20} color="white" />}
        name="codewithkojo@gmail.com"
        link="mailto:codewithkojo@gmail.com"
      />
    </div>
  );
}

export { IconComponentLg };

function IconComponent({ icon, link }) {
  return (
    <div className="icons__set">
      <a href={link} target="_blank" rel="noreferrer">
        <p className="icons__title ">
          <span>{icon}</span>
        </p>
      </a>
    </div>
  );
}
