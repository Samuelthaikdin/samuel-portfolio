import React from "react";
import Link from "next/link";

const ProjectSection = () => {
  return (
    <div>
      <div>
        <h3 className="text-3xl py-1 text-white text-center">Projects</h3>
      </div>
      <div className="lg:flex gap-10">
        <div className="text-center shadow-lg p-10 rounded-xl mt-10 bg-white flex-1 transition duration-500 hover:scale-110 cursor-pointer">
          <Link href="./selfCheckout">
            <p className="text-gray-500 pt-3"> UX CASE STUDY</p>
            <h3 className="text-xl font-bold pt-8 pb-2  ">
              Self-Checkouts at The Univeristy of Toronto’s Dining Halls.
            </h3>
            <p className="py-2  ">
              Implementing self-checkouts at the Univerity of Toronto’s dining
              halls
            </p>
            <h4 className="py-4 text-teal-700">UX Research and Prototyping</h4>
          </Link>
        </div>
        <div className="text-center shadow-lg p-10 rounded-xl mt-10 bg-white flex-1 transition duration-500 hover:scale-110 cursor-pointer">
          <Link href="./emojifypage">
            <p className="text-gray-500 pt-3"> WEB APPLICATION</p>

            <h3 className="text-xl font-bold pt-8 pb-2  ">Emojify</h3>
            <p className="py-2">
              A Fun and Immersive Way to Generate a Spotify Playlist Through
              Emojis
            </p>
            <h4 className="py-4 text-teal-700">HTML/CSS/React.JS/Figma</h4>
          </Link>
        </div>
        <div className="text-center shadow-lg p-10 rounded-xl mt-10 bg-white flex-1 transition duration-500 hover:scale-110 cursor-pointer">
          <Link href="./boardgamepage">
            <p className="text-gray-500 pt-3"> UX/UI RESEARCH</p>

            <h3 className="text-xl font-bold pt-8 pb-2  ">
              Prototyping a Board Game
            </h3>
            <p className="py-2">
              Developing and Designing a Board game base on User Research
            </p>
            <h4 className="py-4 text-teal-700">UX Researach and Prototyping</h4>
          </Link>
        </div>
      </div>
      {/*2nd Project section */}
      <div className="flex-1 ">
        <div className="text-center shadow-lg p-10 rounded-xl mt-10 bg-white flex justify-center  transition duration-500 hover:scale-110 cursor-pointer">
          <Link href="./dininghallresearch">
            <p className="text-gray-500 pt-3"> UX RESEARCH</p>
            <h3 className="text-xl font-bold pt-8 pb-2  ">
              User Research on Campus Dining Hall
            </h3>
            <p className="py-2  ">
              Research on Student's Experience with the Campus Dinning Services
            </p>
            <h4 className="py-4 text-teal-700">UX Research and Prototyping</h4>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
