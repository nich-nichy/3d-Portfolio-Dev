import { Link } from "react-router-dom";
import { FaArrowCircleRight } from "react-icons/fa";
import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className="sm:text-2xl text-center bg-gray-800 rounded-lg shadow-md py-6 px-10 text-white mx-6">
        Hi 👋, I'm {" "}
        <span className="font-bold text-white mx-1 underline decoration-green-400">Nishath</span>
        <br />
        A Full Stack Web Developer
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box bg-amber-400 text-white py-6 px-10 rounded-lg shadow-md'>
        <p className='font-medium sm:text-xl text-center'>
          I worked with a company, <br />and picked up real time skills along the way.
        </p>
        <Link to='/about' className='bg-amber-800 py-2 px-4 m-2 rounded flex justify-center items-center gap-2 hover:bg-amber-600'>
          About me
          <FaArrowCircleRight className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box bg-amber-400 text-white py-6 px-10 rounded-lg shadow-md'>
        <p className='font-medium text-center sm:text-xl'>
          I've worked on several projects over the month's.
        </p>

        <Link to='/projects' className='bg-amber-800 py-2 px-4 m-2 rounded flex justify-center items-center gap-2 hover:bg-amber-600'>
          Visit my portfolio
          <FaArrowCircleRight className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box bg-amber-400 text-white py-6 px-10 rounded-lg shadow-md'>
        <p className='font-medium sm:text-xl text-center'>
          Want to hire me? <br /> I'm immediately available
        </p>

        <Link to='/contact' className='bg-amber-800 py-2 px-4 m-2 rounded flex justify-center items-center gap-2 hover:bg-amber-600'>
          Contact me
          <FaArrowCircleRight className='w-4 h-4 object-contain' />

        </Link>
      </div>
    );
  }

  return null;
};

export default HomeInfo;
