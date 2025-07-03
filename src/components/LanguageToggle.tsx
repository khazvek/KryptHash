import React from 'react';
import { Languages } from 'lucide-react';
import { Language } from '../types';

interface LanguageToggleProps {
  language: Language;
  onToggle: (lang: Language) => void;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({ language, onToggle }) => {
  return (
    <div className="flex items-center gap-2">
      <Languages className="w-4 h-4 text-gray-600 dark:text-gray-400" />
      <div className="flex rounded-lg border border-gray-300 dark:border-gray-600 overflow-hidden">
        <button
          onClick={() => onToggle('fr')}
          className={`px-3 py-1 text-sm font-medium transition-all duration-200 ${
            language === 'fr'
              ? 'bg-blue-600 text-white'
              : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
          }`}
        >
          FR
        </button>
        <button
          onClick={() => onToggle('en')}
          className={`px-3 py-1 text-sm font-medium transition-all duration-200 ${
            language === 'en'
              ? 'bg-blue-600 text-white'
              : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
          }`}
        >
          EN
        </button>
      </div>
    </div>
  );
};