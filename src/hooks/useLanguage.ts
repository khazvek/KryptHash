import { useState, useEffect } from 'react';
import { Language } from '../types';

export function useLanguage(): [Language, (lang: Language) => void] {
  const [language, setLanguage] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('language');
      if (saved && (saved === 'fr' || saved === 'en')) {
        return saved as Language;
      }
      // Detect browser language
      const browserLang = navigator.language.toLowerCase();
      return browserLang.startsWith('fr') ? 'fr' : 'en';
    } catch (error) {
      return 'en';
    }
  });

  const setLanguageAndSave = (lang: Language) => {
    try {
      setLanguage(lang);
      localStorage.setItem('language', lang);
    } catch (error) {
      console.error('Error saving language:', error);
    }
  };

  return [language, setLanguageAndSave];
}