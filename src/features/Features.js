import React from 'react';

const features = [
  { title: 'Maximize Attributed Sales', description: 'Maximize your PPC sales while maintaining minimal ACOS.', icon: '🚀' },
  { title: 'Detailed Analytics', description: 'Our PPC experts will use detailed analytics in order to enhance your campaigns.', icon: '📊' },
  { title: 'Keyword Optimization', description: 'Optimize your keywords to increase your visibility and sales.', icon: '🔍' },
];

const Features = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold">What We Do</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded shadow">
              <div className="text-4xl">{feature.icon}</div>
              <h3 className="mt-4 text-2xl font-bold">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
