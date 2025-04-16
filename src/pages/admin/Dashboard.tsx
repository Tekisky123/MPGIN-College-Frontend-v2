// Dashboard.tsx
import { useState } from 'react';
import ManageAdmins from './ManageAdmins';
import SchoolComponent from './SchoolComponent';
import { motion } from 'framer-motion';
import { collegeConfigs, CollegeType } from '../../data/colleges';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState<CollegeType | 'admins'>('engineering');

  const tabs = [
    { id: 'engineering', label: collegeConfigs.engineering.displayName },
    { id: 'management', label: collegeConfigs.management.displayName },
    { id: 'polytechnic', label: collegeConfigs.polytechnic.displayName },
    { id: 'admins', label: 'Manage Admins' },
  ];



  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white p-4 md:p-8">
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Institution Dashboard
        </h1>
        <p className="text-gray-500 mt-1">Manage all school activities and administration</p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap items-center gap-2 md:gap-4 border-b border-gray-200 pb-3">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as CollegeType | 'admins')}
            className={`relative px-5 py-2.5 rounded-full font-medium transition-all duration-300 ease-in-out focus:outline-none
              ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white text-gray-600 border border-gray-300 hover:bg-gray-100'
              }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <motion.div
                layoutId="tab-underline"
                className="absolute inset-0 rounded-full bg-blue-600 z-[-1]"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-8 bg-white rounded-2xl shadow-xl p-6 md:p-10 transition-all duration-300 ease-in-out">
        {activeTab === 'admins' ? (
          <ManageAdmins />
        ) : (
          <SchoolComponent collegeType={activeTab}  />
        )}
      </div>
    </div>
  );
};

export default Dashboard;