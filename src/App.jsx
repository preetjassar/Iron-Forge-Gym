import { useState } from 'react'


import './App.css'
import Calculations from "./components/Calculations";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Calculations />
      <Footer />;
    </>
  );

}

export default App;