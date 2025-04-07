import { AboutData } from '../data/AboutData';
import PageLayout from '../layout/PageLayout';
import { useImageLoad } from '../context/ImageLoadContext';

const About = () => {
   const { title, professionalTrainingTitle, staff } = AboutData();
   const { aboutDocLoadedImages, markAboutDocImageAsLoaded } = useImageLoad();

   return (
      <PageLayout>
         <h1 className="text-text-inverse dark:text-text mb-12 text-3xl font-semibold transition-colors duration-200 md:text-4xl lg:mb-8">
            {title}
         </h1>
         <div className="flex max-w-[1780px] flex-col gap-15 lg:gap-16">
            {staff.map((staffMember) => (
               <div
                  key={staffMember.name}
                  id={staffMember.name.split(' ')[0].toLowerCase()}
                  className="flex flex-col items-center gap-4 lg:flex-row lg:items-start lg:gap-8"
               >
                  <div className="lg:dark:bg-dark-doc-img-bg aspect-square w-full max-w-xl rounded-lg bg-transparent lg:w-[265px] lg:max-w-none lg:min-w-[265px] lg:transition-colors lg:duration-200 xl:w-[323px] xl:min-w-[323px]">
                     <div
                        className="border-light-bg dark:border-text hover:bg-light-bg dark:hover:bg-dark-doc-img-hover relative aspect-square w-full max-w-xl overflow-hidden rounded-lg lg:w-[265px] lg:max-w-none lg:min-w-[265px] lg:border lg:shadow-[0px_0px_10px_-6px_rgba(0,0,0,0.75)] xl:w-[323px] xl:min-w-[323px] lg:dark:shadow-[0px_0px_12px_-6px_white]"
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
                           className={`aspect-square w-full max-w-xl transition-[opacity,scale,translate] duration-1000 ease-in-out lg:w-[265px] lg:max-w-none lg:min-w-[265px] xl:w-[323px] xl:min-w-[323px] ${
                              aboutDocLoadedImages[staffMember.name]
                                 ? 'translate-y-0 scale-100 opacity-100'
                                 : 'translate-y-[calc(100%+1px)] scale-50 opacity-50'
                           }`}
                        />
                        <div className="lg:dark:bg-dark-doc-img-overlay absolute inset-0 rounded-lg transition-colors duration-200"></div>
                     </div>
                  </div>

                  <div className="text-text-inverse dark:text-text transition-colors duration-200">
                     <h2 className="mb-1 text-2xl font-semibold tracking-[0.38px]">
                        Dr {staffMember.name}
                     </h2>
                     <h3 className="mb-4 tracking-[1px] lg:text-lg">
                        {staffMember.degree}
                     </h3>
                     <p className="mb-[10px] tracking-wide lg:text-lg">
                        {staffMember.bio}
                     </p>
                     <h4 className="mb-1 text-xl font-semibold tracking-[0.38px]">
                        {professionalTrainingTitle}:
                     </h4>
                     <p className="tracking-wide lg:text-lg">
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
