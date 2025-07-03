import CryptoJS from 'crypto-js';
import bcrypt from 'bcryptjs';
import { HashAlgorithm } from '../types';

export const hashText = async (text: string, algorithm: HashAlgorithm): Promise<string> => {
  if (!text) return '';
  
  switch (algorithm) {
    case 'MD5':
      return CryptoJS.MD5(text).toString();
    
    case 'SHA1':
      return CryptoJS.SHA1(text).toString();
    
    case 'SHA256':
      return CryptoJS.SHA256(text).toString();
    
    case 'SHA512':
      return CryptoJS.SHA512(text).toString();
    
    case 'bcrypt':
      const saltRounds = 12;
      return await bcrypt.hash(text, saltRounds);
    
    default:
      throw new Error(`Algorithme non supporté: ${algorithm}`);
  }
};

export const verifyHash = async (text: string, hash: string, algorithm: HashAlgorithm): Promise<boolean> => {
  if (!text || !hash) return false;
  
  try {
    if (algorithm === 'bcrypt') {
      return await bcrypt.compare(text, hash);
    } else {
      const newHash = await hashText(text, algorithm);
      return newHash.toLowerCase() === hash.toLowerCase();
    }
  } catch (error) {
    return false;
  }
};

export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    // Fallback pour les navigateurs plus anciens
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
      const successful = document.execCommand('copy');
      document.body.removeChild(textArea);
      return successful;
    } catch (fallbackError) {
      document.body.removeChild(textArea);
      return false;
    }
  }
};