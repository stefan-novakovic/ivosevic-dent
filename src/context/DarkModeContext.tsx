import { createContext, ReactNode, useState, useLayoutEffect } from 'react';

type DarkModeContextType = {
   darkMode: boolean;
   setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
   toggleDarkMode: () => void;
};

export const DarkModeContext = createContext<DarkModeContextType>({
   darkMode: false,
   setDarkMode: () => {},
   toggleDarkMode: () => {}
});

const DarkModeContextProvider = ({
   children
}: {
   children?: ReactNode | ReactNode[];
}) => {
   const [darkMode, setDarkMode] = useState<boolean>(
      JSON.parse(localStorage.getItem('darkMode') || 'false')
   );

   const toggleDarkMode = () => {
      setDarkMode((prev) => {
         const newMode = !prev;
         localStorage.setItem('darkMode', JSON.stringify(newMode));
         return newMode;
      });
   };

   useLayoutEffect(() => {
      if (darkMode) {
         document.documentElement.classList.add('dark');
      } else {
         document.documentElement.classList.remove('dark');
      }
   }, [darkMode]);
   return (
      <DarkModeContext.Provider
         value={{ darkMode, setDarkMode, toggleDarkMode }}
      >
         {children}
      </DarkModeContext.Provider>
   );
};

export default DarkModeContextProvider;
