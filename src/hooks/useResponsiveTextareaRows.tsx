import { useState, useEffect } from 'react';

const getInitialRows = () => {
   const width = typeof window !== 'undefined' ? window.innerWidth : 0;

   if (width >= 1600) return 5;
   if (width >= 1440) return 2;
   return 5;
};

const useResponsiveTextareaRows = () => {
   const [rows, setRows] = useState<number>(getInitialRows); // no blink on mount

   useEffect(() => {
      const updateRows = () => {
         const width = window.innerWidth;

         if (width >= 1600) {
            setRows(5);
         } else if (width >= 1440) {
            setRows(2);
         } else {
            setRows(5);
         }
      };

      window.addEventListener('resize', updateRows);
      return () => window.removeEventListener('resize', updateRows);
   }, []);

   return rows;
};

export default useResponsiveTextareaRows;
