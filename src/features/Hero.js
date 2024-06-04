import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-blue-600 text-white text-center py-20">
      <h1 className="text-5xl font-bold">Maximize Your E-Commerce Sales</h1>
      <p className="mt-4 text-xl">Optimize your ads for eCommerce platforms like Amazon, Walmart and much more...</p>
      <p className="mt-4 text-xl">Work with our PPC experts to grow your business!</p>
      <Link to="/services"><button className="mt-6 bg-white text-blue-600 px-6 py-3 rounded hover:bg-blue-100">
      
              Learn More
            
        
        </button></Link>
    </section>
  );
};

export default Hero;