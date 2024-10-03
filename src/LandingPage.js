import React, { useState, useEffect } from 'react';
import { Cloud, Shield, Brain, FileText, Eye, ArrowRight, Crown } from 'lucide-react';

const LandingPage = () => {
  const [cloudProvider, setCloudProvider] = useState('Azure');
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const providers = ['Azure', 'AWS', 'GCP'];
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % providers.length;
      setCloudProvider(providers[currentIndex]);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const pricingPlans = [
    {
      title: "Pay-as-you-go",
      price: "$125",
      period: "per account",
      features: [
        "Flexible scaling",
        "Pay only for what you use",
        "No long-term commitment"
      ],
      buttonText: "Choose Plan",
      popular: false
    },
    {
      title: "Small Package",
      price: "$300",
      period: "per month",
      features: [
        "Includes 3 cloud accounts",
        "Additional accounts: $100/month each",
        "Full feature access"
      ],
      buttonText: "Choose Plan",
      popular: false
    },
    {
      title: "Medium Package",
      price: "$1,000",
      period: "per month",
      features: [
        "Includes 10 cloud accounts",
        "Additional accounts: $75/month each",
        "Priority support"
      ],
      buttonText: "Choose Plan",
      popular: true
    },
    {
      title: "MSP & Enterprise",
      price: "Custom",
      period: "Contact us for pricing",
      features: [
        "Custom branding",
        "Manage your own users and clients",
        "Dedicated environment",
        "Single Sign-On (SSO) Integration"
      ],
      buttonText: "Talk to Sales",
      popular: false
    }
  ];

  const faqItems = [
    {
      question: "What cloud providers does ASecureCloud support?",
      answer: "ASecureCloud supports major cloud providers including Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP)."
    },
    {
      question: "How does ASecureCloud ensure the security of my cloud environment?",
      answer: "ASecureCloud uses AI-powered continuous monitoring, real-time threat detection, and automated remediation to ensure the security of your cloud environment. It also provides compliance checks and best practice recommendations."
    },
    {
      question: "Can ASecureCloud integrate with my existing security tools?",
      answer: "Yes, ASecureCloud is designed to integrate seamlessly with many popular security tools and SIEM solutions, enhancing your existing security infrastructure."
    },
    {
      question: "Which AI model does ASecureCloud use for its security analysis?",
      answer: "ASecureCloud utilizes a proprietary, state-of-the-art large language model specifically trained on cloud security data and best practices. This model is continuously updated to stay ahead of emerging threats and new cloud features."
    },
    {
      question: "How is my data safeguarded when using ASecureCloud?",
      answer: "We take data security very seriously. All data is encrypted in transit and at rest using industry-standard encryption protocols. We employ strict access controls, regular security audits, and adhere to data protection regulations such as GDPR and CCPA. Our systems are designed with a 'least privilege' principle to ensure data is only accessed when necessary for providing our services."
    },
    {
      question: "Is there an option for private deployment to maintain complete data control?",
      answer: "Yes, we offer a private deployment option for enterprises that require complete control over their data. This option allows you to host ASecureCloud within your own infrastructure, ensuring that all data and processing remain within your controlled environment. Our team can work with you to set up and maintain this private deployment, tailored to your specific security and compliance requirements."
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">ASecureCloud</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#ai-platform" className="hover:text-blue-100">AI Platform</a></li>
              <li><a href="#pricing" className="hover:text-blue-100">Pricing</a></li>
              <li><a href="#faq" className="hover:text-blue-100">FAQ</a></li>
              <li><a href="#demo" className="hover:text-blue-100">Get a Demo</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="h-[50vh] flex items-center justify-center bg-white text-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            AI-Powered CSPM for <span className="text-blue-600">{cloudProvider}</span>
          </h2>
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto">
            Augment your team with adaptive security and remediation, ensuring continuous protection and compliance across your cloud environment at scale.
          </p>
          <div className="space-x-4 mt-8">
            <a href="#demo" className="bg-blue-600 text-white px-6 py-3 rounded-full font-bold text-lg hover:bg-blue-700 transition duration-300">Get a Demo</a>
            <a href="#pricing" className="bg-indigo-500 text-white px-6 py-3 rounded-full font-bold text-lg hover:bg-indigo-600 transition duration-300">Sign Up</a>
          </div>
        </div>
      </section>

      {/* Value Proposition Sections */}
      <section id="ai-platform" className="py-16 bg-blue-50">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-black">AI-Powered Platform</h3>
          <p className="text-lg mb-6 max-w-3xl mx-auto text-black">
            Ask questions in natural language and receive detailed answers about your environment. Enjoy intuitive interaction without learning complex interfaces. Simply communicate in plain English to get the insights you need.
          </p>
          <div className="w-full overflow-hidden">
            <video 
              className="w-full" 
              autoPlay 
              loop 
              muted 
              playsInline
              controls
              poster="/images/ai-powered-platform-poster.jpg"
            >
              <source src="/videos/ai-powered-platform.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      <section className="py-16 bg-green-50">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-black">AI-Driven Recommendations</h3>
          <p className="text-lg mb-6 max-w-3xl mx-auto text-black">
            Get context-aware recommendations and reduce false positives. Our intelligent insights analyze your environment to provide actionable advice, helping you make informed decisions quickly and efficiently.
          </p>
          <div className="w-full h-64 rounded-lg overflow-hidden">
            <img src="/images/ai-driven-recommendations.gif" alt="AI-Driven Recommendations" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-purple-50">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-black">Comprehensive Reporting</h3>
          <p className="text-lg mb-6 max-w-3xl mx-auto text-black">
            Generate maturity and compliance reports with ease. Streamline your compliance process across Azure, AWS, and GCP with automated reporting that keeps you audit-ready at all times.
          </p>
          <div className="w-full overflow-hidden">
            <video 
              className="w-full" 
              autoPlay 
              loop 
              muted 
              playsInline
              controls
              poster="/images/comprehensive-reporting-poster.jpg"
            >
              <source src="videos/reports.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      <section className="py-16 bg-yellow-50">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-black">Cloud-Native CSPM</h3>
          <p className="text-lg mb-6 max-w-3xl mx-auto text-black">
            Leverage agentless workload scanning and data loss prevention across Azure, AWS, and GCP. Our cloud-native approach ensures maximum ROI while avoiding performance and scalability limitations typical of traditional tools.
          </p>
          <div className="w-full h-64 rounded-lg overflow-hidden">
            <img src="/images/cloud-native-cspm.gif" alt="Cloud-Native CSPM" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-white">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-black">Flexible Pricing Options</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={index} {...plan} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-black">Frequently Asked Questions</h3>
          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-semibold text-lg">{item.question}</span>
                  <span className="text-blue-500">
                    {openFaq === index ? (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>
                    ) : (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    )}
                  </span>
                </button>
                {openFaq === index && (
                  <p className="mt-4 text-gray-600">{item.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="demo" className="bg-blue-500 text-white py-16">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Secure Your Cloud with AI?</h3>
          <p className="text-xl mb-8">Get a personalized demo for your MSB and see ASecureCloud in action.</p>
          <a href="#" className="bg-white text-blue-500 px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-100 transition duration-300 inline-flex items-center">
            Get a Demo <ArrowRight className="ml-2" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 ASecureCloud. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

const PricingCard = ({ title, price, period, features, buttonText, popular }) => (
  <div className={`bg-white p-6 rounded-lg shadow-md border ${popular ? 'border-blue-500' : 'border-gray-200'} relative h-full flex flex-col`}>
    {popular && (
      <div className="absolute top-0 right-0 bg-blue-500 text-white px-2 py-1 rounded-bl-lg rounded-tr-lg text-sm font-semibold flex items-center">
        <Crown className="w-4 h-4 mr-1" /> Popular
      </div>
    )}
    <h4 className="text-xl font-semibold mb-2 text-blue-500">{title}</h4>
    <div className="text-3xl font-bold mb-2">{price}</div>
    <div className="text-gray-500 mb-4">{period}</div>
    <ul className="text-sm text-gray-600 mb-6 flex-grow">
      {features.map((feature, index) => (
        <li key={index} className="mb-2 flex items-start">
          <ArrowRight className="w-4 h-4 mr-2 text-blue-500 flex-shrink-0 mt-1" />
          {feature}
        </li>
      ))}
    </ul>
    <button className={`w-full py-2 rounded-full font-bold text-white ${popular ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-500 hover:bg-gray-600'} transition duration-300`}>
      {buttonText}
    </button>
  </div>
);

export default LandingPage;