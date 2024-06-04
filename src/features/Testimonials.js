import React from 'react';

const testimonials = [
  { name: 'Jane Doe', text: 'Sellozo has transformed our Amazon sales!', image: 'https://via.placeholder.com/100' },
  { name: 'John Smith', text: 'We have seen a significant increase in sales since using Sellozo.', image: 'https://via.placeholder.com/100' },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold">Testimonials</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded shadow">
              <img src={testimonial.image} alt={testimonial.name} className="mx-auto rounded-full" />
              <p className="mt-4 text-xl italic">"{testimonial.text}"</p>
              <p className="mt-2 text-gray-700 font-bold">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
