import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Services from './pages/Home';
import PriceList from './pages/PriceList';
import About from './pages/About';
import Contact from './pages/Contact';
import Missing from './pages/Missing';
import Footer from './components/Footer';
import DarkModeContextProvider from './context/DarkModeContext';

function App() {
   return (
      <DarkModeContextProvider>
         <Header />

         <Routes>
            <Route index element={<Services />} />
            <Route path="cenovnik" element={<PriceList />} />
            <Route path="o-nama" element={<About />} />
            <Route path="kontakt" element={<Contact />} />
            <Route path="*" element={<Missing />} />
         </Routes>

         <Footer />
      </DarkModeContextProvider>
   );
}

export default App;
