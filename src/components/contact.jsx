import React from "react";
import "./contact.css";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

const Contact = ({ textEnter, textLeave }) => {
  return (
    <div className="contact-wrapper">
      <div className="contact-text-wrapper">
        <div
          className="contact-title"
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          HAVE AN IDEA?
        </div>
        <div className="email-text">drop me an email at</div>
        <a className="email" href="mailto: dhirajworkss@gmail.com">
          dhirajworkss@gmail.com
        </a>
      </div>
      <div className="socials">
        <a href="https://www.instagram.com/dhiraz.gg/" target="_blank">
          <FaInstagram className="icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/dhiraj-poudel-8353a6244/"
          target="_blank"
        >
          <FaLinkedin className="icon" />
        </a>
        <a href="https://discord.com/users/470188304554262548" target="_blank">
          <FaDiscord className="icon" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
