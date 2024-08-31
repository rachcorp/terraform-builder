import React, { useState } from 'react';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { 
      question: 'What specific cloud tasks can the AI agents perform?', 
      answer: 'Our AI agents can handle a wide range of tasks including resource tagging, security issue resolution, incident troubleshooting, cost optimization, compliance checks, and performance monitoring. The capabilities are continuously expanding, and we can provide a detailed list of current functionalities upon request.'
    },
    { 
      question: 'How does the token pricing structure work?', 
      answer: 'Each task performed by an AI agent costs a specific number of tokens. You can purchase tokens as needed or in bulk for discounted rates. One step of a task typically equals one token. We also offer an Enterprise plan with custom pricing for high-volume users.'
    },
    { 
      question: 'How do AI agents compare to human consultants?', 
      answer: 'Our AI agents are designed to perform discrete cloud tasks with high efficiency and accuracy. While they may not replace human consultants entirely, they can handle many routine tasks faster and more cost-effectively, allowing human experts to focus on more complex strategic work.'
    },
    { 
      question: 'How is data privacy and security maintained?', 
      answer: 'We take data privacy and security very seriously. AI agents operate with specific, limited permissions, and all actions are logged and auditable. We employ encryption, access controls, and comply with industry-standard security protocols to protect your data.'
    },
    { 
      question: 'Can I customize the AI agents for my organization?', 
      answer: 'Yes, especially with our Enterprise plan. You can customize agents to fit your specific workflows and requirements. This includes tailoring permissions, defining custom tasks, and integrating with your existing tools and processes.'
    },
 
    { 
      question: 'Is there a way to monitor and audit the actions performed by AI agents?', 
      answer: 'Yes, all actions performed by AI agents are logged and can be audited. We provide a comprehensive dashboard where you can view agent activities, track token usage, and generate detailed reports for compliance and management purposes.'
    },
    { 
      question: 'What kind of support is available if an AI agent encounters an issue it can\'t resolve?', 
      answer: 'We offer multiple tiers of support. For issues that AI agents can\'t resolve, our human expert team is available to step in. Enterprise customers receive priority support and can have dedicated account managers to ensure rapid resolution of complex problems.'
    },
    { 
      question: 'How often are the AI agents updated to stay current with cloud technologies?', 
      answer: 'Our AI agents are continuously updated to stay current with the latest cloud technologies, security practices, and industry standards. We release updates regularly, ensuring that our agents are always equipped with the most up-to-date knowledge and capabilities.'
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