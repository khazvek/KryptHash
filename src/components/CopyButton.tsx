import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { copyToClipboard } from '../utils/crypto';
import { translations } from '../utils/translations';
import { Language } from '../types';

interface CopyButtonProps {
  text: string;
  disabled?: boolean;
  language: Language;
}

export const CopyButton: React.FC<CopyButtonProps> = ({ text, disabled, language }) => {
  const [copied, setCopied] = useState(false);
  const t = translations[language];

  const handleCopy = async () => {
    if (!text || disabled) return;
    
    const success = await copyToClipboard(text);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      onClick={handleCopy}
      disabled={disabled || !text}
      className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 
                 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 
                 transition-all duration-200 hover:scale-105 disabled:opacity-50 
                 disabled:cursor-not-allowed"
      title={t.copy}
    >
      {copied ? (
        <Check className="w-4 h-4 text-green-500" />
      ) : (
        <Copy className="w-4 h-4 text-gray-600 dark:text-gray-400" />
      )}
    </button>
  );
};