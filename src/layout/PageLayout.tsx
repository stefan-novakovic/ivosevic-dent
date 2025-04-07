type PageLayoutProps = {
   className?: string;
   children: React.ReactNode;
};

const PageLayout = ({ children }: PageLayoutProps) => {
   return (
      <section
         className={`px-2 py-4 md:px-8 md:py-7 pb-16 md:pb-20 min-h-[calc(100vh-67.89px+1px)] md:min-h-[calc(100vh-78.59px+1px)] bg-light-page-layout-bg dark:bg-dark-page-layout-bg transition-colors duration-200`}
      >
         {children}
      </section>
   );
};

export default PageLayout;
