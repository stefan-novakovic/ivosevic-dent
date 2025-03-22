import { useNavigate, NavigateFunction } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const LogoWrapper = () => {
   const navigate: NavigateFunction = useNavigate();

   return (
      <div
         onClick={() => navigate('/')}
         className="w-[204px] md:w-56 aspect-[224/52.59] cursor-pointer"
      >
         <img src={logo} alt="" className="w-[204px] md:w-56 h-auto" />
      </div>
   );
};
export default LogoWrapper;
