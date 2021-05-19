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
      />
      <IconComponent
        icon={<FaLinkedin color="#2867B2" size={20} />}
        name="agyemangduahc"
      />
      <IconComponent
        icon={<FaGithub size={20} color="white" />}
        name="codekojo"
      />
      <IconComponent
        icon={<AiOutlineMail size={20} color="white" />}
        name="codewithkojo@gmail.com"
      />
      <div
        style={{ width: "0.1rem", backgroundColor: "grey", height: "150px" }}
      ></div>
    </div>
  );
}

export default IconComponentMain;

function IconComponent({ icon }) {
  return (
    <div className="icons__set">
      <p className="icons__title ">
        <span>{icon}</span>
      </p>
    </div>
  );
}
