import React from 'react';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: 'Plan 1',
    price: '$249/month',
    discount: 'Price per SKU: $4.98',
    skus: 'Up to 50 SKUs',
  },
  {
    name: 'Plan 2',
    price: '$449/month',
    discount: 'Price per SKU: $4.49',
    skus: 'Up to 100 SKUs',
  },
  {
    name: 'Plan 3',
    price: '$799/month',
    discount: 'Price per SKU: $3.99',
    skus: 'Up to 200 SKUs',
  },
  {
    name: 'Plan 4',
    price: '$1,749/month',
    discount: 'Price per SKU: $3.49',
    skus: 'Up to 500 SKUs',
  },
  {
    name: 'Plan 5',
    price: 'Inquire for pricing',
    discount: 'Schedule a Consultation with an Expert',
    skus: '500+ SKUs',
  },
];

const Pricing = () => {
  return (
    <div>
      <section className="bg-blue-600 text-white text-center py-20">
        <h1 className="text-5xl font-bold">Check out our pricing options!</h1>
        <p className="mt-4 text-xl">Reach out to one of our experts to assist with any pricing inquiries!</p>
        <Link to="/contact"><button className="mt-6 bg-white text-blue-600 px-6 py-3 rounded hover:bg-blue-100">
          
              Contact Us
            
        </button></Link>
      </section>
      <section className="py-20 bg-gray-100 pb-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.slice(0, 3).map((plan, index) => (
              <div key={index} className="bg-white p-6 rounded shadow">
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <p className="text-xl mb-4">{plan.price}</p>
                <p className="text-green-600 mb-4 text-xs italic">{plan.discount}</p>
                <p className="text-gray-600 mb-6">{plan.skus}</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded">Subscribe</button>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center my-8 ">
            {plans.slice(3).map((plan, index) => (
              <div key={index + 3} className="bg-white p-6 rounded shadow">
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <p className="text-xl mb-4">{plan.price}</p>
                <p className="text-green-600 mb-4 text-xs italic">{plan.discount}</p>
                <p className="text-gray-600 mb-6">{plan.skus}</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded">Subscribe</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
