import React, { useState, useEffect, useCallback } from 'react';
import { Layout, Button, Card, List, Avatar } from './components/ui';
import { CheckCircle, Star, Shield, Users, ChevronDown, ChevronUp, Moon, Sun } from 'lucide-react';
import './FeatureAnimation.css'; // We'll create this CSS file for the animations

const features = [
  { icon: <CheckCircle />, title: 'Secure Templates', description: 'Pre-built secure configurations to jumpstart your infrastructure', image: '/images/secure-templates.png' },
  { icon: <Star />, title: 'Effortless Customization', description: 'Simply describe your changes in plain English and let CloudAdvisor update the template for you. No Git, no fuss...', image: '/images/effortless-customization.png' },
  { icon: <Shield />, title: 'Compliance Ready', description: 'Meet industry standards with built-in compliance checks', image: '/images/compliance-ready.png' },
  { icon: <Users />, title: 'Collaborate with your team', description: 'Share and customize templates with your team members for seamless collaboration', image: '/images/team-collaboration.png' },
];

const useCases = [
  { title: 'Startups', description: 'Quickly set up secure cloud infrastructure without a dedicated security team' },
  { title: 'Enterprise', description: 'Maintain consistency and compliance across multiple cloud environments' },
  { title: 'DevOps Teams', description: 'Integrate security best practices into your CI/CD pipeline effortlessly' },
  { title: 'Consultants', description: 'Deliver secure, optimized cloud solutions to clients more efficiently' },
];

