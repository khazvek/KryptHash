import React, { useState } from 'react';
import { Shield, Check, X, Loader2, RotateCcw, AlertCircle } from 'lucide-react';
import { HashAlgorithm, Language } from '../types';
import { verifyHash } from '../utils/crypto';
import { translations } from '../utils/translations';

const algorithms: HashAlgorithm[] = ['MD5', 'SHA1', 'SHA256', 'SHA512', 'bcrypt'];

interface HashVerifierProps {
  language: Language;
}

export const HashVerifier: React.FC<HashVerifierProps> = ({ language }) => {
  const [input, setInput] = useState('');
  const [hash, setHash] = useState('');
  const [algorithm, setAlgorithm] = useState<HashAlgorithm>('SHA256');
  const [result, setResult] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const t = translations[language];

  const handleVerify = async () => {
    if (!input.trim()) {
      setErrorMessage(t.verifier.errorOriginal);
      return;
    }
    
    if (!hash.trim()) {
      setErrorMessage(t.verifier.errorHash);
      return;
    }
    
    setLoading(true);
    setErrorMessage('');
    try {
      const isMatch = await verifyHash(input, hash, algorithm);
      setResult(isMatch);
    } catch (error) {
      console.error('Verification error:', error);
      setErrorMessage(t.verifier.errorVerification);
      setResult(false);
    } finally {
      setLoading(false);
    }
  };

  const clearAll = () => {
    setInput('');
    setHash('');
    setResult(null);
    setErrorMessage('');
    setLoading(false);
  };

  const handleInputChange = (value: string, field: 'input' | 'hash') => {
    if (field === 'input') {
      setInput(value);
    } else {
      setHash(value);
    }
    setErrorMessage('');
    setResult(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <Shield className="w-6 h-6 text-teal-600 dark:text-teal-400" />
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          {t.verifier.title}
        </h2>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {t.verifier.algorithm}
          </label>
          <select
            value={algorithm}
            onChange={(e) => setAlgorithm(e.target.value as HashAlgorithm)}
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 
                     bg-white dark:bg-gray-800 text-gray-900 dark:text-white
                     focus:ring-2 focus:ring-teal-500 focus:border-transparent
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
            {t.verifier.originalLabel}
          </label>
          <textarea
            value={input}
            onChange={(e) => handleInputChange(e.target.value, 'input')}
            placeholder={t.verifier.originalPlaceholder}
            className={`w-full p-3 rounded-lg border ${
              errorMessage && !input.trim()
                ? 'border-red-300 dark:border-red-600 focus:ring-red-500' 
                : 'border-gray-300 dark:border-gray-600 focus:ring-teal-500'
            } bg-white dark:bg-gray-800 text-gray-900 dark:text-white
                     focus:ring-2 focus:border-transparent
                     transition-all duration-200 resize-none`}
            rows={3}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {t.verifier.hashLabel}
          </label>
          <textarea
            value={hash}
            onChange={(e) => handleInputChange(e.target.value, 'hash')}
            placeholder={t.verifier.hashPlaceholder}
            className={`w-full p-3 rounded-lg border ${
              errorMessage && !hash.trim()
                ? 'border-red-300 dark:border-red-600 focus:ring-red-500' 
                : 'border-gray-300 dark:border-gray-600 focus:ring-teal-500'
            } bg-white dark:bg-gray-800 text-gray-900 dark:text-white
                     focus:ring-2 focus:border-transparent
                     transition-all duration-200 resize-none font-mono text-sm`}
            rows={3}
          />
        </div>

        {errorMessage && (
          <div className="flex items-center gap-2 text-red-600 dark:text-red-400">
            <AlertCircle className="w-4 h-4" />
            <span className="text-sm">{errorMessage}</span>
          </div>
        )}

        <div className="flex gap-2">
          <button
            onClick={handleVerify}
            disabled={!input.trim() || !hash.trim() || loading}
            className="flex items-center gap-2 px-4 py-2 rounded-lg 
                     bg-teal-600 hover:bg-teal-700 text-white
                     disabled:opacity-50 disabled:cursor-not-allowed
                     transition-all duration-200 hover:scale-105"
          >
            {loading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Shield className="w-4 h-4" />
            )}
            {loading ? t.verifier.verifying : t.verifier.verifyButton}
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
            {t.verifier.clearButton}
          </button>
        </div>

        {/* bcrypt info message */}
        {loading && algorithm === 'bcrypt' && (
          <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-3">
            <div className="flex items-center gap-2">
              <Loader2 className="w-4 h-4 text-amber-600 dark:text-amber-400 animate-spin" />
              <p className="text-sm text-amber-800 dark:text-amber-200">
                <strong>bcrypt</strong> - {t.verifier.bcryptInfo}
              </p>
            </div>
          </div>
        )}

        {result !== null && (
          <div className={`p-4 rounded-lg border-2 ${
            result 
              ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800' 
              : 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'
          }`}>
            <div className="flex items-center gap-2">
              {result ? (
                <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
              ) : (
                <X className="w-5 h-5 text-red-600 dark:text-red-400" />
              )}
              <span className={`font-medium ${
                result 
                  ? 'text-green-800 dark:text-green-200' 
                  : 'text-red-800 dark:text-red-200'
              }`}>
                {result ? t.verifier.matchSuccess : t.verifier.matchFail}
              </span>
            </div>
            <p className={`text-sm mt-1 ${
              result 
                ? 'text-green-700 dark:text-green-300' 
                : 'text-red-700 dark:text-red-300'
            }`}>
              {result ? t.verifier.matchSuccessDesc : t.verifier.matchFailDesc}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};