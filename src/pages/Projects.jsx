import { Link } from "react-router-dom";
import { CTA } from "../components";
import { projects } from "../constants";
import { arrow } from "../assets/icons";
import { FaEye } from "react-icons/fa";
import { FaCode } from "react-icons/fa";

const Projects = () => {
  return (
    <section className="max-w-7xl mx-auto pt-24 px-3 md:px-16 lg:px-24">
      <h1 className="font-semibold text-3xl text-center">
        My{" "}
        <span className="sky-gradient_text drop-shadow font-semibold">
          Projects
        </span>
      </h1>

      <p className="text-slate-500 mt-4 text-center max-w-2xl mx-auto leading-relaxed">
        I've embarked on several projects, many of them are open-source. Here are some of them!
      </p>

      {/* <div className="flex flex-wrap justify-center my-16 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="relative block-container">
              <div className={`rounded-xl ${project.theme}`} />
              <div className="rounded-xl flex justify-center items-center">
                <img
                  src={project.iconUrl}
                  alt={project.name}
                  className="object-contain rounded"
                  width={180}
                  height={180}
                />
              </div>
            </div>
            <div className="mt-6 flex flex-col items-center text-center">
              <h4 className="text-2xl font-poppins font-semibold">{project.name}</h4>
              <p className="mt-3 text-slate-500 max-w-sm">{project.description}</p>
              <p className="text-sm font-muted">Tech used: {project.teckUsed}</p>

              <div className="flex gap-4">

                {project.link.length === 0 ? <>
                  {null}
                </> : <>
                  <div className="mt-5 p-3 flex items-center gap-2 font-poppins">
                    <Link
                      to={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold bg-sky-600 text-white py-2 px-4 rounded-lg hover:bg-sky-700 transition-transform transform hover:scale-105 shadow-lg"
                    >
                      <span className="flex items-center gap-2">
                        <FaEye />
                        <span>Live Demo</span>
                      </span>
                    </Link>
                  </div>

                </>}
                <div className="mt-5 p-3 flex items-center gap-2 font-poppins">
                  <Link
                    to={project.gitLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-900 transition-transform transform hover:scale-105 shadow-lg"
                  >
                    <span className="flex items-center gap-2">
                      <FaCode />
                      <span>Source Code</span>
                    </span>
                  </Link>
                </div>
              </div>


            </div>
          </div>
        ))}
      </div> 
        <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
      <div className="relative h-64 overflow-hidden">
        <div className={`absolute inset-0 opacity-10 ${project.theme}`} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <div className="flex items-center justify-center h-full p-8">
          <img
            src={project.iconUrl}
            alt={project.name}
            className="w-80 h-80 rounded-md object-contain transform group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      </div>

      <div className="p-6 space-y-4">
        <h4 className="text-2xl font-semibold text-gray-800 tracking-tight">
          {project.name}
        </h4>

        <p className="text-gray-600 leading-relaxed">
          {project.description}
        </p>

        <div className="py-3 px-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600">
            <span className="font-medium text-gray-800">Tech used:</span>{' '}
            {project.teckUsed}
          </p>
        </div>


        <div className="flex flex-wrap gap-4 pt-2">
          {project.link && (
            <Link
              to={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium 
                    hover:bg-blue-700 transition-all duration-300 hover:shadow-lg shadow-blue-300 w-full justify-center"
            >
              <FaEye className="text-lg" />
              <span>Live Demo</span>
            </Link>
          )}

          <Link
            to={project.gitLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg font-medium 
                  hover:bg-gray-900 transition-all duration-300 hover:shadow-lg shadow-gray-300 w-full justify-center"
          >
            <FaCode className="text-lg" />
            <span>Source Code</span>
          </Link>
        </div>
      </div>
    </div>
  ))
}
        </div >
      </div >
      */}

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group relative backdrop-blur-sm bg-white/30 border border-gray-200 rounded-3xl overflow-hidden hover:bg-white/40 transition-all duration-500"
            >
              {/* Glass Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-70" />

              {/* Content Container */}
              <div className="relative z-10">
                {/* Image Section */}
                <div className="relative p-6">
                  <div className={`absolute inset-0 ${project.theme} opacity-5`} />
                  <div className="flex items-center justify-center">
                    <div className="relative group-hover:scale-105 transition-transform duration-500">
                      <div className="absolute  rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500" />
                      <img
                        src={project.iconUrl}
                        alt={project.name}
                        className="relative w-full h-44 object-contain rounded-xl p-2"
                      />
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6 pt-2 space-y-4">
                  <h4 className="text-xl font-bold text-gray-800 text-center">
                    {project.name}
                  </h4>

                  <p className="text-gray-600 text-center text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="bg-white/50 rounded-2xl p-3 backdrop-blur-sm">
                    <p className="text-sm text-gray-600 text-center">
                      <span className="font-medium text-gray-800">Tech Stack:</span>{' '}
                      {project.teckUsed}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-center gap-4 pt-2">
                    {project.link && (
                      <Link
                        to={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 
                      text-white rounded-xl font-medium hover:translate-y-[-2px] transition-all duration-300 
                      hover:shadow-lg hover:shadow-blue-500/30"
                      >
                        <FaEye />
                        <span>Demo</span>
                      </Link>
                    )}

                    <Link
                      to={project.gitLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-gray-800 to-gray-900 
                    text-white rounded-xl font-medium hover:translate-y-[-2px] transition-all duration-300 
                    hover:shadow-lg hover:shadow-gray-500/30"
                    >
                      <FaCode />
                      <span>Code</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className="border-slate-200 my-20" />

      <CTA />
    </section>
  );
};

export default Projects;
