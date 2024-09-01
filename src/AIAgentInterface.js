import React, { useState, useEffect, useRef } from 'react';
import { FaChevronRight, FaRedo, FaUserPlus, FaChevronLeft, FaTerminal, FaCheck, FaTimes } from 'react-icons/fa';

const AIAgentInterface = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isStepCompleted, setIsStepCompleted] = useState(false);
  const [executionDetails, setExecutionDetails] = useState('');
  const [isPlanCollapsed, setIsPlanCollapsed] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [shellOutput, setShellOutput] = useState('');
  const [proposedTag, setProposedTag] = useState(null);
  const [showManualTagInput, setShowManualTagInput] = useState(false);

  const steps = [
    'Initialize tagging task',
    'Audit untagged resources',
    'Suggest tags for resources',
    'Review and apply tags',
    'Verify all resources are tagged',
  ];

  const chatHistoryRef = useRef(null);
  const auditLogRef = useRef(null);

  useEffect(() => {
    // Automatically start the tagging process when the component loads
    initializeTask();
  }, []);

  useEffect(() => {
    simulateStepExecution();
  }, [currentStep]);

  useEffect(() => {
    if (chatHistoryRef.current) {
      chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight;
    }
  }, [chatHistory]);

  useEffect(() => {
    if (auditLogRef.current) {
      auditLogRef.current.scrollTop = auditLogRef.current.scrollHeight;
    }
  }, [shellOutput]);

  const initializeTask = () => {
    setCurrentStep(0);
    setExecutionDetails('Task initialized. Starting analysis...');
    setShellOutput('$ AI Agent initialized\n> Starting tagging process...');
  };

  const simulateStepExecution = () => {
    setIsStepCompleted(false);
    setExecutionDetails(`Executing step: ${steps[currentStep]}`);
    
    let command = '';
    let output = '';

    switch (currentStep) {
      case 0:
        command = 'aws configure list';
        output = `      Name                    Value             Type    Location
      ----                    -----             ----    --------
   profile                <not set>             None    None
access_key     ****************ABCD shared-credentials-file    
secret_key     ****************EFGH shared-credentials-file    
    region                us-west-2      config-file    ~/.aws/config`;
        break;
      case 1:
        command = 'aws ec2 describe-instances --query "Reservations[*].Instances[?Tags==null]"';
        output = `[
  {
    "InstanceId": "i-1234567890abcdef0",
    "InstanceType": "t2.micro",
    "State": {
      "Code": 16,
      "Name": "running"
    },
    "LaunchTime": "2023-04-15T12:00:00.000Z"
  }
]`;
        break;
      case 2:
        command = 'aws ec2 describe-instances --instance-ids i-1234567890abcdef0 --query "Reservations[*].Instances[*].{VpcId:VpcId,SubnetId:SubnetId}"';
        output = `[
  [
    {
      "VpcId": "vpc-12345678",
      "SubnetId": "subnet-87654321"
    }
  ]
]`;
        simulateAIResponse();
        break;
      case 3:
        // This step is handled by the Tagging Assistant UI
        break;
      case 4:
        command = 'aws ec2 describe-instances --query "Reservations[*].Instances[?Tags==null]"';
        output = '[]';
        break;
      default:
        command = '';
        output = '';
    }

    setShellOutput(prev => `${prev}\n$ ${command}\n${output}\n`);

    // Simulate API call or processing time
    setTimeout(() => {
      setIsStepCompleted(true);
      setExecutionDetails(`Completed step: ${steps[currentStep]}`);
    }, 2000);
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const retryStep = () => {
    simulateStepExecution();
  };

  const escalateToHuman = () => {
    setExecutionDetails('Task escalated to human operator.');
    setShellOutput(prev => `${prev}\n$ Task escalated to human operator`);
  };

  const simulateAIResponse = () => {
    setChatHistory([
      {
        role: 'ai',
        content: "I've found an untagged EC2 instance. Here are the details:",
        resourceId: 'i-1234567890abcdef0',
        instanceDetails: {
          InstanceType: 't2.micro',
          LaunchTime: '2023-04-15T12:00:00.000Z',
          State: 'running'
        },
        connectedResources: [
          { id: 'vpc-12345678', tags: { Environment: 'Production', Project: 'WebApp' } },
          { id: 'subnet-87654321', tags: { Environment: 'Production', Project: 'WebApp' } }
        ]
      }
    ]);

    setTimeout(() => {
      setProposedTag({ key: 'Environment', value: 'Production' });
    }, 1000);
  };

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleSendMessage = () => {
    if (userInput.trim()) {
      setChatHistory(prev => [...prev, { role: 'user', content: userInput }]);
      setUserInput('');
      // Simulate AI response
      setTimeout(() => {
        handleAIResponse(userInput);
      }, 1000);
    }
  };

  const handleAIResponse = (userMessage) => {
    if (userMessage.toLowerCase().includes('why')) {
      setChatHistory(prev => [...prev, 
        { role: 'ai', content: "I suggested the 'Environment: Production' tag because both the VPC and subnet that this EC2 instance is connected to are tagged with 'Environment: Production'. It's a best practice to maintain consistent tagging across related resources. However, if you have a different tagging strategy or if this instance serves a different purpose, please feel free to provide a different tag." }
      ]);
    } else if (userMessage.toLowerCase().includes('other')) {
      setChatHistory(prev => [...prev, 
        { role: 'ai', content: "Based on the connected resources, we could also consider adding a 'Project: WebApp' tag, as both the VPC and subnet have this tag. Would you like me to suggest this tag instead?" }
      ]);
    } else {
      setChatHistory(prev => [...prev, 
        { role: 'ai', content: "I'm sorry, I didn't quite understand that. Can you please clarify if you want to accept the suggested tag, provide a different tag, or if you have any questions about the tagging process?" }
      ]);
    }
  };

  const handleAcceptTag = () => {
    setChatHistory(prev => [
      ...prev,
      { role: 'user', content: `Accepted proposed tag: ${proposedTag.key}=${proposedTag.value}` },
      { role: 'ai', content: `Great! I've applied the tag ${proposedTag.key}=${proposedTag.value} to the EC2 instance.` },
    ]);
    setProposedTag(null);
    setShellOutput(prev => `${prev}\n$ aws ec2 create-tags --resources i-1234567890abcdef0 --tags Key=${proposedTag.key},Value=${proposedTag.value}\nTags created successfully`);
  };

  const handleRejectTag = () => {
    setChatHistory(prev => [
      ...prev,
      { role: 'user', content: 'Rejected proposed tag' },
      { role: 'ai', content: 'No problem. Please provide a manual tag for this EC2 instance.' },
    ]);
    setProposedTag(null);
    setShowManualTagInput(true);
  };

  const handleManualTag = (e) => {
    e.preventDefault();
    const key = e.target.elements.tagKey.value;
    const value = e.target.elements.tagValue.value;
    setChatHistory(prev => [
      ...prev,
      { role: 'user', content: `Manually set tag: ${key}=${value}` },
      { role: 'ai', content: `Thank you. I've applied the manual tag ${key}=${value} to the EC2 instance.` },
    ]);
    setShowManualTagInput(false);
    setShellOutput(prev => `${prev}\n$ aws ec2 create-tags --resources i-1234567890abcdef0 --tags Key=${key},Value=${value}\nTags created successfully`);
    e.target.reset();
  };

  const progressPercentage = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">AI Agent Library - Cloud Resource Tagging Agent</h1>
      
      <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
        {/* Left Panel - Plan */}
        <div className={`transition-all duration-300 ${isPlanCollapsed ? 'w-12' : 'lg:w-1/3'}`}>
          <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 h-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className={`text-2xl font-bold text-gray-800 ${isPlanCollapsed ? 'hidden' : ''}`}>Detailed Plan</h2>
              <button
                onClick={() => setIsPlanCollapsed(!isPlanCollapsed)}
                className="text-gray-600 hover:text-gray-800 focus:outline-none"
              >
                {isPlanCollapsed ? (
                  <div className="flex">
                    <FaChevronRight size={24} />
                    <FaChevronRight size={24} className="-ml-3" />
                  </div>
                ) : (
                  <div className="flex">
                    <FaChevronLeft size={24} />
                    <FaChevronLeft size={24} className="-ml-3" />
                  </div>
                )}
              </button>
            </div>
            {!isPlanCollapsed && (
              <div className="overflow-y-auto" style={{ maxHeight: 'calc(100vh - 200px)' }}>
                {steps.map((step, index) => (
                  <div key={index} className={`mb-4 p-4 rounded-lg ${index === currentStep ? 'bg-blue-50 shadow' : 'bg-gray-50'}`}>
                    <div className={`flex items-center justify-between ${
                      index === currentStep ? 'font-bold text-blue-700' : 
                      index < currentStep ? 'text-green-700' : 'text-gray-700'
                    }`}>
                      <span>{index + 1}. {step}</span>
                      {index === currentStep && (
                        <div className="flex items-center">
                          <button
                            onClick={retryStep}
                            className="mr-2 text-yellow-600 hover:text-yellow-700"
                            title="Retry step"
                          >
                            <FaRedo />
                          </button>
                          <button
                            onClick={escalateToHuman}
                            className="text-red-600 hover:text-red-700"
                            title="Escalate to human"
                          >
                            <FaUserPlus />
                          </button>
                        </div>
                      )}
                    </div>
                    {index === currentStep && (
                      <div className="mt-2">
                        <p className="text-sm text-gray-600 mb-2">{executionDetails}</p>
                        <button
                          onClick={nextStep}
                          disabled={!isStepCompleted || index === steps.length - 1}
                          className={`w-full py-2 px-4 rounded-lg font-bold ${
                            !isStepCompleted || index === steps.length - 1
                              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                              : 'bg-blue-500 text-white hover:bg-blue-600'
                          }`}
                        >
                          {index === steps.length - 1 ? 'Finish' : 'Next Step'}
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Panel - Execution Details, Shell, and Chat */}
        <div className={`transition-all duration-300 ${isPlanCollapsed ? 'w-full' : 'lg:w-2/3'}`}>
          <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 mb-4">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Tagging Progress</h2>
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="mb-2 bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-blue-600 h-2.5 rounded-full transition-all duration-500 ease-out" 
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
              <p className="text-gray-700">{executionDetails}</p>
            </div>
          </div>

          <div className="bg-gray-900 text-green-400 p-4 rounded-lg shadow-md mb-4 font-mono h-64">
            <h2 className="text-2xl font-bold mb-4 flex items-center text-white">
              <FaTerminal className="mr-2" /> Resource Audit Log
            </h2>
            <div 
              ref={auditLogRef}
              className="h-48 overflow-y-auto pr-2 audit-log-scrollbar"
            >
              <pre className="whitespace-pre-wrap">{shellOutput}</pre>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Collaboration Workspace</h2>
            <div className="flex flex-col h-96">
              <div 
                ref={chatHistoryRef}
                className="bg-white p-2 rounded mb-4 flex-grow overflow-y-auto"
              >
                {chatHistory.map((message, index) => (
                  <div key={index} className={`mb-4 ${message.role === 'user' ? 'text-right' : 'text-left'}`}>
                    <div className={`inline-block p-3 rounded-lg ${message.role === 'user' ? 'bg-blue-100' : 'bg-gray-100'}`}>
                      <p>{message.content}</p>
                      {message.resourceId && (
                        <div className="mt-2 text-sm">
                          <p className="font-semibold">Instance Details:</p>
                          <p>ID: {message.resourceId}</p>
                          <p>Type: {message.instanceDetails.InstanceType}</p>
                          <p>Launch Time: {message.instanceDetails.LaunchTime}</p>
                          <p>State: {message.instanceDetails.State}</p>
                          <p className="font-semibold mt-2">Connected Resources:</p>
                          {message.connectedResources.map((resource, idx) => (
                            <p key={idx}>{resource.id}: {JSON.stringify(resource.tags)}</p>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              {currentStep === 2 && proposedTag && (
                <div className="bg-yellow-100 p-3 rounded-lg mb-4">
                  <p className="font-semibold">Suggested Tag:</p>
                  <p>{proposedTag.key} = {proposedTag.value}</p>
                  <p className="text-sm mt-2">
                    I suggest this tag because the connected VPC and subnet are both tagged with the same Environment.
                    This indicates that the EC2 instance is likely part of the same environment.
                  </p>
                  <div className="mt-2">
                    <button onClick={handleAcceptTag} className="bg-green-500 text-white px-3 py-1 rounded mr-2">
                      <FaCheck className="inline mr-1" /> Apply
                    </button>
                    <button onClick={handleRejectTag} className="bg-red-500 text-white px-3 py-1 rounded">
                      <FaTimes className="inline mr-1" /> Reject
                    </button>
                  </div>
                </div>
              )}
              {showManualTagInput && (
                <form onSubmit={handleManualTag} className="mb-4">
                  <div className="flex">
                    <input
                      type="text"
                      name="tagKey"
                      placeholder="Tag Key"
                      className="flex-grow mr-2 p-2 border rounded"
                      required
                    />
                    <input
                      type="text"
                      name="tagValue"
                      placeholder="Tag Value"
                      className="flex-grow mr-2 p-2 border rounded"
                      required
                    />
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Apply Manual Tag
                    </button>
                  </div>
                </form>
              )}
              <div className="flex mt-2">
                <input
                  type="text"
                  value={userInput}
                  onChange={handleUserInput}
                  className="flex-grow mr-2 p-2 border rounded"
                  placeholder="Ask about tagging or provide instructions..."
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAgentInterface;


