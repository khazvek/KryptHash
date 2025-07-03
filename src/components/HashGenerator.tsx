import React, { useState, useEffect } from 'react';
import { Hash, Wand2, Loader2, RotateCcw, AlertCircle } from 'lucide-react';
import { HashAlgorithm, Language } from '../types';
import { hashText } from '../utils/crypto';
import { CopyButton } from './CopyButton';
import { translations } from '../utils/translations';

const algorithms: HashAlgorithm[] = ['MD5', 'SHA1', 'SHA256', 'SHA512', 'bcrypt'];

interface HashGeneratorProps {
  language: Language;
}

export const HashGenerator: React.FC<HashGeneratorProps> = ({ language }) => {
  const [input, setInput] = useState('');
  const [algorithm, setAlgorithm] = useState<HashAlgorithm>('SHA256');
  const [hash, setHash] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const t = translations[language];

  const generateHash = async () => {
    if (!input.trim()) {
      setErrorMessage(t.generator.errorEmpty);
      return;
    }
    
    setLoading(true);
    setErrorMessage('');
    try {
      const result = await hashText(input, algorithm);
      setHash(result);
    } catch (error) {
      console.error('Error hashing:', error);
      setErrorMessage(t.generator.errorGeneration);
      setHash('');
    } finally {
      setLoading(false);
    }
  };

  const clearAll = () => {
    setInput('');
    setHash('');
    setErrorMessage('');
    setLoading(false);
  };

  useEffect(() => {
    if (input.trim()) {
      setErrorMessage('');
      generateHash();
    } else {
      setHash('');
      setErrorMessage('');
    }
  }, [input, algorithm]);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <Hash className="w-6 h-6 text-blue-600 dark:text-blue-400" />
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          {t.generator.title}
        </h2>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {t.generator.algorithm}
          </label>
          <select
            value={algorithm}
            onChange={(e) => setAlgorithm(e.target.value as HashAlgorithm)}
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 
                     bg-white dark:bg-gray-800 text-gray-900 dark:text-white
                     focus:ring-2 focus:ring-blue-500 focus:border-transparent
                     transition-all duration-200"
          >
            {algorithms.map((alg) => (
              <option key={alg} value={alg}>
                {alg}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {t.generator.inputLabel}
          </label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={t.generator.inputPlaceholder}
            className={`w-full p-3 rounded-lg border ${
              errorMessage 
                ? 'border-red-300 dark:border-red-600 focus:ring-red-500' 
                : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500'
            } bg-white dark:bg-gray-800 text-gray-900 dark:text-white
                     focus:ring-2 focus:border-transparent
                     transition-all duration-200 resize-none`}
            rows={3}
          />
          {errorMessage && (
            <div className="mt-2 flex items-center gap-2 text-red-600 dark:text-red-400">
              <AlertCircle className="w-4 h-4" />
              <span className="text-sm">{errorMessage}</span>
            </div>
          )}
        </div>

        <div className="flex gap-2">
          <button
            onClick={generateHash}
            disabled={!input.trim() || loading}
            className="flex items-center gap-2 px-4 py-2 rounded-lg 
                     bg-blue-600 hover:bg-blue-700 text-white
                     disabled:opacity-50 disabled:cursor-not-allowed
                     transition-all duration-200 hover:scale-105"
          >
            {loading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Wand2 className="w-4 h-4" />
            )}
            {loading ? t.generator.generating : t.generator.generateButton}
          </button>
          
          <button
            onClick={clearAll}
            disabled={loading}
            className="flex items-center gap-2 px-4 py-2 rounded-lg 
                     bg-gray-600 hover:bg-gray-700 text-white
                     disabled:opacity-50 disabled:cursor-not-allowed
                     transition-all duration-200 hover:scale-105"
          >
            <RotateCcw className="w-4 h-4" />
            {t.generator.clearButton}
          </button>
        </div>

        {/* bcrypt info message */}
        {loading && algorithm === 'bcrypt' && (
          <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-3">
            <div className="flex items-center gap-2">
              <Loader2 className="w-4 h-4 text-amber-600 dark:text-amber-400 animate-spin" />
              <p className="text-sm text-amber-800 dark:text-amber-200">
                <strong>bcrypt</strong> - {t.generator.bcryptInfo}
              </p>
            </div>
          </div>
        )}

        {hash && (
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {t.generator.hashGenerated} ({algorithm})
                </label>
                <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
                  {hash.length} {t.generator.characters}
                </span>
              </div>
              <CopyButton text={hash} language={language} />
            </div>
            <div className="p-3 bg-white dark:bg-gray-900 rounded border border-gray-200 dark:border-gray-600">
              <code className="text-sm text-gray-900 dark:text-gray-100 break-all font-mono">
                {hash}
              </code>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};