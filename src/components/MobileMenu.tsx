import { use } from 'react';
import { NavLink } from 'react-router-dom';
import SidebarMenuContextProvider from '../context/SidebarMenuContextProvider';
import { SidebarMenuContext } from '../context/SidebarMenuContext';
import { SideBarMenuProps } from '../data/types';
import { pages } from '../data/pages';
import { themeColors } from '../style/themeColors';

const MobileMenu = () => {
   return (
      <SidebarMenuContextProvider>
         <HamburgerButton />

         <SidebarMenu
            pages={pages}
            bgColor={themeColors['light-primary']}
            textColor={themeColors['white']}
            selectedBgColor={themeColors['white']}
            selectedTextColor={themeColors['light-primary']}
         />
      </SidebarMenuContextProvider>
   );
};
export default MobileMenu;

const HamburgerButton = ({ color = 'white' }: { color?: string }) => {
   const { hamburgerClicked, handleSidebarMenuToggle } =
      use(SidebarMenuContext);

   return (
      <button
         className={`flex md:hidden flex-col justify-around w-[34px] h-[28px] p-0.5 relative transition-transform duration-150 ease-out select-none outline-none focus-visible:filter focus-visible:opacity-50 ${
            hamburgerClicked ? 'scale-[1.12]' : ''
         }`}
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

   return (
      <>
         {isRendered && <SidebarMenuOverlay />}

         {isRendered && (
            <div
               id="sidebar-menu"
               className="w-[300px] h-lvh font-segoe font-semibold fixed block md:hidden top-0 bottom-0 z-[100001] overflow-y-scroll transform duration-[575ms] hide-scrollbar"
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
                                 : bgColor,
                              pointerEvents: isActive ? 'none' : 'auto'
                           };
                        }}
                        className={`block text-[1.05rem] px-7 py-[0.85rem] no-underline tracking-[0.85px] break-words -outline-offset-[3px] select-none tap-highlight-transparent touch-callout-none touch-action-manipulation ${
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
         className="fixed block md:hidden inset-0 w-full min-h-lvh bg-[#0000001e] z-[100000] transition-opacity duration-[575ms]"
         onClick={() => handleSidebarMenuToggle(false)}
      />
   );
};
