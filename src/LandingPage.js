import React, { useState, useEffect } from 'react';
import { Layout, Button, Card, List, Avatar, Switch } from './components/ui';
import { CheckCircle, Star, Shield, Zap, ChevronDown, ChevronUp, Moon, Sun } from 'lucide-react';

const features = [
  { icon: <CheckCircle />, title: 'Secure Templates', description: 'Pre-built secure configurations to jumpstart your infrastructure' },
  { icon: <Star />, title: 'AI-Powered Suggestions', description: 'Intelligent recommendations for optimizing your infrastructure' },
  { icon: <Shield />, title: 'Compliance Ready', description: 'Meet industry standards with built-in compliance checks' },
  { icon: <Zap />, title: 'Rapid Deployment', description: 'Deploy secure infrastructure in minutes, not hours' },
];

const useCases = [
  { title: 'Startups', description: 'Quickly set up secure cloud infrastructure without a dedicated security team' },
  { title: 'Enterprise', description: 'Maintain consistency and compliance across multiple cloud environments' },
  { title: 'DevOps Teams', description: 'Integrate security best practices into your CI/CD pipeline effortlessly' },
  { title: 'Consultants', description: 'Deliver secure, optimized cloud solutions to clients more efficiently' },
];

const faqs = [
  {
    question: 'What is the Terraform Template Builder?',
    answer: 'Our Terraform Template Builder is an AI-powered tool that helps you create secure, compliant, and optimized infrastructure-as-code templates for your cloud environments.'
  },
  {
    question: 'How does the AI suggestion feature work?',
    answer: 'Our AI analyzes your infrastructure requirements and suggests optimizations based on best practices, security standards, and cost-efficiency guidelines.'
  },
  {
    question: 'Is the Personal tier suitable for professional use?',
    answer: 'Yes, the Personal tier is perfect for individual developers or small projects. As your needs grow, you can easily upgrade to our Team or Enterprise tiers.'
  },
  {
    question: 'How often are the security templates updated?',
    answer: 'We continuously update our security templates to reflect the latest best practices and emerging threats in cloud security.'
  }
];

const pricingPlans = [
  {
    name: 'Personal',
    monthlyPrice: 29,
    features: [
      'Access to all basic templates',
      'AI-powered suggestions',
      'Basic support'
    ]
  },
  {
    name: 'Team',
    monthlyPrice: 49,
    features: [
      'All Personal features',
      'Template sharing',
      'Co-authoring',
      'Priority support'
    ]
  },
  {
    name: 'Enterprise',
    monthlyPrice: 'Custom',
    features: [
      'All Team features',
      'Private deployment',
      'Custom integrations',
      'Dedicated account manager'
    ]
  }
];

// const FAQ = ({ question, answer }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="border-b border-gray-200 py-4">
//       <button
//         className="flex justify-between items-center w-full text-left text-gray-800 hover:text-blue-600 transition-colors duration-300"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <span className="font-medium text-lg">{question}</span>
//         {isOpen ? <ChevronUp className="text-gray-600" /> : <ChevronDown className="text-gray-600" />}
//       </button>
//       {isOpen && (
//         <p className="mt-2 text-gray-600 transition-all duration-300 ease-in-out max-h-0 overflow-hidden" style={{ maxHeight: isOpen ? '1000px' : '0' }}>
//           {answer}
//         </p>
//       )}
//     </div>
//   );
// };



