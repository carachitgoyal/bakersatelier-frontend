import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Footer from './Components/Footer/Footer';
import Items from './Pages/Items';
import UploadContent from './Pages/UploadContent';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:category" element={<Items />} />
        <Route path="/admin/upload-content" element={<UploadContent />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
