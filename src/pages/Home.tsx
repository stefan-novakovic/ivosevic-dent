import { useState, useEffect, useRef, RefObject } from 'react';
import { IoCall, IoCallOutline } from 'react-icons/io5';

import Hero from '../components/Hero';
import PageLayout from '../layout/PageLayout';
import { HomeData } from '../data/HomeData';
import { useImageLoad } from '../context/ImageLoadContext';

const Services = () => {
   const {
      servicesTitle,
      servicesTitleDesc,
      ourQualitiesTitle,
      ourQualitiesList,
      servicesList,
      bookAppointment
   } = HomeData(); // Destructure the needed property
   const {
      homeBookAppointmentImageLoaded,
      markHomeBookAppointmentImageAsLoaded
   } = useImageLoad();

   return (
      <>
         <Hero />

         <PageLayout className="to-blue-600">
            {/* Services Section */}
            <h1 className="text-text-inverse dark:text-text mb-3 text-3xl font-semibold transition-colors duration-200 md:text-4xl">
               {servicesTitle}
            </h1>
            <p className="text-text-inverse dark:text-text mb-6 text-[15.5px] tracking-wide italic transition-colors duration-200 md:text-[17.2px] md:tracking-wider">
               {servicesTitleDesc}
            </p>
            {/* Our Qualities Section */}
            <h2 className="text-text-inverse dark:text-text mb-3 text-2xl font-semibold transition-colors duration-200 md:text-3xl">
               {ourQualitiesTitle}
            </h2>
            <ul className="mb-14 flex flex-col gap-2">
               {ourQualitiesList.map((quality, index) => (
                  <li
                     key={index}
                     className="text-text-inverse dark:text-text flex items-center gap-2 transition-colors duration-200"
                  >
                     {quality.icon}
                     <span className="text-[17px] tracking-wide md:text-[18px]">
                        {quality.text}
                     </span>
                  </li>
               ))}
            </ul>
            {/* Services List Section */}
            <div className="3xl:max-w-none mx-auto mb-20 flex w-full max-w-[1100px] flex-wrap justify-center gap-8">
               {servicesList.map((service) => (
                  <ServiceCard key={service.name} service={service} />
               ))}
            </div>
            {/* Book Appointment Section */}
            <div className="flex flex-col-reverse items-center justify-center gap-12 pr-0 md:flex-row md:gap-[5.5vw] md:pr-3">
               <div className="animate-bigger-bounce aspect-square w-full max-w-[360px] select-none">
                  <img
                     src={bookAppointment.imageSrc}
                     alt=""
                     className={`h-auto w-full max-w-[360px] transition-[scale,opacity] duration-1000 ${
                        homeBookAppointmentImageLoaded
                           ? 'scale-100 opacity-100'
                           : 'scale-[0] opacity-0'
                     }`}
                     onLoad={markHomeBookAppointmentImageAsLoaded} // Trigger animation after image loads
                  />
               </div>
               <div className="flex flex-col items-center gap-4">
                  <p className="bg-light-bg dark:bg-dark-bg-card text-text px-2 py-1 text-center text-xl font-semibold tracking-[0.3px] transition-colors duration-200 md:px-3 md:text-2xl">
                     {bookAppointment.text}
                  </p>
                  <a
                     href={bookAppointment.phoneHref}
                     title="Pozovite"
                     className="bg-light-bg dark:bg-dark-bg-card text-text outline-light-bg dark:outline-dark-bg-card group flex items-center gap-2 rounded-4xl px-6 py-3 text-center text-xl font-semibold tracking-[0.3px] outline-3 outline-offset-3 transition-colors duration-200 active:brightness-95 md:text-start md:text-2xl"
                  >
                     <IoCallOutline
                        size={30}
                        className="pt-[5px] group-hover:hidden"
                     />
                     <IoCall
                        size={30}
                        className="hidden pt-[5px] group-hover:block"
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

   const { homeServicesLoadedImages, markHomeServicesImageAsLoaded } =
      useImageLoad();

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
      <div className="3xl:max-w-[280px] bg-light-bg-card dark:bg-dark-bg-card shadow-light-service-card-shadow dark:shadow-dark-service-card-shadow w-full max-w-[336px] rounded-[6px] shadow-sm transition-[box-shadow,translate,color,background-color,border-color,outline-color,text-decoration-color,fill] duration-700 hover:-translate-y-1 hover:shadow-lg">
         <div className="3xl:max-w-[280px] relative aspect-[210/155] w-full max-w-[336px] overflow-hidden shadow-sm">
            <img
               src={service.image}
               alt=""
               className={`3xl:max-w-[280px] block h-full w-full max-w-[336px] rounded-t-[6px] object-cover transition-[opacity,blur] duration-[2000ms] ease-in-out ${
                  homeServicesLoadedImages[service.name]
                     ? 'opacity-100'
                     : 'opacity-0'
               }`}
               onLoad={() => markHomeServicesImageAsLoaded(service.name)}
            />
            <div className="dark:bg-service-card-image-overlay absolute inset-0 rounded-t-[6px] transition-colors duration-200"></div>
         </div>

         <div className="text-text-inverse dark:text-text relative p-4 pt-5 pb-7 transition-colors duration-200 select-none">
            <p className="mb-[9px] text-[21px] font-semibold tracking-[0.38px]">
               {service.name}
            </p>
            <div
               ref={contentRef}
               className={`3xl:max-h-[218px] scrollbar-custom overflow-auto pr-2 tracking-[0.12px] sm:max-h-[188px]`}
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
               className={`pointer-events-none absolute bottom-[3px] left-1/2 hidden transition-opacity duration-400 sm:block xl:pointer-events-auto ${
                  showScroll
                     ? 'visibility-visible cursor-pointer opacity-100'
                     : 'visibility-hidden cursor-auto opacity-0'
               } px-1 py-2`}
            >
               <div className="animate-big-bounce h-0 w-0 border-t-5 border-r-5 border-l-5 border-transparent border-t-[#dadedf]"></div>
            </button>
         </div>
      </div>
   );
};
