import React from 'react';
import Hero from '../features/Hero';
import Features from '../features/Features';
import Testimonials from '../features/Testimonials';

const Home = () => {
  return (
    <div className="App">
      <Hero />
      <Features />
      <Testimonials />
    </div>
  );
}

export default Home;

