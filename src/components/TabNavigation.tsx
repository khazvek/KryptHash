import React from 'react';
import { TabItem, Language } from '../types';
import { translations } from '../utils/translations';

interface TabNavigationProps {
  tabs: TabItem[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  language: Language;
}

export const TabNavigation: React.FC<TabNavigationProps> = ({ tabs, activeTab, onTabChange, language }) => {
  const t = translations[language];
  
  const getTabLabel = (tabId: string) => {
    switch (tabId) {
      case 'generator': return t.tabs.generator;
      case 'verifier': return t.tabs.verifier;
      case 'education': return t.tabs.education;
      default: return tabId;
    }
  };

  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <nav className="flex space-x-8" aria-label="Tabs">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex items-center gap-2 py-4 px-1 border-b-2 font-medium text-sm transition-all duration-200 ${
                activeTab === tab.id
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:border-gray-300 dark:hover:border-gray-600'
              }`}
            >
              <Icon className="w-4 h-4" />
              {getTabLabel(tab.id)}
            </button>
          );
        })}
      </nav>
    </div>
  );
};