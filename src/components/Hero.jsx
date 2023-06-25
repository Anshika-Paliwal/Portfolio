import woman from "../images/woman.png";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { AiOutlineMedium } from "react-icons/ai";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col mt-20 md:flex-row m-4 md:mt-24 md:m-24 tracking-tight">
        <div className="w-full md:w-1/2 lg:m-8 flex flex-col justify-center items-center">
          <h2 className="m-4 text-4xl lg:text-5xl text-gray-800 tracking-3 text-left font-bold mb-2 tracking-wide">
            Hey There! I am{" "}
            <span className="text-rose-600 block">Anshika Paliwal.</span>
          </h2>
          <p className="m-4 ml-12 text-md sm:text-xl text-gray-800 text-left font-semibold md:text-left tracking-wide">
            A Full-Stack Web Developer based in India.
          </p>
          <div className="flex m-4 gap-x-4 md:gap-x-8">
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
              href="https://www.instagram.com/___anshika.__/"
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

          <h2 className="m-2 text-md text-gray-800 text-right font-bold mb-2">
            <a
              href="mailto:youremail@example.com"
              className="hover:underline underline-offset-4"
            >
              Get in touch to Connect!
            </a>
          </h2>
        </div>
        <div className="w-full md:w-1/2 flex justify-start items-center">
          <img src={woman} alt="woman" className="w-full h-auto" />
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex-1 h-0.5 bg-gray-300 mx-60"></div>
      </div>
    </>
  );
};

export default Hero;
