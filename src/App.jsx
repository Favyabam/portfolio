import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Works from './pages/Works';
import Contact from './pages/Contact';
import Footer from './components/Footer';


const App = () => {
  return (
    <BrowserRouter>
      <div className='min-h-screen flex flex-col'>
        <Navbar />
        <main className='grow pt-17'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/works' element={<Works />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
