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
         className={`hidden transition-all duration-[1100ms] ease-in-out md:block ${
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
                        'text-text block py-[3px] text-xl font-semibold'
                     }
                  >
                     {label}
                  </NavLink>
                  <hr className="bg-light-nav-menu-selected h-0.5 w-[calc(100%-6px)] rounded border-none opacity-0 transition-all duration-200" />
               </li>
            ))}
            <li className="flex items-center justify-center">
               <button
                  onClick={toggleDarkMode}
                  className="cursor-pointer rounded-full px-1 py-[6px] active:brightness-[85%]"
               >
                  {darkMode === false ? (
                     <BsFillSunFill className="text-text h-[18px] w-[18px]" />
                  ) : (
                     <BsFillMoonStarsFill className="text-text h-[18px] w-[18px]" />
                  )}
               </button>
            </li>
         </ul>
      </nav>
   );
};
export default NavMenu;
