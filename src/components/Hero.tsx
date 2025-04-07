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
         className="bg-light-bg/5 dark:bg-dark-bg/5 relative overflow-hidden bg-cover bg-[77%_33%] bg-no-repeat transition-colors duration-200 select-none md:min-h-[413px] md:bg-[66.5%_33%] portrait:h-[calc((100vh-67px)/1.2625)] md:portrait:h-[calc(100vh-78px)] landscape:h-auto md:landscape:h-[calc(100vh-78px)]"
      >
         {/* Hero Image */}
         <img
            src={hero.heroSrc}
            alt="Hero Image"
            className={`h-full w-full object-cover object-[77%_20%] transition-[blur,scale,rotate,opacity] duration-[1250ms] md:object-[66.5%_20%] ${
               heroImageLoaded
                  ? 'blur-0 scale-100 rotate-0 opacity-100'
                  : 'scale-125 rotate-3 opacity-0 blur-lg'
            }`}
            onLoad={markHeroImageAsLoaded} // Trigger animation after image loads
         />
         <h1
            className={`xs:gap-3 text-text absolute inset-0 z-50 flex flex-col items-center justify-center gap-2 p-4 text-center tracking-normal [text-shadow:_2px_3px_6px_rgb(0_0_0_/_70%)] md:gap-7 md:p-10 md:tracking-wider xl:gap-9 xl:tracking-widest`}
         >
            <span
               className={`xs:portrait:text-3xl xs:landscape:text-4xl font-bold transition-[opacity,translate,scale] duration-1000 portrait:text-3xl md:portrait:text-6xl xl:portrait:text-[75px] 2xl:portrait:text-[75px] landscape:text-3xl md:landscape:text-5xl xl:landscape:text-[75px] 2xl:landscape:text-[85px] ${
                  heroImageLoaded
                     ? 'translate-y-0 scale-100 opacity-100'
                     : '-translate-y-7 scale-90 opacity-0'
               }`}
            >
               STOMATOLOŠKA ORDINACIJA
            </span>
            <span
               className={`xs:portrait:text-6xl xs:landscape:text-7xl font-bold transition-[opacity,translate,scale] duration-[1100ms] portrait:text-6xl md:portrait:text-9xl xl:portrait:text-[136px] 2xl:portrait:text-[136px] landscape:text-6xl md:landscape:text-8xl xl:landscape:text-[136px] 2xl:landscape:text-[148px] ${
                  heroImageLoaded
                     ? 'translate-y-0 scale-100 opacity-100'
                     : 'translate-y-7 scale-90 opacity-0'
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
