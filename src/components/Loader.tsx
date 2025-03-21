import BounceLoader from 'react-spinners/BounceLoader';

const themeColors: { [key: string]: string } = {
   'light-primary': '#509bd3',
   whitesmoke: '#f5f5f5'
};

const Loader = () => {
   return (
      // header height: 61.31px, md: 78.59px
      <div className="w-full h-[calc(100vh-61.31px)] md:h-[calc(100vh-78.59px)] grid place-content-center">
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
