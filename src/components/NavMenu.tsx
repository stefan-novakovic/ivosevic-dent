import { use, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import { DarkModeContext } from '../context/DarkModeContext';
import { pages } from '../data/pages';

const NavMenu = () => {
   const [isLoaded, setIsLoaded] = useState<boolean>(false);
   const { darkMode, toggleDarkMode } = use(DarkModeContext);

   useEffect(() => {
      setIsLoaded(true);
   }, []);
   return (
      <nav
         id="nav-menu"
         className={`hidden md:block transition-all duration-[1100ms] ease-in-out ${
            isLoaded
               ? 'translate-x-0'
               : 'translate-x-[calc(100%+16px+1px)] md:translate-x-[calc(100%+48px+1px)]'
         }`}
      >
         <ul className="flex gap-5">
            {pages.map(({ to, label }) => (
               <li key={to} className="flex flex-col items-center">
                  <NavLink
                     to={to}
                     className={
                        'block py-[3px] text-xl font-semibold text-text'
                     }
                  >
                     {label}
                  </NavLink>
                  <hr className="border-none w-[calc(100%-6px)] h-0.5 rounded bg-light-nav-menu-selected opacity-0 transition-all duration-200" />
               </li>
            ))}
            <li className="flex justify-center items-center">
               <button
                  onClick={toggleDarkMode}
                  className="px-1 py-[6px] rounded-full cursor-pointer active:brightness-[85%]"
               >
                  {darkMode === false ? (
                     <BsFillSunFill className="w-[18px] h-[18px] text-text" />
                  ) : (
                     <BsFillMoonStarsFill className="w-[18px] h-[18px] text-text" />
                  )}
               </button>
            </li>
         </ul>
      </nav>
   );
};
export default NavMenu;
