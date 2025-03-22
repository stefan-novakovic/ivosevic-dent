import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Services from './pages/Services';
import PriceList from './pages/PriceList';
import About from './pages/About';
import Contact from './pages/Contact';
import Missing from './pages/Missing';

function App() {
   return (
      <>
         <Header />

         <Routes>
            <Route index element={<Services />} />
            <Route path="cenovnik" element={<PriceList />} />
            <Route path="o-nama" element={<About />} />
            <Route path="kontakt" element={<Contact />} />
            <Route path="*" element={<Missing />} />
         </Routes>
      </>
   );
}

export default App;
