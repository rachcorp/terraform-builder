import React from 'react';
import './HowItWorks.css';

function HowItWorks() {
  const steps = [
    { title: 'Input Your Request', description: 'Describe your cloud management needs or issues you want to address.' },
    { title: 'AI Analysis', description: 'Our AI agents analyze your infrastructure and identify optimization opportunities.' },
    { title: 'Review & Approve', description: 'Review the proposed changes and approve the actions to be taken.' },
    { title: 'Execution & Results', description: 'AI agents implement the approved changes and provide detailed reports.' }
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How do cloudagents Work?</h2>
        <div className="relative steps-container">
          {steps.map((step, index) => (
            <div key={index} className={`step mb-16 ${index % 2 === 0 ? 'step-left' : 'step-right'}`}>
              <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className="w-1/2 px-4">
                  <div className="flex items-start mb-4">
                    <div className="number-circle bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </div>
                <div className="w-1/2 px-4">
                  <div className="bg-gray-300 rounded-lg aspect-video flex items-center justify-center">
                    <span className="text-gray-500">Image Placeholder {index + 1}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;