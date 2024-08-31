import React, { useState } from 'react';

function Pricing() {
  const [isTokenSectionOpen, setIsTokenSectionOpen] = useState(false);

  const plans = [
    { name: 'Basic', price: '$1/token', features: ['Start with 3 free tokens', 'Pay per use','Email support'] },
    { name: 'Pro', price: '$49/month', features: ['50 tokens', '0.5$ per additional token', 'Priority support', 'Custom agent requests'] },
    { name: 'Enterprise', price: 'Talk to us', features: ['Custom AI agent development', 'Dedicated account manager', 'Direct Chat Access to Dev', 'Dedicated deployment option'] }
  ];

  const tokenExamples = [
    { step: 'Step 1', content: 'List resources without tags', color: 'bg-blue-100 border-blue-300' },
    { step: 'Step 2', content: 'Propose tags for each resource', color: 'bg-green-100 border-green-300' },
    { step: 'Step 3', content: 'Implement tagging for all resources', color: 'bg-purple-100 border-purple-300' },
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Simple, Transparent Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                plan.name === 'Pro' ? 'border-4 border-blue-500 relative overflow-hidden' : ''
              }`}
            >
              {plan.name === 'Pro' && (
                <div className="absolute top-0 right-0 bg-blue-500 text-white py-1 px-4 transform rotate-45 translate-x-8 -translate-y-4">
                  Most Popular
                </div>
              )}
              <h3 className={`text-2xl font-semibold mb-4 ${plan.name === 'Pro' ? 'text-blue-500' : ''}`}>{plan.name}</h3>
              <p className="text-3xl font-bold mb-6">{plan.price}</p>
              <ul className="mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="mb-2 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-2 px-4 rounded-full font-bold transition-colors duration-300 ${
                plan.name === 'Pro' 
                  ? 'bg-blue-500 text-white hover:bg-blue-600' 
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}>
                Choose Plan
              </button>
            </div>
          ))}
        </div>
        <div className="mt-16">
          <button
            onClick={() => setIsTokenSectionOpen(!isTokenSectionOpen)}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg font-bold transition-colors duration-300 hover:bg-blue-600 flex justify-between items-center"
          >
            <span>Understanding Token Structure</span>
            <svg
              className={`w-6 h-6 transform transition-transform duration-300 ${isTokenSectionOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          
          {isTokenSectionOpen && (
            <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
              <p className="mb-8 max-w-2xl mx-auto">
                Tokens represent individual steps in an AI agent's plan. Each token is a discrete action that the agent takes to complete a task. Here's an example of how an AI agent might use tokens to tag resources in an account:
              </p>
              <div className="space-y-6 max-w-3xl mx-auto">
                {tokenExamples.map((example, index) => (
                  <div key={index} className={`p-4 rounded-lg border-2 ${example.color}`}>
                    <h4 className="font-semibold mb-2">{example.step}</h4>
                    <p className="text-gray-700">{example.content}</p>
                  </div>
                ))}
              </div>
              <div className="mt-12 text-center">
                <p className="text-lg font-semibold mb-4">Token Usage Example: Resource Tagging</p>
                <div className="inline-flex items-center bg-gray-100 rounded-full px-4 py-2 shadow-md">
                  <span className="w-4 h-4 bg-blue-500 rounded-full mr-2"></span>
                  <span className="mr-4">List: 1 token</span>
                  <span className="w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                  <span className="mr-4">Propose: 1 token</span>
                  <span className="w-4 h-4 bg-purple-500 rounded-full mr-2"></span>
                  <span>Implement: 1 token</span>
                </div>
              </div>
              <p className="text-center mt-8 max-w-2xl mx-auto">
                In this example, the entire resource tagging process would use 3 tokens. Each step represents a distinct action taken by the AI agent to complete the task efficiently.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Pricing;