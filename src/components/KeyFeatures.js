import React from 'react';

function KeyFeatures() {
  const features = [
    {
      icon: '☁️',
      title: 'Cloud Configuration',
      description: 'Build and manage your cloud infrastructure effortlessly.'
    },
    {
      icon: '⚡',
      title: 'Intelligent Troubleshooting',
      description: 'Quickly identify and resolve issues with AI-powered insights.'
    },
    {
      icon: '🛡️',
      title: 'Automated Security',
      description: 'Implement best practices and remediate vulnerabilities automatically.'
    },
    {
      icon: '💰',
      title: 'Cost Optimization',
      description: 'Identify savings opportunities and optimize your cloud spend.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Agents Capabilities</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Rigorously vetted and tested, our AI agents perform cloud management tasks with precision and care. Here are some of the key features that make them indispensable.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:bg-blue-50 hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default KeyFeatures;