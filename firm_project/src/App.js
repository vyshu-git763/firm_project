import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Secretarial from './components/secretarial';
import Corporaterestructuring from './components/corporate-restructuring';
import Audit from './components/audit';
import Insolvency from './components/insolvency-bankruptcy';
import Sebi from './components/sebi';
import AboutUs from './components/AboutUs';
import Privateplacement from './components/private-placement';
import ContactUs from './components/ContactUs';
import Research from './components/Research'; // Import the new Research component
import Navbar from './components/Navbar';
function App() {
  return (
    <Router>
     <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/secretarial" element={<Secretarial />} />
        <Route path="/corporate-restructuring" element={<Corporaterestructuring/>} />
        <Route path="/audit" element={<Audit />} />
        <Route path="/private-placement" element={<Privateplacement />} />
        <Route path="/insolvency-bankruptcy" element={<Insolvency />} />
        <Route path="/sebi" element={<Sebi />} />
        <Route path="/AboutUs"element={<AboutUs />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/research" element={<Research />} />
      </Routes>
    </Router>
  );
}
export default App;
