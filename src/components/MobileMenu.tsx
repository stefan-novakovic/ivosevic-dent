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
         className={`flex md:hidden flex-col justify-around w-[34px] h-[28px] p-0.5 relative transition-[scale,translate] ease-in-out select-none outline-none focus-visible:filter focus-visible:opacity-50 ${
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
               className="w-full h-1 rounded-[1px]"
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
               className="w-[300px] h-lvh font-segoe font-semibold fixed block md:hidden top-0 bottom-0 z-[100001] overflow-y-scroll transition-all duration-[575ms] hide-scrollbar"
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
               <header className="flex justify-between items-center w-full mt-[7.5px] mb-[18.5px] px-1">
                  <div className="w-full">
                     {logo && (
                        <img
                           className="block w-auto max-w-[164px] h-full max-h-[52px]"
                           src={logo}
                           alt=""
                        />
                     )}
                  </div>
                  <button
                     className="w-8 h-8 mt-[10px] mr-[15.5px] relative select-none focus-visible:filter focus-visible:opacity-50"
                     onClick={() => handleSidebarMenuToggle(false)}
                     aria-label="Close sidebar menu"
                  >
                     <div
                        style={{ backgroundColor: textColor }}
                        className="w-[26px] h-1 absolute top-1/2 left-1/2 transform -translate-x-[13px] -translate-y-[2px] rotate-45"
                     />
                     <div
                        style={{ backgroundColor: textColor }}
                        className="w-[26px] h-1 absolute top-1/2 left-1/2 transform -translate-x-[13px] -translate-y-[2px] rotate-[135deg]"
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
                        className={`block text-[17px] px-7 py-[0.85rem] no-underline tracking-[0.85px] break-words -outline-offset-[3px] select-none tap-highlight-transparent touch-callout-none touch-action-manipulation ${
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
                     className={`flex items-center gap-1.5 text-[17px] px-7 py-[0.85rem] tracking-[0.85px] break-words -outline-offset-[3px] select-none tap-highlight-transparent touch-callout-none touch-action-manipulation ${
                        openMenu ? 'pointer-events-auto' : 'pointer-events-none'
                     }`}
                  >
                     REŽIM:
                     <button className="py-[6px] rounded-full cursor-pointer">
                        {darkMode === false ? (
                           <BsFillSunFill className="w-[17px] h-[17px] text-text" />
                        ) : (
                           <BsFillMoonStarsFill className="w-[17px] h-[17px] text-text" />
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
         className="fixed block md:hidden inset-0 w-full min-h-lvh bg-mobile-overlay z-[100000] transition-opacity duration-[575ms]"
         onClick={() => handleSidebarMenuToggle(false)}
      />
   );
};
