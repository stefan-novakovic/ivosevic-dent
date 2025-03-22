import BounceLoader from 'react-spinners/BounceLoader';
import { themeColors } from '../style/themeColors';

const Loader = () => {
   return (
      // header height: 67.89px, md: 78.59px
      <div className="w-full h-[calc(100vh-67.89px)] md:h-[calc(100vh-78.59px)] grid place-content-center">
         <BounceLoader
            // loading={loading}
            color={themeColors['light-primary']}
            size={72}
            aria-label="Loading Spinner"
            data-testid="loader"
            speedMultiplier={0.725}
         />
      </div>
   );
};
export default Loader;
