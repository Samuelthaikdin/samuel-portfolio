import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "Projects", href: "./projects" },
    { id: 2, link: "Resume", href: "" },
  ];

  return (
    <nav className=" text-white py-10 mb-12 flex justify-between dark:text-white items-center w-full h-20">
      <h1 className="font-burtons text-3xl">
        <Link
          href="/"
          className="hover:text-cyan-500 hover:scale-105 duration-200"
        >
          <p>SD</p>
        </Link>
      </h1>

      <ul className="hidden md:flex items-center right-0">
        <li className="px-5">
          <Link
            href="/projects"
            className="hover:text-cyan-500 hover:scale-105 duration-200"
          >
            Projects
          </Link>
        </li>
        <li className="px-5">
          <a
            className="hover:text-cyan-500 hover:scale-105 duration-200"
            href="/Resume.pdf
                  "
            target={"_blank"}
          >
            Resume
          </a>
        </li>
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="pr-4 z-10 md:hidden cursor-pointer"
      >
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link, href }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link href={href}>{link}</Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
