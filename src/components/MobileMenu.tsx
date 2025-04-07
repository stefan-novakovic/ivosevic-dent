import { use, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import SidebarMenuContextProvider from '../context/SidebarMenuContextProvider';
import { SidebarMenuContext } from '../context/SidebarMenuContext';
import { SideBarMenuProps } from '../data/types';
import { pages } from '../data/pages';
import { themeColors } from '../style/themeColors';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import { DarkModeContext } from '../context/DarkModeContext';

const MobileMenu = () => {
   const { darkMode } = use(DarkModeContext);
   return (
      <SidebarMenuContextProvider>
         <HamburgerButton />

         <SidebarMenu
            pages={pages}
            bgColor={
               darkMode ? themeColors['dark-bg'] : themeColors['light-bg']
            }
            textColor={themeColors['text']}
            selectedBgColor={themeColors['light-nav-menu-selected']}
            selectedTextColor={
               darkMode ? themeColors['dark-bg'] : themeColors['light-bg']
            }
         />
      </SidebarMenuContextProvider>
   );
};
export default MobileMenu;

const HamburgerButton = ({ color = 'white' }: { color?: string }) => {
   const [isLoaded, setIsLoaded] = useState<boolean>(false);

   const { hamburgerClicked, handleSidebarMenuToggle } =
      use(SidebarMenuContext);

   useEffect(() => {
      setIsLoaded(true);
   }, []);

   return (
      <button
         className={`relative flex h-[28px] w-[34px] flex-col justify-around p-0.5 transition-[scale,translate] ease-in-out outline-none select-none focus-visible:opacity-50 focus-visible:filter md:hidden ${
            hamburgerClicked
               ? 'scale-[1.12] duration-150'
               : 'scale-100 duration-[1100ms]'
         } ${isLoaded ? 'translate-x-0' : 'translate-x-[calc(100%+18px+1px)]'}`}
         onClick={() => handleSidebarMenuToggle(true)}
         aria-label="Open sidebar menu"
      >
         {Array.from({ length: 3 }).map((_, index) => (
            <div
               key={index}
               style={{ backgroundColor: color }}
               className="h-1 w-full rounded-[1px]"
            />
         ))}
      </button>
   );
};

const SidebarMenu = ({
   pages,
   logo,
   side = 'right',
   bgColor = 'white',
   textColor = 'black',
   selectedBgColor = 'black',
   selectedTextColor = 'white'
}: SideBarMenuProps) => {
   const {
      openMenu,
      isRendered,
      handleSidebarMenuToggle,
      clickedItemIndex,
      handleMenuItemClick
   } = use(SidebarMenuContext);
   const { darkMode, toggleDarkMode } = use(DarkModeContext);

   return (
      <>
         {isRendered && <SidebarMenuOverlay />}

         {isRendered && (
            <div
               id="sidebar-menu"
               className="font-segoe hide-scrollbar fixed top-0 bottom-0 z-[100001] block h-lvh w-[300px] overflow-y-scroll font-semibold transition-all duration-[575ms] md:hidden"
               style={{
                  backgroundColor: bgColor,
                  transform:
                     openMenu && side === 'right'
                        ? 'translateX(0%)'
                        : openMenu && side === 'left'
                          ? 'translateX(0%)'
                          : !openMenu && side === 'right'
                            ? 'translateX(101%)'
                            : 'translateX(-101%)',
                  ...(side === 'right'
                     ? {
                          right: '0',
                          left: 'auto',
                          boxShadow: '3px 0 10px #0000004b'
                       }
                     : {
                          right: 'auto',
                          left: '0',
                          boxShadow: '-3px 0 10px #0000004b'
                       })
               }}
            >
               <header className="mt-[7.5px] mb-[18.5px] flex w-full items-center justify-between px-1">
                  <div className="w-full">
                     {logo && (
                        <img
                           className="block h-full max-h-[52px] w-auto max-w-[164px]"
                           src={logo}
                           alt=""
                        />
                     )}
                  </div>
                  <button
                     className="relative mt-[10px] mr-[15.5px] h-8 w-8 select-none focus-visible:opacity-50 focus-visible:filter"
                     onClick={() => handleSidebarMenuToggle(false)}
                     aria-label="Close sidebar menu"
                  >
                     <div
                        style={{ backgroundColor: textColor }}
                        className="absolute top-1/2 left-1/2 h-1 w-[26px] -translate-x-[13px] -translate-y-[2px] rotate-45 transform"
                     />
                     <div
                        style={{ backgroundColor: textColor }}
                        className="absolute top-1/2 left-1/2 h-1 w-[26px] -translate-x-[13px] -translate-y-[2px] rotate-[135deg] transform"
                     />
                  </button>
               </header>

               <div className="mb-[5.5rem]">
                  {pages.map((page, index) => (
                     <NavLink
                        key={page.label}
                        to={page.to}
                        onClick={() => handleMenuItemClick(index)}
                        style={({ isActive }) => {
                           return {
                              color: isActive ? selectedTextColor : textColor,
                              backgroundColor: isActive
                                 ? selectedBgColor
                                 : 'transparent',
                              pointerEvents: isActive ? 'none' : 'auto',
                              transition: isActive ? 'color' : 'none',
                              transitionDuration: '575ms'
                           };
                        }}
                        className={`tap-highlight-transparent touch-callout-none touch-action-manipulation block px-7 py-[0.85rem] text-[17px] tracking-[0.85px] break-words no-underline -outline-offset-[3px] select-none ${
                           openMenu
                              ? 'pointer-events-auto'
                              : 'pointer-events-none'
                        }`}
                        aria-label={`Go to ${page.label} page`}
                     >
                        <div
                           className={`${clickedItemIndex === index ? 'animate-selected-page' : ''}`}
                        >
                           {page.label}
                        </div>
                     </NavLink>
                  ))}
                  <div
                     onClick={toggleDarkMode}
                     style={{ color: textColor }}
                     className={`tap-highlight-transparent touch-callout-none touch-action-manipulation flex items-center gap-1.5 px-7 py-[0.85rem] text-[17px] tracking-[0.85px] break-words -outline-offset-[3px] select-none ${
                        openMenu ? 'pointer-events-auto' : 'pointer-events-none'
                     }`}
                  >
                     REŽIM:
                     <button className="cursor-pointer rounded-full py-[6px]">
                        {darkMode === false ? (
                           <BsFillSunFill className="text-text h-[17px] w-[17px]" />
                        ) : (
                           <BsFillMoonStarsFill className="text-text h-[17px] w-[17px]" />
                        )}
                     </button>
                  </div>
               </div>
            </div>
         )}
      </>
   );
};

const SidebarMenuOverlay = () => {
   const { openMenu, handleSidebarMenuToggle } = use(SidebarMenuContext);
   return (
      <div
         id="sidebar-menu-overlay"
         style={
            openMenu
               ? { opacity: '1', pointerEvents: 'auto' }
               : { opacity: '0', pointerEvents: 'none' }
         }
         className="bg-mobile-overlay fixed inset-0 z-[100000] block min-h-lvh w-full transition-opacity duration-[575ms] md:hidden"
         onClick={() => handleSidebarMenuToggle(false)}
      />
   );
};
