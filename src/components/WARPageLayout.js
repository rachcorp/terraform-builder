import React, { useState, useEffect } from 'react';
import { Plus, ChevronRight, AlertTriangle, CheckCircle, Info, ChevronDown, X, Download, FileText, Cloud } from 'lucide-react';

const ApplicationCard = ({ name, status, lastAssessment, onClick }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div 
      className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <h3 className="text-lg font-semibold mb-2">{name}</h3>
      <div className="flex items-center mb-2">
        <span className="mr-2">Status:</span>
        {status === 'healthy' ? (
          <CheckCircle className="text-green-500" size={20} />
        ) : (
          <AlertTriangle className="text-yellow-500" size={20} />
        )}
      </div>
      <div className="mb-4">
        <button 
          className="flex items-center justify-between w-full bg-gray-100 px-3 py-2 rounded"
          onClick={(e) => {
            e.stopPropagation();
            setIsDropdownOpen(!isDropdownOpen);
          }}
        >
          <span>Last assessment: {lastAssessment}</span>
          <ChevronDown size={20} className={`transition-transform ${isDropdownOpen ? 'transform rotate-180' : ''}`} />
        </button>
        {isDropdownOpen && (
          <div className="mt-2 bg-white border rounded shadow-md">
            <ul>
              {['Sep 15, 2024', 'Aug 30, 2024', 'Jul 15, 2024'].map((date) => (
                <li key={date} className="px-3 py-2 hover:bg-gray-100 cursor-pointer">{date}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <button 
        className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        onClick={(e) => {
          e.stopPropagation();
          // Handle new assessment logic here
        }}
      >
        New Assessment
      </button>
    </div>
  );
};

const ApplicationDefinitionPanel = ({ isOpen, onClose, onSave, existingWorkloads }) => {
  const [definitionType, setDefinitionType] = useState('tag');
  const [tagKey, setTagKey] = useState('');
  const [tagValue, setTagValue] = useState('');
  const [vpcId, setVpcId] = useState('');
  const [appName, setAppName] = useState('');
  const [selectedWorkload, setSelectedWorkload] = useState('');

  const handleSave = () => {
    const newApp = {
      name: appName,
      status: 'healthy',
      lastAssessment: 'Not assessed',
      definitionType,
      ...(definitionType === 'tag' ? { tagKey, tagValue } : { vpcId }),
      ...(selectedWorkload ? { workloadId: selectedWorkload } : {})
    };
    onSave(newApp);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
      <div className="bg-white w-full max-w-md h-full overflow-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Define New Application</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-medium">Application Name</label>
          <input
            type="text"
            value={appName}
            onChange={(e) => setAppName(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter application name"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-medium">Existing Workload</label>
          <select
            value={selectedWorkload}
            onChange={(e) => setSelectedWorkload(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="">Select a workload (optional)</option>
            {existingWorkloads.map((workload) => (
              <option key={workload.id} value={workload.id}>{workload.name}</option>
            ))}
          </select>
        </div>

        {!selectedWorkload && (
          <>
            <div className="mb-4">
              <label className="block mb-2 font-medium">Definition Type</label>
              <select
                value={definitionType}
                onChange={(e) => setDefinitionType(e.target.value)}
                className="w-full p-2 border rounded"
              >
                <option value="tag">AWS Tag</option>
                <option value="vpc">VPC Membership</option>
              </select>
            </div>

            {definitionType === 'tag' ? (
              <>
                <div className="mb-4">
                  <label className="block mb-2 font-medium">Tag Key</label>
                  <input
                    type="text"
                    value={tagKey}
                    onChange={(e) => setTagKey(e.target.value)}
                    className="w-full p-2 border rounded"
                    placeholder="Enter tag key"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2 font-medium">Tag Value</label>
                  <input
                    type="text"
                    value={tagValue}
                    onChange={(e) => setTagValue(e.target.value)}
                    className="w-full p-2 border rounded"
                    placeholder="Enter tag value"
                  />
                </div>
              </>
            ) : (
              <div className="mb-4">
                <label className="block mb-2 font-medium">VPC ID</label>
                <input
                  type="text"
                  value={vpcId}
                  onChange={(e) => setVpcId(e.target.value)}
                  className="w-full p-2 border rounded"
                  placeholder="Enter VPC ID"
                />
              </div>
            )}
          </>
        )}

        <button
          onClick={handleSave}
          className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Save Application
        </button>
      </div>
    </div>
  );
};

const ApplicationDetailView = ({ application, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedLens, setSelectedLens] = useState('general');

  const lenses = [
    { id: 'general', name: 'General' },
    { id: 'saas', name: 'SaaS Lens' },
    { id: 'serverless', name: 'Serverless Lens' },
    { id: 'fpga', name: 'FPGA Lens' }
  ];

  const handleExportPDF = () => {
    console.log('Exporting PDF...');
    // Implement PDF export logic here
  };

  const handlePushToAWS = () => {
    console.log('Pushing to AWS...');
    // Implement AWS push logic here
  };

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-auto">
      <div className="container mx-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">{application.name}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>

        <div className="mb-6">
          <div className="flex space-x-4 mb-4">
            <button
              className={`px-4 py-2 rounded ${activeTab === 'overview' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button
              className={`px-4 py-2 rounded ${activeTab === 'remediations' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              onClick={() => setActiveTab('remediations')}
            >
              Remediations
            </button>
          </div>

          {activeTab === 'overview' && (
            <div>
              <h3 className="text-xl font-semibold mb-4">Well-Architected Review Overview</h3>
              {/* Add overview content here */}
            </div>
          )}

          {activeTab === 'remediations' && (
            <div>
              <h3 className="text-xl font-semibold mb-4">Recommended Remediations</h3>
              {/* Add list of remediations here */}
            </div>
          )}
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4">Well-Architected Lenses</h3>
          <div className="flex space-x-4 mb-4">
            {lenses.map(lens => (
              <button
                key={lens.id}
                className={`px-4 py-2 rounded ${selectedLens === lens.id ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
                onClick={() => setSelectedLens(lens.id)}
              >
                {lens.name}
              </button>
            ))}
          </div>
          {/* Add lens-specific content here based on selectedLens */}
        </div>

        <div className="flex space-x-4">
          <button
            onClick={handleExportPDF}
            className="flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            <FileText size={20} className="mr-2" />
            Export PDF
          </button>
          <button
            onClick={handlePushToAWS}
            className="flex items-center bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors"
          >
            <Cloud size={20} className="mr-2" />
            Push to AWS
          </button>
        </div>
      </div>
    </div>
  );
};

const WARPageLayout = () => {
  const [applications, setApplications] = useState([]);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [accountId, setAccountId] = useState('');
  const [workloads, setWorkloads] = useState([]);
  const [selectedApplication, setSelectedApplication] = useState(null);

  useEffect(() => {
    // Simulating fetching account ID
    setAccountId('123456789012');
  }, []);

  const addNewApplication = (newApp) => {
    setApplications([...applications, newApp]);
  };

  const fetchWorkloads = async () => {
    try {
      // Simulating API call to fetch workloads
      const response = await fetch('https://api.example.com/workloads');
      const data = await response.json();
      setWorkloads(data);
    } catch (error) {
      console.error('Error fetching workloads:', error);
      // Handle error (e.g., show error message to user)
    }
  };

  const handleApplicationClick = (app) => {
    setSelectedApplication(app);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <nav className="bg-white p-4 mb-6 rounded-lg shadow-md">
        <ul className="flex space-x-4 items-center">
          <li className="text-blue-500">Account</li>
          <li><ChevronRight size={20} /></li>
          <li>{accountId}</li>
          <li><ChevronRight size={20} /></li>
          <li>Applications</li>
        </ul>
      </nav>
      
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">AWS Well-Architected Review</h1>
        <button
          onClick={fetchWorkloads}
          className="flex items-center bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
        >
          <Download size={20} className="mr-2" />
          Download Workloads
        </button>
      </div>
      
      {applications.length === 0 && (
        <div className="bg-blue-100 p-4 rounded-lg flex items-center mb-6">
          <Info className="text-blue-500 mr-2 flex-shrink-0" size={20} />
          <p className="text-sm">
            No applications have been defined yet. All resources are currently considered part of the Default Application. 
            Define an application to organize your resources and get more specific Well-Architected insights.
          </p>
        </div>
      )}
      
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Applications / Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {applications.length === 0 ? (
            <ApplicationCard 
              name="Default Application" 
              status="healthy" 
              lastAssessment="Not assessed"
              onClick={() => handleApplicationClick({ name: "Default Application", status: "healthy", lastAssessment: "Not assessed" })}
            />
          ) : (
            applications.map((app, index) => (
              <ApplicationCard 
                key={index}
                name={app.name} 
                status={app.status} 
                lastAssessment={app.lastAssessment}
                onClick={() => handleApplicationClick(app)}
              />
            ))
          )}
          <div 
            className="bg-gray-200 p-4 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors"
            onClick={() => setIsPanelOpen(true)}
          >
            <Plus size={24} className="mr-2" />
            <span>Define New Application</span>
          </div>
        </div>
      </div>

      <ApplicationDefinitionPanel 
        isOpen={isPanelOpen}
        onClose={() => setIsPanelOpen(false)}
        onSave={addNewApplication}
        existingWorkloads={workloads}
      />

      {selectedApplication && (
          <ApplicationDetailView
            application={selectedApplication}
            onClose={() => setSelectedApplication(null)}
          />
        )}
      </div>
    );
  };
  
  export default WARPageLayout;