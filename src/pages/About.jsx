import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { CTA } from "../components";
import { experiences, skills, certificates } from "../constants";
import "react-vertical-timeline-component/style.min.css";
import resume from '../assets/pdf/resume_new.pdf';

const About = () => {
  return (
    <section className="max-w-7xl mx-auto pt-24 px-6 md:px-16 lg:px-24">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-center">
        Hello, I'm{" "}
        <span className="font-semibold drop-shadow-md underline decoration-amber-300">
          Nishath
        </span>{" "}
      </h1>

      <div className="mt-6 text-center text-gray-600 md:text-lg">
        <p>
          I am a full-stack developer with 15 months of hands-on experience in designing and building robust, scalable web applications. I'm passionate about continuous learning and growth.
        </p>
      </div>
      <div className="flex items-center justify-center mt-3">
        <button
          onClick={() => {
            const link = document.createElement('a');
            link.href = resume;
            link.setAttribute('download', 'Nishath_Resume.pdf');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
          className="bg-amber-500 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-300 transition ease-in-out duration-200"
        >
          Resume
        </button>
      </div>

      <div className="py-16">
        <h3 className="text-2xl font-semibold text-gray-800">My Skills</h3>

        <div className="mt-12 flex flex-wrap justify-center gap-10">
          {skills.map((skill) => (
            <div
              className="w-24 h-24 bg-white shadow-lg rounded-xl flex justify-center items-center"
              key={skill.name}
            >
              <img
                src={skill.imageUrl}
                alt={skill.name}
                className="w-3/5 h-3/5 object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mb-10">
        <h3 className="text-2xl font-semibold text-gray-800">Work Experience</h3>
        <div className="mt-6 text-gray-600">
          <p>
            I've worked with a company, learning new courses, leveling up my skills, and collaborating with talented people. Here's the rundown:
          </p>
        </div>

        <div className="mt-12">
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-2/3 h-2/3 object-contain"
                    />
                  </div>
                }
                contentStyle={{
                  borderBottomWidth: "4px",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {experience.title}
                  </h3>
                  <p className="text-sm font-medium text-gray-700">
                    {experience.company_name}
                  </p>
                </div>

                <ul className="mt-4 list-disc ml-5 space-y-1">
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="text-gray-600 text-sm"
                    >
                      {point}
                    </li>
                  ))}
                  <li className="text-gray-600 text-sm">Skills: {experience.skills}</li>
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className="border-t border-gray-200 mt-0 my-16" />
      <div className="pb-16">
        <h3 className="text-2xl font-semibold text-gray-800">Certificates</h3>
        <div className="mt-6 text-gray-600">
          <p>
            I have learned several courses and gained certificates. Here's the rundown:
          </p>
        </div>

        <div className="mt-12">
          <VerticalTimeline>
            {certificates.map((certificate) => (
              <VerticalTimelineElement
                key={certificate.company_name}
                date={certificate.date}
                iconStyle={{ background: certificate.iconBg }}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={certificate.icon}
                      alt={certificate.company_name}
                      className="w-2/3 h-2/3 object-contain"
                    />
                  </div>
                }
                contentStyle={{
                  borderBottomWidth: "4px",
                  borderBottomColor: certificate.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {certificate.title}
                  </h3>
                  <p className="text-sm font-medium text-gray-700">
                    {certificate.company_name}
                  </p>
                </div>

                <ul className="mt-4 list-disc ml-5 space-y-1">
                  {certificate.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="text-gray-600 text-sm"
                    >
                      Skills Learned: {point}
                    </li>
                  ))}
                </ul>
                <div className="flex items-end justify-end">
                  <button className="text-sm bg-amber-500 text-white font-semibold mt-3 py-2 px-4 rounded-lg shadow-lg hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-300 transition ease-in-out duration-200" onClick={() => window.open(certificate.url, "_blank")}>View Certificate</button>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
      <hr className="border-t border-gray-200 my-16" />

      <CTA />
    </section>

  );
};

export default About;
