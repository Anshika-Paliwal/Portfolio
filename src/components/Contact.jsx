import gals from "../images/gals.jpg";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { AiOutlineMedium } from "react-icons/ai";

const Contact = () => {
  return (
    <>
      <div className="p-6 lg:mt-10 lg:pt-6">
        <p className="m-4 pt-6 lg:pt-10 font-bold tracking-wide text-3xl md:text-3xl lg:text-4xl text-rose-600 text-center">
          CONTACT
        </p>
        <p className="m-4 font-bold tracking-wide text-xl md:text-2xl lg:text-2xl text-gray-800 text-center">
          Let's Talk! 🙂
        </p>
      </div>

      <div className="flex items-center justify-center mb-4 lg:m-4 lg:mb-8 gap-x-4 md:gap-x-8">
        <a
          href="mailto:paliwal.anshika2028@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiMail className="text-3xl text-gmail-red hover:animate-pulse" />
        </a>

        <a
          href="https://www.linkedin.com/in/contactanshikapaliwal/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineLinkedin className="text-3xl text-linkedin-blue hover:animate-pulse" />
        </a>

        <a
          href="https://twitter.com/AnshikaPaliwal4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiTwitter className="text-3xl text-twitter-blue hover:animate-pulse" />
        </a>

        <a
          href="https://github.com/Anshika-Paliwal"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineGithub className="text-3xl text-github-black hover:animate-pulse" />
        </a>

        <a
          href="https://www.instagram.com/anshikaapaliwal/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineInstagram className="text-3xl text-instagram-pink hover:animate-pulse" />
        </a>
        <a
          href="https://medium.com/@anshikas-blogs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineMedium className="text-3xl text-medium-black hover:animate-pulse" />
        </a>
      </div>

      <div className="py-24">
        <div className="relative h-auto md:h-200">
          <img
            src={gals}
            alt="Background Img"
            className="inset-0 w-full h-80 object-cover opacity-90 sm:h-60 md:h-80 lg:h-100"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-yellow-400 hover:bg-yellow-300 text-center rounded-full p-2 m-2 mt-28 md:p-2 md:m-2 sm:mt-44 md:mt-48 lg:mt-48 transition ease-in-out">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://vsco.co/ansh-ikaa/gallery"
                className="text-black text-sm md:text-sm lg:text-lg font-bold"
              >
                Click to experience the "WORLD" through my eyes
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 h-0.5 bg-gray-300 mx-60"></div>

      <div className="mt-10 px-4 pt-4 lg:pt-4 font-semibold bg-rose-100 flex justify-center items-center h-24">
        <h1 className="text-md">
          This portfolio is Open Source and source code can be found on
          <span>
            <a
              href="https://github.com/Anshika-Paliwal/Portfolio"
              className="text-rose-600 hover:text-black hover:underline ml-1 transition ease-all linear"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </span>
        </h1>
      </div>
      <div className="pt-2 lg:pt-2 font-semibold bg-rose-100 flex justify-center items-center h-10 pb-14">
        <h1 className="text-md">
          &#169; <span className="mr-1.5">2023</span>
          Made with
          <BsFillSuitHeartFill className="m-2 inline text-2xl text-red-600 animate-pulse" />
          by
          <a
            href="https://twitter.com/AnshikaPaliwal4"
            className="text-rose-600 hover:text-black hover:underline ml-1 transition ease-all linear"
            target="_blank"
            rel="noopener noreferrer"
          >
            Anshika Paliwal
          </a>
        </h1>
      </div>
    </>
  );
};

export default Contact;
