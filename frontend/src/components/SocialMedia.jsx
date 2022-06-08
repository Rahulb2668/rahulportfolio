import React from "react";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";
import { RiLinkedinLine } from "react-icons/ri";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://wa.me/971569529506">
        <BsWhatsapp color="green" />
      </a>
    </div>
    <div>
      <BsInstagram color="#fbad50 " />
    </div>
    <div>
      <a href="https://www.linkedin.com/in/rahulb-2568/">
        <RiLinkedinLine color="blue" />
      </a>
    </div>
  </div>
);

export default SocialMedia;
