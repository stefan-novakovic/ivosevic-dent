type PageLayoutProps = {
   className?: string;
   children: React.ReactNode;
};

const PageLayout = ({ className = '', children }: PageLayoutProps) => {
   return (
      <section
         className={`px-2 py-4 md:px-6 md:py-7 min-h-[calc(100vh-61.31px)] md:min-h-[calc(100vh-78.59px)] bg-white ${className}`}
      >
         {children}
      </section>
   );
};

export default PageLayout;
