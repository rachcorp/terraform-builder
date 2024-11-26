import React from 'react';
import Image from 'next/image';
import { ArrowRight, Shield, Terminal, Cloud, Check } from 'lucide-react';

const CloudPlatformsPage = () => {
  const platforms = [
    {
      name: 'Amazon Web Services',
      imagePath: '/images/AWS-p-1080.png',
      description: 'Comprehensive security monitoring and compliance automation for AWS environments. Our platform seamlessly integrates with AWS Security Hub, CloudWatch, and GuardDuty to provide real-time threat detection and response.'
    },
    {
      name: 'Microsoft Azure',
      imagePath: '/images/Azure-p-1080.png',
      description: 'Enhanced security visibility and control for Azure workloads. Integrate directly with Azure Security Center and Azure Monitor to maintain continuous compliance and protect your cloud resources.'
    },
    {
      name: 'Google Cloud Platform',
      imagePath: '/images/GCP-p-1080.png',
      description: 'Advanced security operations for GCP environments. Leverage Security Command Center integration and Cloud Monitoring to ensure your GCP infrastructure remains secure and compliant.'
    },
    {
      name: 'Kubernetes',
      imagePath: '/images/Kubernetes-p-1080.png',
      description: 'Container-native security for Kubernetes clusters across any cloud provider. Monitor container security posture, detect threats, and enforce compliance policies across your container ecosystem.'
    }
  ];

  const faqs = [
    {
      question: 'How do you handle multiple cloud environments?',
      answer: 'Our platform provides a unified dashboard for all your cloud environments, allowing centralized security monitoring, policy management, and compliance reporting across AWS, Azure, GCP, and Kubernetes workloads. This eliminates the need to switch between different cloud-native tools.'
    },
    {
      question: 'What about other cloud providers and on-premises infrastructure?',
      answer: 'While we currently focus on AWS, Azure, GCP, and Kubernetes, we are actively developing support for additional cloud providers and on-premises infrastructure. Our roadmap includes Oracle Cloud, IBM Cloud, and major private cloud platforms.'
    },
    {
      question: 'How does the onboarding process work?',
      answer: 'Our automated onboarding process typically takes less than 15 minutes per cloud account. We provide ready-to-use templates and a step-by-step wizard that handles all necessary IAM roles, permissions, and integrations while following security best practices.'
    },
    {
      question: 'Can you support complex organizational structures?',
      answer: 'Yes, we support organizations with multiple accounts, subscriptions, and projects across different cloud providers. Our platform can mirror your organizational hierarchy and apply appropriate security policies and compliance controls at each level.'
    },
    {
      question: 'What compliance frameworks do you support?',
      answer: 'We support major frameworks including SOC 2, ISO 27001, HIPAA, PCI DSS, and CIS Benchmarks across all supported cloud providers.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Supported Cloud Platforms</h1>
          <p className="text-xl mb-8">Secure your infrastructure across all major cloud providers</p>
          <div className="flex justify-center space-x-4">
            <Shield className="w-12 h-12" />
            <Terminal className="w-12 h-12" />
            <Cloud className="w-12 h-12" />
          </div>
        </div>
      </section>

      {/* Cloud Platforms */}
      <section className="py-16 container mx-auto px-6">
        {platforms.map((platform, index) => (
          <div 
            key={platform.name} 
            className={`flex flex-col md:flex-row items-center gap-8 mb-16 ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            <div className="flex-1 flex justify-center w-full md:w-1/2">
              <div className="relative w-full max-w-xl aspect-[16/9] bg-white rounded-lg shadow-lg overflow-hidden">
                <Image
                  src={platform.imagePath}
                  alt={`${platform.name} logo`}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain p-8 hover:scale-105 transition-transform duration-300"
                  quality={90}
                />
              </div>
            </div>
            <div className="flex-1 w-full md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">{platform.name}</h2>
              <p className="text-gray-600">{platform.description}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Onboarding Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <div className="relative w-full aspect-[16/9] bg-white rounded-lg shadow-lg overflow-hidden">
                <Image
                  src="/api/placeholder/1920/1080"
                  alt="Platform onboarding wizard"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  quality={90}
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold">Simple, Fast Onboarding</h2>
              <p className="text-xl text-gray-600">Get started in minutes with our automated onboarding process</p>
              <div className="space-y-4">
                {[
                  'Pre-built templates for each cloud provider',
                  'Step-by-step configuration wizard',
                  'Automated permission setup',
                  'Best practices built-in',
                  'No advanced cloud expertise required'
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {faqs.map(faq => (
            <div key={faq.question} className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Cloud Infrastructure?</h2>
          <p className="text-xl mb-8">Get started with ASecureCloud today</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold flex items-center mx-auto hover:bg-gray-100 transition-colors">
            Start Free Trial
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default CloudPlatformsPage;