const faqs = [

  
  {
    "question": "What is the Secure Terraform Template Builder?",
    "answer": "The Secure Terraform Template Builder is a web application designed to help users build, secure, and deploy cloud infrastructure using Terraform templates. The application leverages AI to generate Infrastructure as Code (IaC) from natural language inputs, ensuring secure and compliant configurations."
  },
  {
    "question": "How does the natural language processing feature work?",
    "answer": "You simply describe the infrastructure you need in plain English, and the app generates the corresponding Terraform code. This code can be inspected, shared, and validated before deployment."
  },
  {
    "question": "What AI model do you use and how secure is it?",
    "answer": "The AI model used in the Secure Terraform Template Builder is a fine-tuned GPT-4, specifically trained on validated sources to ensure accurate and secure outputs. For organizations that require additional security, there is also an option to integrate a customer-specific private model using platforms like Azure AI. This ensures that the AI operates within your secure environment, leveraging your organization's data and security protocols."
  },
  {
    "question": "Can I share the Terraform templates with my team?",
    "answer": "Yes, the app includes a feature that allows you to share templates with team members. You can collaborate in real-time and make sure everyone is on the same page before deploying the infrastructure."
  },
  {
    "question": "How does the validation mechanism work?",
    "answer": "The validation mechanism is a customizable feature that checks the Terraform code against your organization's compliance and security standards. Only code that meets the criteria can be pushed, ensuring that your infrastructure remains secure and compliant."
  },
  {
    "question": "Is it possible to cancel my subscription at any time?",
    "answer": "Yes, you can cancel your subscription at any time. The process is straightforward, and you will not be charged for subsequent billing cycles after cancellation."
  },
  {
    "question": "Can the solution be privately deployed within my organization?",
    "answer": "Yes, the Secure Terraform Template Builder offers an option for private deployment. This allows the solution to be hosted within your organization's environment, ensuring that templates and infrastructure configurations are shared only locally and remain secure within your internal network."
  },
  {
    "question": "What are some common use cases for this web app?",
    "answer": "Startups: Quickly set up secure cloud infrastructure without a dedicated security team.\nEnterprise: Maintain consistency and compliance across multiple cloud environments.\nDevOps Teams: Integrate security best practices into your CI/CD pipeline.\nConsultants: Deliver secure, optimized cloud solutions to clients more efficiently."
  },
  {
    "question": "What industries is this web app best suited for?",
    "answer": "The Secure Terraform Template Builder is ideal for industries that require strict security and compliance, such as finance, healthcare, and technology, as well as any organization looking to streamline and secure their cloud infrastructure deployment."
  },
  {
    "question": "How can I get started?",
    "answer": "You can start by signing up for a free trial on the Secure Terraform Template Builder website. Once signed up, you can begin creating, securing, and deploying your cloud infrastructure in minutes."
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
  const [currentFeature, setCurrentFeature] = useState(0);

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
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full transition-colors duration-300 ${
              darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'
            }`}
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <Sun className="text-yellow-400" size={24} />
            ) : (
              <Moon className="text-gray-600" size={24} />
            )}
          </button>
        </div>
        <h1 className="text-5xl font-bold mb-4">Secure Terraform Template Builder</h1>
        <h2 className="text-3xl mb-4">AI-Powered Infrastructure as Code</h2>
        <p className="text-xl mb-8">Build, secure, and deploy your cloud infrastructure in minutes</p>
        <div className="flex justify-center space-x-4">
          <Button 
            size="lg" 
            className="bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300"
            onClick={() => window.open("https://asecure.cloud/configuration-builder/", "_blank", "noopener,noreferrer")}
          >
            Start Free Trial
          </Button>
          <Button 
            size="lg" 
            className={`bg-transparent border ${darkMode ? 'border-gray-300 text-gray-300 hover:bg-gray-700' : 'border-gray-400 text-gray-700 hover:bg-gray-100'} transition-colors duration-300`}
            onClick={() => window.open("https://calendly.com/d/dnc-889-hh8/asecurecloud-meeting", "_blank", "noopener,noreferrer")}
          >
            Get a Demo
          </Button>
        </div>
      </header>
            
      <section className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Used by 1000s of engineers working at</h2>
          <RollingLogos />
        </div>
      </section>
      <section className={`py-16 relative overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="animated-background">
          <div className="circle circle-1"></div>
          <div className="circle circle-2"></div>
          <div className="circle circle-3"></div>
          <div className="circle circle-4"></div>
          <div className="circle circle-5"></div>
          <div className="circle circle-6"></div>
          <div className="circle circle-7"></div>
          <div className="circle circle-8"></div>
        </div>
        <div className="container mx-auto relative z-10">
          <h2 className="text-4xl font-bold mb-12 text-center">Key Features</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 pr-8">
              <List className="space-y-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`flex items-start cursor-pointer transition-all duration-300 ${
                      index === currentFeature 
                        ? 'opacity-100 scale-105 transform' 
                        : 'opacity-70 hover:opacity-90'
                    }`}
                    onClick={() => setCurrentFeature(index)}
                  >
                    <Avatar className={`mr-4 ${
                      darkMode 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-blue-100 text-blue-600'
                    } flex-shrink-0 w-12 h-12 flex items-center justify-center`}>
                      {React.cloneElement(feature.icon, { size: 24 })}
                    </Avatar>
                    <div>
                      <h3 className={`font-bold text-xl mb-2 ${
                        index === currentFeature 
                          ? (darkMode ? 'text-blue-400' : 'text-blue-600') 
                          : ''
                      }`}>
                        {feature.title}
                      </h3>
                      <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </List>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <div className="relative w-full" style={{ paddingBottom: '60%' }}>
                {features.map((feature, index) => (
                  <img
                    key={index}
                    src={feature.image}
                    alt={feature.title}
                    className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-85 h-85 object-contain transition-opacity duration-300 ${
                      index === currentFeature ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
              </div>
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
            <span className={`mr-3 ${yearlyBilling ? (darkMode ? 'text-gray-400' : 'text-gray-500') : 'font-bold'}`}>Monthly</span>
            <button
              onClick={() => setYearlyBilling(!yearlyBilling)}
              className={`w-14 h-7 flex items-center rounded-full p-1 ${yearlyBilling ? 'bg-blue-600 justify-end' : 'bg-gray-300 justify-start'}`}
            >
              <div className={`bg-white w-5 h-5 rounded-full shadow-md transform duration-300 ease-in-out`}></div>
            </button>
            <span className={`ml-3 ${yearlyBilling ? 'font-bold' : (darkMode ? 'text-gray-400' : 'text-gray-500')}`}>Yearly (Save 30%)</span>
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
        <Button 
          size="lg" 
          className="bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300"
          onClick={() => window.open("https://asecure.cloud/configuration-builder/", "_blank", "noopener,noreferrer")}
        >
          Get Started Now
        </Button>
      </section>
    </Layout>
  );
}
