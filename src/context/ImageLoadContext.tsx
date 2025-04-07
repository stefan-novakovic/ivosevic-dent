import { createContext, useContext, useState, ReactNode } from 'react';

type ImageLoadContextType = {
   homeServicesLoadedImages: Record<string, boolean>;
   markHomeServicesImageAsLoaded: (name: string) => void;
   heroImageLoaded: boolean;
   markHeroImageAsLoaded: () => void;
   homeBookAppointmentImageLoaded: boolean;
   markHomeBookAppointmentImageAsLoaded: () => void;
   aboutDocLoadedImages: Record<string, boolean>;
   markAboutDocImageAsLoaded: (name: string) => void;
};

const ImageLoadContext = createContext<ImageLoadContextType | undefined>(
   undefined
);

export const ImageLoadProvider = ({ children }: { children: ReactNode }) => {
   const [heroImageLoaded, setHeroImageLoaded] = useState<boolean>(false);
   const [aboutDocLoadedImages, setAboutDocLoadedImages] = useState<
      Record<string, boolean>
   >({});
   const [homeServicesLoadedImages, setHomeServicesLoadedImages] = useState<
      Record<string, boolean>
   >({});
   const [homeBookAppointmentImageLoaded, setHomeBookAppointmentImageLoaded] =
      useState<boolean>(false);

   const markHomeServicesImageAsLoaded = (name: string) => {
      setHomeServicesLoadedImages((prev) => ({ ...prev, [name]: true }));
   };

   const markHeroImageAsLoaded = () => {
      setHeroImageLoaded(true);
   };

   const markAboutDocImageAsLoaded = (name: string) => {
      setAboutDocLoadedImages((prev) => ({ ...prev, [name]: true }));
   };

   const markHomeBookAppointmentImageAsLoaded = () => {
      setHomeBookAppointmentImageLoaded(true);
   };

   return (
      <ImageLoadContext.Provider
         value={{
            homeServicesLoadedImages,
            markHomeServicesImageAsLoaded,
            heroImageLoaded,
            markHeroImageAsLoaded,
            aboutDocLoadedImages,
            markAboutDocImageAsLoaded,
            homeBookAppointmentImageLoaded,
            markHomeBookAppointmentImageAsLoaded
         }}
      >
         {children}
      </ImageLoadContext.Provider>
   );
};

export const useImageLoad = () => {
   const context = useContext(ImageLoadContext);
   if (!context) {
      throw new Error('useImageLoad must be used within an ImageLoadProvider');
   }
   return context;
};
