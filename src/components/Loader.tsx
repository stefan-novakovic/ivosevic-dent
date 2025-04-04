import { use } from 'react';
import BounceLoader from 'react-spinners/BounceLoader';
import { themeColors } from '../style/themeColors';
import { DarkModeContext } from '../context/DarkModeContext';

const Loader = () => {
   const { darkMode } = use(DarkModeContext);
   return (
      // header height: 67.89px, md: 78.59px
      <div className="w-full h-[calc(100vh-67.89px)] md:h-[calc(100vh-78.59px)] grid place-content-center">
         <BounceLoader
            color={darkMode ? themeColors['dark-bg'] : themeColors['light-bg']}
            size={72}
            aria-label="Loading Spinner"
            data-testid="loader"
            speedMultiplier={0.725}
         />
      </div>
   );
};
export default Loader;
