import { React, useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import intro_pic from "../images/intro_pic.png";
import { BiHomeHeart } from "react-icons/bi";
import { TbMoodSmileBeam } from "react-icons/tb";
import { BsPersonWorkspace } from "react-icons/bs";
import { SiKnowledgebase } from "react-icons/si";
import { ImCheckmark2 } from "react-icons/im";
import { BsFillSendPlusFill } from "react-icons/bs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-24">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0 flex items-center">
              <img
                className="h-16 w-16 shadow-md rounded-full"
                src={intro_pic}
                alt="Logo"
              />
              <h1 className="ml-3 font-semibold text-black">Anshika Paliwal</h1>
            </div>
            <div className="flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-expanded="false"
              >
                {isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center gap-x-4">
                <Link to="home" smooth={true} duration={500}>
                  <motion.a
                    href="/home"
                    className="active px-3 py-2 rounded-full text-sm font-medium text-black hover:text-white hover:bg-rose-600 focus:outline-none focus:text-white focus:bg-rose-600 transition ease-in-out"
                    whileTap={{ scale: 0.75 }}
                  >
                    <span className="border-black">
                      <BiHomeHeart className="mr-2 pb-1 inline text-2xl text-gray-600" />
                      Home
                    </span>
                  </motion.a>
                </Link>
                <Link to="about" smooth={true} duration={500}>
                  <a
                    href="/about"
                    className="active px-3 py-2 rounded-full text-sm font-medium text-black hover:text-white hover:bg-rose-600 focus:outline-none focus:text-white focus:bg-rose-600 transition ease-in-out"
                  >
                    <TbMoodSmileBeam className="mr-2 pb-1 inline text-2xl text-gray-600" />
                    About
                  </a>
                </Link>
                <Link to="skills" smooth={true} duration={500}>
                  <a
                    href="/skills"
                    className="active px-3 py-2 rounded-full text-sm font-medium text-black hover:text-white hover:bg-rose-600 focus:outline-none focus:text-white focus:bg-rose-600 transition ease-in-out"
                  >
                    <BsPersonWorkspace className="mr-2 pb-1 inline text-2xl text-gray-600" />
                    Skills
                  </a>
                </Link>
                <Link to="projects" smooth={true} duration={500}>
                  <a
                    href="/projects"
                    className="active px-3 py-2 rounded-full text-sm font-medium text-black hover:text-white hover:bg-rose-600 focus:outline-none focus:text-white focus:bg-rose-600 transition ease-in-out"
                  >
                    <SiKnowledgebase className="mr-2 pb-1 inline text-2xl text-gray-600" />
                    Projects
                  </a>
                </Link>
                <Link to="experience" smooth={true} duration={500}>
                  <a
                    href="/experience"
                    className="active px-3 py-2 rounded-full text-sm font-medium text-black hover:text-white hover:bg-rose-600 focus:outline-none focus:text-white focus:bg-rose-600 transition ease-in-out"
                  >
                    <ImCheckmark2 className="mr-2 pb-1 inline text-2xl text-gray-600" />
                    Experience
                  </a>
                </Link>
                <Link to="contact" smooth={true} duration={500}>
                  <a
                    href="/contact"
                    className="active px-3 py-2 rounded-full text-sm font-medium text-black hover:text-white hover:bg-rose-600 focus:outline-none focus:text-white focus:bg-rose-600 transition ease-in-out"
                  >
                    <BsFillSendPlusFill className="mr-2 pb-1 inline text-2xl text-gray-600" />
                    Contact
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <hr />
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="home" smooth={true} duration={500}>
                <a
                  href="/home"
                  className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-white hover:bg-rose-600 focus:outline-none focus:text-white focus:bg-rose-600"
                >
                  Home
                </a>
              </Link>
              <Link to="about" smooth={true} duration={500}>
                <a
                  href="/about"
                  className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-white hover:bg-rose-600 focus:outline-none focus:text-white focus:bg-rose-600"
                >
                  About
                </a>
              </Link>
              <Link to="skills" smooth={true} duration={500}>
                <a
                  href="/skills"
                  className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-white hover:bg-rose-600 focus:outline-none focus:text-white focus:bg-rose-600"
                >
                  Skills
                </a>
              </Link>
              <Link to="projects" smooth={true} duration={500}>
                <a
                  href="/projects"
                  className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-white hover:bg-rose-600 focus:outline-none focus:text-white focus:bg-rose-600"
                >
                  Projects
                </a>
              </Link>
              <Link to="experience" smooth={true} duration={500}>
                <a
                  href="/experience"
                  className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-white hover:bg-rose-600 focus:outline-none focus:text-white focus:bg-rose-600"
                >
                  Experience
                </a>
              </Link>
              <Link to="contact" smooth={true} duration={500}>
                <a
                  href="/contact"
                  className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-white hover:bg-rose-600 focus:outline-none focus:text-white focus:bg-rose-600"
                >
                  Contact
                </a>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
