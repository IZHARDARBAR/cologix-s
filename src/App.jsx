import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { init } from '@emailjs/browser';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTopBtn from './components/ScrollToTop'; 
import Home from './pages/Home';
import About from './pages/About';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Services from './pages/Services';
import Contact from './pages/Contact';
import CVPage from './pages/CVPage';


const ScrollToTopOnPathChange = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  
  useEffect(() => {
    // EmailJS initialization
    init("YOUR_PUBLIC_KEY"); 
  }, []);

  return (
    <Router>
      <ScrollToTopOnPathChange />
      <ScrollToTopBtn />
      
      <div className="flex flex-col min-h-screen overflow-x-hidden">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/cv/:id" element={<CVPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;