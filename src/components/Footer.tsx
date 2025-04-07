const Footer = () => {
   const CurrentYear: number = new Date().getFullYear();
   return (
      <footer className="bg-light-bg dark:bg-dark-bg text-text border-footer-border border-t-1 px-6 py-5 text-center font-semibold tracking-wider italic transition-colors duration-200 [text-shadow:_0_0px_2px_rgb(0_0_0_/_0.35)] md:border-t-2 md:py-4 md:text-xl">
         Copyright &copy; {CurrentYear}{' '}
         <span className="whitespace-nowrap">Ivošević Dent</span>
      </footer>
   );
};
export default Footer;
