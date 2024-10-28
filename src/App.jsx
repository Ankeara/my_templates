import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './components/home/Home';
import About from './components/about/About';
import Mobile from './components/mobile/Mobile';
import Website from './components/website/Website';
import './App.css';

function App() {
  const location = useLocation();

  const titles = {
  '/': 'Home -- Website And Mobile template for creator and designer',
  '/about': 'About Me -- Project designer',
  '/mobile': 'Mobile -- Project designer',
  '/website': 'Website -- Project designer',
};

useEffect(() => {
  document.title = titles[location.pathname] || 'Default Title';
}, [location]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/mobile" element={<Mobile />} />
      <Route path="/website" element={<Website />} />
    </Routes>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
