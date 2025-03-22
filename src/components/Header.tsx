import LogoWrapper from './LogoWrapper';
import MobileMenu from './MobileMenu';
import NavMenu from './NavMenu';

const Header = () => {
   return (
      <header className="flex justify-between items-center bg-light-primary pl-2 pr-4 py-[10px] md:pl-6 md:pr-12 md:py-[13px]">
         <LogoWrapper />
         <MobileMenu />
         <NavMenu />
      </header>
   );
};
export default Header;
