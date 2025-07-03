import React, { useState } from 'react';
import { BookOpen, Info, Lock, Zap } from 'lucide-react';
import { HashAlgorithm, Language } from '../types';
import { algorithmInfo } from '../utils/algorithmInfo';
import { translations } from '../utils/translations';

const algorithms: HashAlgorithm[] = ['MD5', 'SHA1', 'SHA256', 'SHA512', 'bcrypt'];

interface EducationalModeProps {
  language: Language;
}

export const EducationalMode: React.FC<EducationalModeProps> = ({ language }) => {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<HashAlgorithm>('SHA256');
  const info = algorithmInfo[language][selectedAlgorithm];
  const t = translations[language];

  const getSecurityColor = (level: string) => {
    switch (level) {
      case 'high': return 'text-green-600 dark:text-green-400';
      case 'medium': return 'text-yellow-600 dark:text-yellow-400';
      case 'low': return 'text-red-600 dark:text-red-400';
      default: return 'text-gray-600 dark:text-gray-400';
    }
  };

  const getSpeedColor = (speed: string) => {
    switch (speed) {
      case 'fast': return 'text-green-600 dark:text-green-400';
      case 'medium': return 'text-yellow-600 dark:text-yellow-400';
      case 'slow': return 'text-red-600 dark:text-red-400';
      default: return 'text-gray-600 dark:text-gray-400';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <BookOpen className="w-6 h-6 text-orange-600 dark:text-orange-400" />
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          {t.education.title}
        </h2>
      </div>

      <div className="grid gap-6">
        {/* Algorithm selector */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            {t.education.selectAlgorithm}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
            {algorithms.map((alg) => (
              <button
                key={alg}
                onClick={() => setSelectedAlgorithm(alg)}
                className={`p-3 rounded-lg border-2 transition-all duration-200 hover:scale-105 ${
                  selectedAlgorithm === alg
                    ? 'border-orange-500 bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300'
                    : 'border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-500'
                }`}
              >
                <div className="text-sm font-medium">{alg}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Algorithm information */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Info className="w-5 h-5 text-orange-600 dark:text-orange-400" />
            {info.name}
          </h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t.education.description}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {info.description}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t.education.useCase}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {info.useCase}
              </p>
            </div>

            <div className="flex gap-6">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-700 dark:text-gray-300">{t.education.security}:</span>
                <span className={`text-sm font-medium ${getSecurityColor(info.security)}`}>
                  {t.security[info.security]}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-700 dark:text-gray-300">{t.education.speed}:</span>
                <span className={`text-sm font-medium ${getSpeedColor(info.speed)}`}>
                  {t.speed[info.speed]}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* General concepts */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            {t.education.concepts}
          </h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t.education.whatIsHash}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {t.education.whatIsHashDesc}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t.education.hashVsEncryption}
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h5 className="font-medium text-blue-800 dark:text-blue-200 mb-2">{t.education.hash}</h5>
                  <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                    {t.education.hashFeatures.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h5 className="font-medium text-green-800 dark:text-green-200 mb-2">{t.education.encryption}</h5>
                  <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                    {t.education.encryptionFeatures.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};