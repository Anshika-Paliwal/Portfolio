const Projects = () => {
  return (
    <>
      <div className="p-6">
        <p className="m-4 pt-6 lg:pt-10 font-bold tracking-wide text-3xl md:text-3xl lg:text-4xl text-rose-600 text-center">
          PROJECTS
        </p>
      </div>
      <div className="flex flex-wrap justify-center mb-6">
        <div className="w-full sm:w-1/2 md:w-1/4 border border-gray-400 rounded-md p-4 m-4 hover:shadow-xl hover:bg-rose-50">
          <div className="flex items-center justify-center">
            <h2 className="text-gray-800 text-lg font-bold mx-2 text-center tracking-wide">
              RGB Color Game Project
            </h2>
          </div>
          <p className="text-gray-600 mt-4 text-center">
            Enables a designer to learn about color theory.{" "}
          </p>
          <div className="flex flex-col justify-center items-center m-4">
            <a
              href="https://the-rgb-color-game.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-none text-red-500 hover:text-white hover:bg-rose-600 text-xs font-semibold border-2 border-rose-600 py-2 px-4 rounded-full">
                Visit!
              </button>
            </a>
          </div>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/4 border border-gray-400 rounded-md p-4 m-4 hover:shadow-xl hover:bg-rose-50">
          <div className="flex items-center justify-center">
            <h2 className="text-gray-800 text-lg font-bold mx-2 text-center tracking-wide">
              Appsdeployer
            </h2>
          </div>
          <p className="text-gray-600 mt-4 text-center">
            Contribution to developeing Frontend of the Company Website along
            with Mobile Responsiveness.{" "}
          </p>
          <div className="flex flex-col justify-center items-center m-4">
            <a
              href="https://www.appsdeployer.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-none text-red-500 hover:text-white hover:bg-rose-600 text-xs font-semibold border-2 border-rose-600 py-2 px-4 rounded-full">
                Visit!
              </button>
            </a>
          </div>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/4 border border-gray-400 rounded-md p-4 m-4 hover:shadow-xl hover:bg-rose-50">
          <div className="flex items-center justify-center">
            <h2 className="text-gray-800 text-lg font-bold mx-2 text-center tracking-wide">
              EditEase
            </h2>
          </div>
          <p className="text-gray-600 mt-4 text-center">
            An easy Utility Tool to let you manipulate the text.{" "}
          </p>
          <div className="flex flex-col justify-center items-center m-4">
            <a
              href="https://github.com/Anshika-Paliwal/Text-Converter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-none text-red-500 hover:text-white hover:bg-rose-600 text-xs font-semibold border-2 border-rose-600 py-2 px-4 rounded-full">
                Visit!
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
