import React, { useState, useEffect } from 'react';
import { Hash, Shield, BookOpen, KeyRound } from 'lucide-react';
import { HashGenerator } from './components/HashGenerator';
import { HashVerifier } from './components/HashVerifier';
import { EducationalMode } from './components/EducationalMode';
import { TabNavigation } from './components/TabNavigation';
import { ThemeToggle } from './components/ThemeToggle';
import { LanguageToggle } from './components/LanguageToggle';
import { useLocalStorage } from './hooks/useLocalStorage';
import { useLanguage } from './hooks/useLanguage';
import { TabItem } from './types';
import { translations } from './utils/translations';

const tabs: TabItem[] = [
  { id: 'generator', label: 'Generator', icon: Hash },
  { id: 'verifier', label: 'Verifier', icon: Shield },
  { id: 'education', label: 'Learn', icon: BookOpen },
];

function App() {
  const [activeTab, setActiveTab] = useState('generator');
  const [isDark, setIsDark] = useLocalStorage('theme', false);
  const [language, setLanguage] = useLanguage();

  const t = translations[language];

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'generator':
        return <HashGenerator language={language} />;
      case 'verifier':
        return <HashVerifier language={language} />;
      case 'education':
        return <EducationalMode language={language} />;
      default:
        return <HashGenerator language={language} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-6xl mx-auto p-4">
        {/* Header */}
        <header className="flex items-center justify-between py-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-600 rounded-lg">
              <KeyRound className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                {t.header.title}
              </h1>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {t.header.subtitle}
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <LanguageToggle language={language} onToggle={setLanguage} />
            <ThemeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />
          </div>
        </header>

        {/* Main Content */}
        <main className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          <TabNavigation
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
            language={language}
          />
          
          <div className="p-6">
            {renderActiveTab()}
          </div>
        </main>

        {/* Footer */}
        <footer className="text-center py-6 text-gray-500 dark:text-gray-400 text-sm">
          <p>{t.footer}</p>
        </footer>
      </div>
    </div>
  );
}

export default App;