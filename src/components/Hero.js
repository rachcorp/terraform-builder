import React from 'react';

function Hero() {
  return (
    <section className="bg-blue-500 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          CloudAgents : Your fleet of AI Cloud Experts
        </h1>
        <p className="text-xl mb-8">
          Manage, Secure, and Troubleshoot Your Cloud with Natural Language Commands
        </p>
        <button className="bg-yellow-400 text-blue-900 font-bold py-2 px-6 rounded-full text-lg hover:bg-yellow-300 transition duration-300">
          Start Free Trial
        </button>
      </div>
    </section>
  );
}

export default Hero;