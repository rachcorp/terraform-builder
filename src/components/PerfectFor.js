import React from 'react';

function PerfectFor() {
  const targets = [
    'Cloud and DevOps Engineers',
    'IT Managers',
    'Startups and Enterprises',
    'Managed Service Providers'
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Who is this for?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {targets.map((target, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{target}</h3>
              <p className="text-gray-600">Optimize cloud infrastructure and streamline operations with AI-powered solutions.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PerfectFor;