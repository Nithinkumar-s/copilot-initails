import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import RecordsList from './pages/RecordsList';
import AddRecord from './pages/AddRecord';
import EditRecord from './pages/EditRecord';
import About from './pages/About';

export default function App() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-1">
        {isHome ? (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<p className='text-sm text-gray-500 max-w-6xl mx-auto px-4 py-8'>Page not found.</p>} />
          </Routes>
        ) : (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <Routes>
              <Route path="/records" element={<RecordsList />} />
              <Route path="/add" element={<AddRecord />} />
              <Route path="/edit/:id" element={<EditRecord />} />
              <Route path="/about" element={<About />} />
              <Route path="/" element={<Home />} />
              <Route path="*" element={<p className='text-sm text-gray-500'>Page not found.</p>} />
            </Routes>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
