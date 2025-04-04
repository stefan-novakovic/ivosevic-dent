import { useState, useEffect, useRef, RefObject } from 'react';
import { IoCall, IoCallOutline } from 'react-icons/io5';

import Hero from '../components/Hero';
import PageLayout from '../layout/PageLayout';
import { HomeData } from '../data/HomeData';

const Services = () => {
   const {
      servicesTitle,
      servicesTitleDesc,
      ourQualitiesTitle,
      ourQualitiesList,
      servicesList,
      bookAppointment
   } = HomeData(); // Destructure the needed property
   const [isBookAppointmentImageLoaded, setIsBookAppointmentImageLoaded] =
      useState<boolean>(false);
   return (
      <>
         <Hero />

         <PageLayout className="to-blue-600">
            {/* Services Section */}
            <h1 className="text-3xl md:text-4xl font-semibold mb-3 text-text-inverse dark:text-text transition-colors duration-200">
               {servicesTitle}
            </h1>
            <p className="text-[15.5px] md:text-[17.2px] tracking-wide md:tracking-wider italic mb-6 text-text-inverse dark:text-text transition-colors duration-200">
               {servicesTitleDesc}
            </p>
            {/* Our Qualities Section */}
            <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-text-inverse dark:text-text transition-colors duration-200">
               {ourQualitiesTitle}
            </h2>
            <ul className="flex flex-col gap-2 mb-14">
               {ourQualitiesList.map((quality, index) => (
                  <li
                     key={index}
                     className="flex gap-2 items-center text-text-inverse dark:text-text transition-colors duration-200"
                  >
                     {quality.icon}
                     <span className="text-[17px] md:text-[18px] tracking-wide">
                        {quality.text}
                     </span>
                  </li>
               ))}
            </ul>
            {/* Services List Section */}
            <div className="flex flex-wrap gap-8 justify-center mb-20 max-w-[1100px] 3xl:max-w-none w-full mx-auto">
               {servicesList.map((service) => (
                  <ServiceCard key={service.name} service={service} />
               ))}
            </div>
            {/* Book Appointment Section */}
            <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-12 md:gap-[5.5vw] mb-12 md:mb-[52px] pr-0 md:pr-3">
               <div className="max-w-[360px] w-full aspect-square select-none animate-bigger-bounce">
                  <img
                     src={bookAppointment.imageSrc}
                     alt=""
                     className={`max-w-[360px] w-full h-auto transition-[scale,opacity] duration-[1000ms] ${
                        isBookAppointmentImageLoaded
                           ? 'scale-100 opacity-100'
                           : 'scale-[0] opacity-0'
                     }`}
                     onLoad={() => setIsBookAppointmentImageLoaded(true)} // Trigger animation after image loads
                  />
               </div>
               <div className="flex flex-col items-center gap-4">
                  <p className="text-xl md:text-2xl tracking-[0.3px] text-center font-semibold bg-light-bg dark:bg-dark-bg-service-card text-text transition-colors duration-200 px-2 md:px-3 py-1">
                     {bookAppointment.text}
                  </p>
                  <a
                     href={bookAppointment.phoneHref}
                     title="Pozovite"
                     className="flex items-center gap-2 text-xl md:text-2xl tracking-[0.3px] text-center md:text-start font-semibold bg-light-bg dark:bg-dark-bg-service-card text-text px-6 py-3 rounded-4xl outline-3 outline-light-bg dark:outline-dark-bg-service-card outline-offset-3 transition-colors duration-200 group active:brightness-95"
                  >
                     <IoCallOutline
                        size={30}
                        className="pt-[5px] group-hover:hidden"
                     />
                     <IoCall
                        size={30}
                        className="pt-[5px] hidden group-hover:block"
                     />

                     <span>{bookAppointment.phone}</span>
                  </a>
               </div>
            </div>
         </PageLayout>
      </>
   );
};
export default Services;

type Service = {
   name: string;
   descList: string[];
   image: string;
};

const ServiceCard = ({ service }: { service: Service }) => {
   const [showScroll, setShowScroll] = useState<boolean>(false);
   const contentRef: RefObject<HTMLDivElement | null> =
      useRef<HTMLDivElement>(null);
   const scrollInterval = useRef<number | null>(null);

   useEffect(() => {
      const checkScroll = () => {
         if (contentRef.current) {
            const { scrollTop, scrollHeight, clientHeight } =
               contentRef.current;
            setShowScroll(scrollTop + clientHeight < scrollHeight - 1);
         }
      };

      setTimeout(checkScroll, 0);
      window.addEventListener('resize', checkScroll); // Recalculate on window resize
      contentRef.current?.addEventListener('scroll', checkScroll);
      return () => {
         window.removeEventListener('resize', checkScroll);
         contentRef.current?.removeEventListener('scroll', checkScroll);
      };
   }, []);

   const startScrolling = () => {
      const scrollStep = () => {
         if (contentRef.current) {
            contentRef.current.scrollBy({ top: 4, behavior: 'instant' }); // Small steps, instant movement
            scrollInterval.current = requestAnimationFrame(scrollStep); // Recursively calls itself
         }
      };

      scrollStep(); // Start scrolling
   };

   const stopScrolling = () => {
      if (scrollInterval.current) {
         cancelAnimationFrame(scrollInterval.current);
         scrollInterval.current = null;
      }
   };
   return (
      <div className="w-full max-w-[336px] 3xl:max-w-[280px] bg-light-bg-service-card dark:bg-dark-bg-service-card shadow-sm shadow-light-service-card-shadow dark:shadow-dark-service-card-shadow hover:shadow-lg rounded-[6px]  transition-[box-shadow,translate,color,background-color,border-color,outline-color,text-decoration-color,fill] duration-700 hover:-translate-y-1">
         <div className="w-full max-w-[336px] 3xl:max-w-[280px] aspect-[210/155] overflow-hidden shadow-sm relative">
            <img
               src={service.image}
               alt=""
               className="block w-full max-w-[336px] 3xl:max-w-[280px] h-full rounded-t-[6px] object-cover"
            />
            <div className="absolute rounded-t-[6px] inset-0 dark:bg-service-card-image-overlay"></div>
         </div>

         <div className="p-4 pt-5 pb-7 relative select-none text-text-inverse dark:text-text transition-colors duration-200">
            <p className="text-[21px] tracking-[0.38px] font-semibold mb-[9px]">
               {service.name}
            </p>
            <div
               ref={contentRef}
               className={`sm:max-h-[188px] 3xl:max-h-[218px] tracking-[0.12px] pr-2 overflow-auto scrollbar-custom`}
            >
               {service.descList.map((singleDescString) => (
                  <p key={singleDescString} className="mb-1">
                     ‣ {singleDescString}
                  </p>
               ))}
            </div>
            <button
               disabled={!showScroll}
               onMouseDown={startScrolling}
               onMouseUp={stopScrolling}
               onMouseLeave={stopScrolling} // Stops when user moves away
               className={`hidden sm:block pointer-events-none xl:pointer-events-auto absolute bottom-[3px] left-1/2 transition-opacity duration-400 ${
                  showScroll
                     ? 'opacity-100 visibility-visible cursor-pointer'
                     : 'opacity-0 visibility-hidden cursor-auto'
               } px-1 py-2`}
            >
               <div className="w-0 h-0 border-l-5 border-r-5 border-t-5 border-transparent border-t-[#dadedf] animate-big-bounce"></div>
            </button>
         </div>
      </div>
   );
};
