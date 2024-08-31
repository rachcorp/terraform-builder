import React from 'react';

function Testimonials() {
  const testimonials = [
    { name: 'John Doe', role: 'CTO, Tech Startup', quote: 'asecurecloud has revolutionized our cloud management. The AI agents are incredibly efficient and have saved us countless hours.' },
    { name: 'Jane Smith', role: 'DevOps Lead, Enterprise Corp', quote: 'The level of automation and intelligence provided by asecurecloud is unmatched. It\'s become an indispensable tool for our team.' }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;