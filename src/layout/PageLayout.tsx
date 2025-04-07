type PageLayoutProps = {
   className?: string;
   children: React.ReactNode;
};

const PageLayout = ({ children }: PageLayoutProps) => {
   return (
      <section
         className={`bg-light-page-layout-bg dark:bg-dark-page-layout-bg min-h-[calc(100vh-67.89px+1px)] px-2 py-4 pb-16 transition-colors duration-200 md:min-h-[calc(100vh-78.59px+1px)] md:px-8 md:py-7 md:pb-20`}
      >
         {children}
      </section>
   );
};

export default PageLayout;
