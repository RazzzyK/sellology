import React from 'react';
import Footer from '../features/Footer';

const services = [
  { 
    title: 'Maximize Attributed Sales', 
    description: 'Maximize your PPC sales while maintaining minimal ACOS. Our strategies are tailored to ensure the best results.', 
    icon: '🚀',
    details: 'We leverage data-driven strategies and advanced algorithms to boost your sales while keeping your Advertising Cost of Sales (ACOS) low. Our team continuously monitors and adjusts your campaigns for optimal performance.',
    benefits: [
      'Increased ROI on ad spend',
      'Targeted ad campaigns',
      'Continuous optimization and monitoring'
    ]
  },
  { 
    title: 'Detailed Analytics', 
    description: 'Our PPC experts will use detailed analytics in order to enhance your campaigns. Data is the key to success.', 
    icon: '📊',
    details: 'Our experts dive deep into analytics to uncover insights that can drive your campaigns to new heights. We use these insights to refine and perfect your advertising strategies.',
    benefits: [
      'Comprehensive campaign analysis',
      'Actionable insights',
      'Real-time performance tracking'
    ]
  },
  { 
    title: 'Keyword Optimization', 
    description: 'Optimize your keywords to increase your visibility and sales. Right keywords are crucial.', 
    icon: '🔍',
    details: 'Our keyword optimization service ensures that your ads appear in front of the right audience. We continuously refine your keyword strategy to keep up with market trends and competitor actions.',
    benefits: [
      'Higher search rankings',
      'Increased visibility',
      'More targeted traffic'
    ]
  },
];

const Services = () => {
  return (
    <div>
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold">Services Offered</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded shadow">
                <div className="text-4xl">{service.icon}</div>
                <h3 className="mt-4 text-2xl font-bold">{service.title}</h3>
                <p className="mt-2 text-gray-600">{service.description}</p>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded" onClick={() => window.location.href = `#service-${index}`}>Learn More</button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          {services.map((service, index) => (
            <div key={index} id={`service-${index}`} className="mb-16">
              <div className="text-center">
                <div className="text-4xl">{service.icon}</div>
                <h3 className="mt-4 text-3xl font-bold">{service.title}</h3>
                <p className="mt-2 text-xl text-gray-600">{service.details}</p>
              </div>
              <div className="pt-9">
                <h4 className="text-2xl font-bold text-center">Benefits</h4>
                <ul className="list-disc list-inside mt-4 text-gray-600 text-center">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx}>{benefit}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
