import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Services from './pages/Home';
import PriceList from './pages/PriceList';
import About from './pages/About';
import Contact from './pages/Contact';
import Missing from './pages/Missing';
import Footer from './components/Footer';
import DarkModeContextProvider from './context/DarkModeContext';
import { ImageLoadProvider } from './context/ImageLoadContext';

function App() {
   return (
      <DarkModeContextProvider>
         <ImageLoadProvider>
            <Header />

            <Routes>
               <Route index element={<Services />} />
               <Route path="cenovnik" element={<PriceList />} />
               <Route path="o-nama" element={<About />} />
               <Route path="kontakt" element={<Contact />} />
               <Route path="*" element={<Missing />} />
            </Routes>

            <Footer />
         </ImageLoadProvider>
      </DarkModeContextProvider>
   );
}

export default App;
