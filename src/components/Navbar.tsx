import { useNavigate, NavigateFunction, NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import { pages } from '../data/pages';

const Navbar = () => {
   const navigate: NavigateFunction = useNavigate();

   return (
      <header className="flex justify-between items-center bg-light-primary pl-2 pr-4 py-[10px] md:pl-6 md:pr-12 md:py-[13px]">
         <div
            onClick={() => navigate('/')}
            className="w-44 md:w-56 aspect-[224/52.59] cursor-pointer"
         >
            <img src={logo} alt="" className="w-44 md:w-56 h-auto" />
         </div>

         <nav id="nav-menu" className="hidden md:block">
            <ul className="flex gap-6">
               {pages.map(({ to, label }) => (
                  <li key={to} className="flex flex-col items-center">
                     <NavLink
                        to={to}
                        className={
                           'block py-[3px] text-xl font-semibold text-white'
                        }
                     >
                        {label}
                     </NavLink>
                     <hr className="border-none w-[calc(100%-6px)] h-0.5 rounded bg-white opacity-0 transition-all duration-200" />
                  </li>
               ))}
            </ul>
         </nav>
      </header>
   );
};
export default Navbar;
