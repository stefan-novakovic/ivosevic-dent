const Footer = () => {
   const CurrentYear: number = new Date().getFullYear();
   return (
      <footer className="bg-light-bg dark:bg-dark-bg transition-colors duration-200 text-center text-text font-semibold md:text-xl px-6 py-5 md:py-4 italic tracking-wider [text-shadow:_0_0px_2px_rgb(0_0_0_/_0.35)] border-t-1 md:border-t-2 border-footer-border">
         Copyright &copy; {CurrentYear}{' '}
         <span className="whitespace-nowrap">Ivošević Dent</span>
      </footer>
   );
};
export default Footer;
