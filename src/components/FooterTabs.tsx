import { useState } from 'react';

export default function FooterTabs() {
  const [activeTab, setActiveTab] = useState('All Orders');

  const tabs = [
    { id: 'all', label: 'All Orders' },
    { id: 'pending', label: 'Pending' },
    { id: 'reviewed', label: 'Reviewed' },
    { id: 'arrived', label: 'Arrived' }, // Removed the space after "Arrived"
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3">
      <div className="flex items-center space-x-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveTab(tab.label);
              console.log(`${tab.label} clicked`);
            }}
            className={`py-2 text-sm font-medium ${
              activeTab === tab.label
                ? 'text-[#4b6a4f] border-b-2 border-[#4b6a4f]'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab.label}
          </button>
        ))}
        <span className="text-gray-500 text-3xl font-medium">+</span>
      </div>
    </div>
  );
}