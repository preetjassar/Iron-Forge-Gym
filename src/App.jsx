import { useState } from 'react'


import './App.css'
import Calculations from "./components/Calculations";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import About from './components/About';
function App() {
  return (
    <>
      <Navbar />
      <Testimonials />



      <Contact />

      <Footer />;
    </>
  );

}

export default App;