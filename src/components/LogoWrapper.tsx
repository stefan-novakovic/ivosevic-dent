import { useState } from 'react';
import { useNavigate, NavigateFunction } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const LogoWrapper = () => {
   const [isLoaded, setIsLoaded] = useState<boolean>(false);
   const navigate: NavigateFunction = useNavigate();

   return (
      <div
         onClick={() => navigate('/')}
         className={`w-[204px] md:w-56 aspect-[224/52.59] cursor-pointer transition-[translate] duration-[1100ms] ease-in-out ${
            isLoaded
               ? 'translate-x-0'
               : '-translate-x-[calc(100%+8px+1px)] md:-translate-x-[calc(100%+24px+1px)]'
         }`}
      >
         <img
            src={logo}
            alt=""
            onLoad={() => setIsLoaded(true)}
            className={`w-[204px] md:w-56 h-auto`}
         />
      </div>
   );
};

export default LogoWrapper;
