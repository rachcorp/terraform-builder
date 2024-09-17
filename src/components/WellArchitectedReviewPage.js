import React, { useState } from 'react';
import { ChevronDown, Upload, FileText, Play, Copy, RefreshCw } from 'lucide-react';

const WellArchitectedReviewPage = () => {
  const [activeTab, setActiveTab] = useState('Security');
  const [questions, setQuestions] = useState([
    { id: 1, text: "How do you securely operate your workload?", isApplicable: true, score: 3 },
    { id: 2, text: "How do you manage identities for people and machines?", isApplicable: true, score: 4 },
    { id: 3, text: "How do you manage permissions for people and machines?", isApplicable: true, score: 3 },
    { id: 4, text: "How do you detect and investigate security events?", isApplicable: true, score: 3 },
    { id: 5, text: "How do you protect your network resources?", isApplicable: true, score: 2 },
  ]);

  const handleToggleApplicable = (id) => {
    setQuestions(questions.map(q => 
      q.id === id ? { ...q, isApplicable: !q.isApplicable } : q
    ));
  };

  const handleScoreChange = (id, newScore) => {
    setQuestions(questions.map(q => 
      q.id === id ? { ...q, score: newScore } : q
    ));
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <header className="bg-white shadow-sm rounded-lg p-4 mb-6">
        <h1 className="text-2xl font-bold text-gray-800">AWS Well-Architected Review</h1>
        <div className="flex items-center mt-2">
          <span className="text-sm text-gray-500 mr-2">New Scan In Progress</span>
          <RefreshCw size={16} className="text-blue-500 animate-spin" />
        </div>
      </header>

      <main className="bg-white shadow-sm rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-700">New Workload</h2>
          <div className="flex space-x-3">
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors">
              Remediation Plan
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors flex items-center">
              <FileText size={18} className="mr-2" />
              PDF Export
            </button>
            <button className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors flex items-center">
              <Play size={18} className="mr-2" />
              Express Review
            </button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors flex items-center">
              <Upload size={18} className="mr-2" />
              Upload
            </button>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-700 mb-2">Well-Architected Framework</h3>
          <div className="flex space-x-2">
            {['Operational Excellence', 'Security', 'Reliability', 'Performance Efficiency', 'Cost Optimization', 'Sustainability'].map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 rounded-full text-sm ${activeTab === tab ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} transition-colors`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {questions.map((question) => (
            <div key={question.id} className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">{question.text}</span>
                <div className="flex items-center space-x-4">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-blue-600"
                      checked={question.isApplicable}
                      onChange={() => handleToggleApplicable(question.id)}
                    />
                    <span className="ml-2 text-gray-700">Is Applicable</span>
                  </label>
                  <select
                    className="form-select block w-20 mt-1 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    value={question.score}
                    onChange={(e) => handleScoreChange(question.id, parseInt(e.target.value))}
                    disabled={!question.isApplicable}
                  >
                    {[0, 1, 2, 3, 4].map((score) => (
                      <option key={score} value={score}>{score}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default WellArchitectedReviewPage;