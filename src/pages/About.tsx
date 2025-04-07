import { AboutData } from '../data/AboutData';
import PageLayout from '../layout/PageLayout';
import { useImageLoad } from '../context/ImageLoadContext';

const About = () => {
   const { title, professionalTrainingTitle, staff } = AboutData();
   const { aboutDocLoadedImages, markAboutDocImageAsLoaded } = useImageLoad();

   return (
      <PageLayout>
         <h1 className="text-3xl md:text-4xl font-semibold mb-12 lg:mb-8 text-text-inverse dark:text-text transition-colors duration-200">
            {title}
         </h1>
         <div className="flex flex-col gap-15 lg:gap-16 max-w-[1780px]">
            {staff.map((staffMember) => (
               <div
                  key={staffMember.name}
                  id={staffMember.name.split(' ')[0].toLowerCase()}
                  className="flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-8"
               >
                  <div className="w-full aspect-square max-w-xl lg:w-[265px] lg:min-w-[265px] lg:max-w-none xl:w-[323px] xl:min-w-[323px] bg-transparent rounded-lg lg:dark:bg-dark-doc-img-bg lg:transition-colors lg:duration-200">
                     <div
                        className="w-full aspect-square max-w-xl lg:w-[265px] lg:min-w-[265px] lg:max-w-none xl:w-[323px] xl:min-w-[323px] lg:border lg:shadow-[0px_0px_10px_-6px_rgba(0,0,0,0.75)] lg:dark:shadow-[0px_0px_12px_-6px_white] border-light-bg dark:border-text rounded-lg overflow-hidden hover:bg-light-bg dark:hover:bg-dark-doc-img-hover relative"
                        style={{
                           transitionProperty: 'border-color, background-color',
                           transitionDuration: '300ms, 300ms'
                        }}
                     >
                        <img
                           src={staffMember.image}
                           onLoad={() =>
                              markAboutDocImageAsLoaded(staffMember.name)
                           }
                           alt=""
                           className={`w-full max-w-xl lg:w-[265px] lg:min-w-[265px] lg:max-w-none xl:w-[323px] xl:min-w-[323px] aspect-square transition-[opacity,scale,translate] duration-1000 ease-in-out ${
                              aboutDocLoadedImages[staffMember.name]
                                 ? 'opacity-100 scale-100 translate-y-0'
                                 : 'opacity-50 scale-50 translate-y-[calc(100%+1px)]'
                           }`}
                        />
                        <div className="absolute rounded-lg inset-0 lg:dark:bg-dark-doc-img-overlay transition-colors duration-200"></div>
                     </div>
                  </div>

                  <div className="text-text-inverse dark:text-text transition-colors duration-200">
                     <h2 className="text-2xl tracking-[0.38px] font-semibold mb-1">
                        Dr {staffMember.name}
                     </h2>
                     <h3 className="lg:text-lg tracking-[1px] mb-4">
                        {staffMember.degree}
                     </h3>
                     <p className="lg:text-lg tracking-wide mb-[10px]">
                        {staffMember.bio}
                     </p>
                     <h4 className="text-xl tracking-[0.38px] font-semibold mb-1">
                        {professionalTrainingTitle}:
                     </h4>
                     <p className="lg:text-lg tracking-wide">
                        {staffMember.professionalTraining}
                     </p>
                  </div>
               </div>
            ))}
         </div>
      </PageLayout>
   );
};
export default About;
