import { HomeData } from '../data/HomeData';
import { useImageLoad } from '../context/ImageLoadContext';

const Hero = () => {
   const { hero } = HomeData();
   const { heroImageLoaded, markHeroImageAsLoaded } = useImageLoad();

   return (
      <div
         style={{
            backgroundImage: `url(${hero.heroLowResSrc})`
         }}
         className="portrait:h-[calc((100vh-67px)/1.2625)] landscape:h-auto md:portrait:h-[calc(100vh-78px)] md:landscape:h-[calc(100vh-78px)] md:min-h-[413px] select-none bg-light-bg/5 dark:bg-dark-bg/5 transition-colors duration-200 overflow-hidden relative bg-[77%_33%] md:bg-[66.5%_33%] bg-no-repeat bg-cover"
      >
         {/* Hero Image */}
         <img
            src={hero.heroSrc}
            alt="Hero Image"
            className={`w-full h-full object-cover object-[77%_20%] md:object-[66.5%_20%] transition-[blur,scale,rotate,opacity] duration-[1250ms] ${
               heroImageLoaded
                  ? 'blur-0 scale-100 rotate-0 opacity-100'
                  : 'blur-lg scale-125 rotate-3 opacity-0'
            }`}
            onLoad={markHeroImageAsLoaded} // Trigger animation after image loads
         />
         <h1
            className={`absolute inset-0 flex flex-col gap-2 xs:gap-3 md:gap-7 xl:gap-9 justify-center items-center text-center text-text z-50 tracking-normal md:tracking-wider xl:tracking-widest [text-shadow:_2px_3px_6px_rgb(0_0_0_/_70%)] p-4 md:p-10`}
         >
            <span
               className={`portrait:text-3xl landscape:text-3xl xs:portrait:text-3xl xs:landscape:text-4xl md:portrait:text-6xl md:landscape:text-5xl xl:portrait:text-[75px] xl:landscape:text-[75px] 2xl:portrait:text-[75px] 2xl:landscape:text-[85px] font-bold transition-[opacity,translate,scale] duration-1000 ${
                  heroImageLoaded
                     ? 'opacity-100 translate-y-0 scale-100'
                     : 'opacity-0 -translate-y-7 scale-90'
               }`}
            >
               STOMATOLOŠKA ORDINACIJA
            </span>
            <span
               className={`portrait:text-6xl landscape:text-6xl xs:portrait:text-6xl xs:landscape:text-7xl md:portrait:text-9xl md:landscape:text-8xl xl:portrait:text-[136px] xl:landscape:text-[136px] 2xl:portrait:text-[136px] 2xl:landscape:text-[148px] font-bold transition-[opacity,translate,scale] duration-[1100ms] ${
                  heroImageLoaded
                     ? 'opacity-100 translate-y-0 scale-100'
                     : 'opacity-0 translate-y-7 scale-90'
               }`}
            >
               IVOŠEVIĆ
            </span>
         </h1>

         {/* Background Overlay */}
         <div
            className={`bg-light-hero-overlay dark:bg-dark-hero-overlay absolute inset-0 z-10 transition-all duration-[1250ms] ${
               heroImageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
         ></div>
      </div>
   );
};

export default Hero;
