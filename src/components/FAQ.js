import React, { useState } from 'react';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { 
      question: 'How does the token system work?', 
      answer: 'Each task in asecurecloud costs a specific number of tokens. You can purchase tokens as needed or subscribe to a plan with a monthly token allowance. This system ensures you only pay for the services you use.'
    },
    { 
      question: 'Is my data secure?', 
      answer: 'Yes, we take data security very seriously. All data is encrypted in transit and at rest, and we comply with industry-standard security protocols.'
    },
    { 
      question: 'Can asecurecloud integrate with my existing tools?', 
      answer: 'Yes, asecurecloud is designed to integrate seamlessly with a wide range of existing cloud management and DevOps tools. We provide APIs and plugins for popular platforms to ensure smooth integration.'
    },
    { 
      question: 'What kind of support do you offer?', 
      answer: 'We offer multiple tiers of support, including email support for all plans, priority support for Pro plans, and dedicated account managers for Enterprise customers. Our team is available to assist with technical issues, best practices, and optimization strategies.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                className="w-full text-left p-4 focus:outline-none flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold">{faq.question}</span>
                <span className="transform transition-transform duration-200">
                  {openIndex === index ? '▲' : '▼'}
                </span>
              </button>
              {openIndex === index && (
                <div className="p-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
