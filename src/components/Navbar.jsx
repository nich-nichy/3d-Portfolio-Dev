import { NavLink } from "react-router-dom";
import { logo } from '../assets/images'

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/'>
        <img src={logo} alt='logo' className='w-18 h-18 object-contain rounded-full' width={50} height={50} />
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-sky-600 bg-slate-50 py-1 px-4 rounded" : "text-gray-900 bg-slate-50 py-1 px-4 rounded"}>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-sky-600 bg-slate-50 py-1 px-4 rounded" : "text-gray-900 bg-slate-50 py-1 px-4 rounded"}>
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
