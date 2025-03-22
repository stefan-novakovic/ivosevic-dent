import { NavLink } from 'react-router-dom';
import { pages } from '../data/pages';

const NavMenu = () => {
   return (
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
   );
};
export default NavMenu;
