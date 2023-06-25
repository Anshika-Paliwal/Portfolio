import html from "../images/html.jpeg";
import css3 from "../images/css3.png";
import javascript from "../images/javascript.png";
import cpp from "../images/cpp.png";
import firebase from "../images/firebase.png";
import react from "../images/react.png";
import redux from "../images/redux.png";
import tailwindcss from "../images/tailwindcss.png";
import nodejs from "../images/nodejs.png";
import github from "../images/github.png";

const Skills = () => {
  return (
    <>
      <div className="p-6 lg:p-12">
        <p className="m-4 pt-6 lg:pt-10 font-bold tracking-wide text-3xl md:text-3xl lg:text-4xl text-rose-600 text-center">
          SKILLS
        </p>
        <p className="m-4 font-bold tracking-wide text-xl md:text-2xl lg:text-2xl text-gray-800 text-center">
          LANGUAGES AND TOOLS
        </p>
      </div>

      <div className="flex items-center justify-center">
        <div className="grid grid-cols-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-4">
          <img
            src={html}
            alt="HTML Logo"
            className="w-20 h-20 lg:w-32 lg:h-32"
          />
          <img
            src={css3}
            alt="CSS Logo"
            className="w-20 h-20 lg:w-28 lg:h-28 lg:pt-3"
          />
          <img
            src={javascript}
            alt="JavaScript Logo"
            className="w-20 h-20 lg:w-32 lg:h-32"
          />
          <img src={cpp} alt="C++ Logo" className="w-20 h-20 lg:w-32 lg:h-32" />
          <img
            src={firebase}
            alt="Firebase"
            className="w-16 h-20 lg:w-28 lg:h-32"
          />
        </div>
      </div>

      <div className="py-4 pt-6 lg:pt-12">
        <p className="m-4 font-bold tracking-wide text-xl md:text-2xl lg:text-2xl text-gray-800 text-center">
          LIBRARIES AND FRAMEWORK
        </p>
      </div>
      <div className="flex items-center justify-center">
        <div className="grid justify-items-center grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
          <img
            src={react}
            alt="React Logo"
            className="w-26 h-20 lg:w-38 lg:h-32"
          />
          <img
            src={redux}
            alt="Redux Logo"
            className="w-20 h-20 lg:w-32 lg:h-32"
          />
          <img
            src={tailwindcss}
            alt="TailwindCSS Logo"
            className="w-20 h-20 lg:w-32 lg:h-32"
          />
        </div>
      </div>

      <div className="py-4 pt-6 lg:pt-12">
        <p className="m-4 font-bold tracking-wide text-xl md:text-2xl lg:text-2xl text-gray-800 text-center">
          OTHER
        </p>
      </div>
      <div className="flex items-center justify-center">
        <div className="grid justify-items-center grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
          <img
            src={nodejs}
            alt="NodeJS Logo"
            className="w-20 h-20 lg:w-32 lg:h-32"
          />
          <img
            src={github}
            alt="GitHub Logo"
            className="w-20 h-20 lg:pt-1 lg:w-24 lg:h-24"
          />
        </div>
      </div>

      <div className="flex items-center">
        <div className="flex-1 h-0.5 bg-gray-300 mx-60"></div>
      </div>
    </>
  );
};

export default Skills;
