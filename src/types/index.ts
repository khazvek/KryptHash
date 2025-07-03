export type HashAlgorithm = 'MD5' | 'SHA1' | 'SHA256' | 'SHA512' | 'bcrypt';

export interface HashResult {
  hash: string;
  algorithm: HashAlgorithm;
  timestamp: number;
}

export interface AlgorithmInfo {
  name: string;
  description: string;
  useCase: string;
  security: 'low' | 'medium' | 'high';
  speed: 'slow' | 'medium' | 'fast';
}

export interface TabItem {
  id: string;
  label: string;
  icon: React.ComponentType<any>;
}

export type Language = 'fr' | 'en';

export interface Translations {
  header: {
    title: string;
    subtitle: string;
  };
  tabs: {
    generator: string;
    verifier: string;
    education: string;
  };
  generator: {
    title: string;
    algorithm: string;
    inputLabel: string;
    inputPlaceholder: string;
    generateButton: string;
    generating: string;
    clearButton: string;
    hashGenerated: string;
    characters: string;
    errorEmpty: string;
    errorGeneration: string;
    bcryptInfo: string;
  };
  verifier: {
    title: string;
    algorithm: string;
    originalLabel: string;
    originalPlaceholder: string;
    hashLabel: string;
    hashPlaceholder: string;
    verifyButton: string;
    verifying: string;
    clearButton: string;
    errorOriginal: string;
    errorHash: string;
    errorVerification: string;
    bcryptInfo: string;
    matchSuccess: string;
    matchFail: string;
    matchSuccessDesc: string;
    matchFailDesc: string;
  };
  education: {
    title: string;
    selectAlgorithm: string;
    algorithmInfo: string;
    description: string;
    useCase: string;
    security: string;
    speed: string;
    concepts: string;
    whatIsHash: string;
    whatIsHashDesc: string;
    hashVsEncryption: string;
    hash: string;
    encryption: string;
    hashFeatures: string;
    encryptionFeatures: string;
  };
  security: {
    low: string;
    medium: string;
    high: string;
  };
  speed: {
    slow: string;
    medium: string;
    fast: string;
  };
  footer: string;
  copy: string;
}