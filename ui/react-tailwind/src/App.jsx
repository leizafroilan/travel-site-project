import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About'
import CarouselComponent from './components/Carousel';
import Application from './components/Application';



function App() {

  return (
    <div className="relative h-[500px]">
      
        <CarouselComponent />
        <Header />
      
        <div className="z-10 relative" 
            style={{ backgroundImage: 'linear-gradient(to left, rgba(255, 255, 255, 0.75), rgba(255, 192, 203, 0.75))' }}>      
          <Home />
          <Application />
          <About />
          <Footer />
        </div>
   
    </div>
  );
}

export default App;