// Update the FAQ component to handle dark mode
const FAQ = ({ question, answer, darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`border-b ${darkMode ? 'border-gray-600' : 'border-gray-200'} py-4`}>
      <button
        className={`flex justify-between items-center w-full text-left ${darkMode ? 'text-white hover:text-blue-400' : 'text-gray-800 hover:text-blue-600'} transition-colors duration-300`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-lg">{question}</span>
        {isOpen ? <ChevronUp className={darkMode ? 'text-gray-400' : 'text-gray-600'} /> : <ChevronDown className={darkMode ? 'text-gray-400' : 'text-gray-600'} />}
      </button>
      {isOpen && (
        <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-all duration-300 ease-in-out max-h-0 overflow-hidden`} style={{ maxHeight: isOpen ? '1000px' : '0' }}>
          {answer}
        </p>
      )}
    </div>
  );
};
const RollingLogos = () => {
  const logos = [
    '/logos/amazon.png',
    '/logos/netflix.png',
    '/logos/cloud303.png',
    '/logos/nbcU.png',
    
  ];

  return (
    <div className="relative overflow-hidden w-full py-10">
      <div className="flex justify-center space-x-12 animate-scroll">
        {logos.concat(logos).map((logo, index) => (
          <img key={index} src={logo} alt="Company logo" className="h-8 w-auto"/>
        ))}
      </div>
    </div>
  );
};


export default function LandingPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [yearlyBilling, setYearlyBilling] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const calculatePrice = (monthlyPrice) => {
    if (typeof monthlyPrice === 'number') {
      const yearlyPrice = monthlyPrice * 12 * 0.7; // 30% discount
      return yearlyBilling ? (yearlyPrice / 12).toFixed(2) : monthlyPrice.toFixed(2);
    }
    return monthlyPrice; // For 'Custom' pricing
  };

  return (
    <Layout className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
      <header className="container mx-auto py-16 text-center relative">
        <div className="absolute top-4 right-4 flex items-center">
          <Switch
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          {darkMode ? <Moon className="ml-2" size={20} /> : <Sun className="ml-2" size={20} />}
        </div>
        <h1 className="text-5xl font-bold mb-4">Secure Terraform Template Builder</h1>
        <h2 className="text-3xl mb-4">AI-Powered Infrastructure as Code</h2>
        <p className="text-xl mb-8">Build, secure, and deploy your cloud infrastructure in minutes</p>
        <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300">Start Free Trial</Button>
      </header>
            
      <section className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Used by 1000s of engineers working at</h2>
          <RollingLogos />
        </div>
      </section>
      <section className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Features</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 pr-8">
              <List className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <Avatar className={`mr-4 ${darkMode ? 'bg-blue-700 text-white' : 'bg-blue-100 text-blue-600'} flex-shrink-0`}>
                      {feature.icon}
                    </Avatar>
                    <div>
                      <h3 className="font-bold mb-2">{feature.title}</h3>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                ))}
              </List>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <video 
                className="w-full rounded-lg shadow-lg" 
                controls 
                poster="/api/placeholder/640/360"
              >
                <source src="https://example.com/terraform-builder-demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      <section className={`py-16 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Common Use Cases</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className={`p-6 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}>
                <h3 className="font-bold text-xl mb-4">{useCase.title}</h3>
                <p>{useCase.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <section className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Pricing Plans</h2>
          <div className="flex justify-center items-center mb-8">
            <span className={`mr-3 ${yearlyBilling ? 'text-gray-400' : 'font-bold'}`}>Monthly</span>
            <Switch
              checked={yearlyBilling}
              onChange={() => setYearlyBilling(!yearlyBilling)}
            />
            <span className={`ml-3 ${yearlyBilling ? 'font-bold' : 'text-gray-400'}`}>Yearly (Save 30%)</span>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`p-6 ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'} hover:shadow-lg transition-shadow`}>
                <h3 className="font-bold text-2xl mb-4">{plan.name}</h3>
                <p className="text-3xl font-bold mb-4">
                  {typeof plan.monthlyPrice === 'number' ? 
                    `$${calculatePrice(plan.monthlyPrice)}/${yearlyBilling ? 'mo' : 'mo'}` : 
                    plan.monthlyPrice}
                </p>
                {yearlyBilling && typeof plan.monthlyPrice === 'number' && (
                  <p className="text-sm mb-4 text-green-500">
                    Save ${(plan.monthlyPrice * 12 * 0.3).toFixed(2)} per year
                  </p>
                )}
                <ul className="mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center mb-2">
                      <CheckCircle className="mr-2 text-green-500" size={16} />
                      <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${plan.name === 'Enterprise' ? 'bg-purple-600 hover:bg-purple-700' : 'bg-blue-600 hover:bg-blue-700'} text-white transition-colors duration-300`}
                >
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className={`py-16 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <FAQ key={index} question={faq.question} answer={faq.answer} darkMode={darkMode} />
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto py-16 text-center">
        <h2 className="text-3xl font-bold mb-8">Ready to secure your infrastructure?</h2>
        <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300">Get Started Now</Button>
      </section>
    </Layout>
  );
}
