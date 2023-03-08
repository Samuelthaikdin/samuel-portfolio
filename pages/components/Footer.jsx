import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { MdOutlineAlternateEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="mx-auto max-w-full px-10  py-10 text-lg text-white bg-gray-900">
      <div>
        <p>© Samuel T. Din · 2023</p>
        <div className="text-3xl flex gap-5 py-3 text-gray-600">
          <a
            href="https://github.com/Samuelthaikdin"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/samuel-thaik-din-219790213/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin />
          </a>
          <a
            href="mailto:samuelthaikdin@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <MdOutlineAlternateEmail />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
