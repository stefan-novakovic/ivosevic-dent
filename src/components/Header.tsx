import LogoWrapper from './LogoWrapper';
import MobileMenu from './MobileMenu';
import NavMenu from './NavMenu';

const Header = () => {
   return (
      <header className="bg-light-bg dark:bg-dark-bg relative flex items-center justify-between overflow-hidden py-[10px] pr-4 pl-2 transition-colors duration-200 md:px-[22px] md:py-[13px] lg:pr-14">
         <LogoWrapper />
         <MobileMenu />
         <NavMenu />
      </header>
   );
};
export default Header;
