import LogoWrapper from './LogoWrapper';
import MobileMenu from './MobileMenu';
import NavMenu from './NavMenu';

const Header = () => {
   return (
      <header className="flex justify-between items-center bg-light-bg dark:bg-dark-bg transition-colors duration-200 pl-2 pr-4 py-[10px] md:px-[22px] lg:pr-14 md:py-[13px] overflow-hidden relative">
         <LogoWrapper />
         <MobileMenu />
         <NavMenu />
      </header>
   );
};
export default Header;
