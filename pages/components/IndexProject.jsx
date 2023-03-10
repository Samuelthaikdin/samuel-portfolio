import React from "react";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";

const IndexProject = () => {
  return (
    <div>
      <div className="bg-square-blue rounded-2xl p-10">
        <div>
          <h3 className="font-bold md:rounded-2xl p-10  text-3xl  text-white text-center">
            Projects
          </h3>
        </div>
        <div className="lg:flex gap-10 ">
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
              <h4 className="py-4 text-teal-700">
                UX Research and Prototyping
              </h4>
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
              <h4 className="py-4 text-teal-700">HTML/CSS/React.JS</h4>
            </Link>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl mt-10 bg-white flex-1 transition duration-500 hover:scale-110 cursor-pointer">
            <Link href="./dininghallresearch">
              <p className="text-gray-500 pt-3"> UX RESEARCH</p>
              <h3 className="text-xl font-bold pt-8 pb-2  ">
                User Research on Campus Dining Hall
              </h3>
              <p className="py-2  ">
                Research on Student's Experience with the Campus Dinning
                Services
              </p>
              <h4 className="py-4 text-teal-700">
                UX Research and Prototyping
              </h4>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center mt-10 lg:mt-16">
          <Link href="./projects">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full my-5 float-right cursor-pointer">
              <svg
                className="float-right h-7 px-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
              <span> View All Projects</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IndexProject;
