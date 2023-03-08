import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { MdOutlineAlternateEmail } from "react-icons/md";

const Index = () => {
  return (
    <div className="text-center p-10 py-10">
      <h2 className=" text-6xl py-2 text-white">
        Hello, I'm{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-violet-500 to-pink-500">
          Samuel
        </span>
      </h2>
      <h3 className="py-2 text-white text-3xl">
        an aspiring{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-violet-500 to-pink-500">
          Web Devloper & UX/UI Designer{" "}
        </span>
      </h3>
      <p className="text-gray-200 max-w-xl mx-auto text-lg ">
        I am currently an undergraduate student at the{" "}
        <a href="https://www.utoronto.ca/" className="underline">
          Univeristy of Toronto,
        </a>{" "}
        seeking opportunities in UX/UI design and web development.
      </p>
      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
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
  );
};

export default Index;
