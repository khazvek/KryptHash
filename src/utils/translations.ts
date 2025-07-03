import { Translations } from '../types';

export const translations: Record<string, Translations> = {
  fr: {
    header: {
      title: 'KryptHash',
      subtitle: 'Générateur et vérificateur de hash cryptographique'
    },
    tabs: {
      generator: 'Générateur',
      verifier: 'Vérificateur',
      education: 'Apprendre'
    },
    generator: {
      title: 'Générateur de Hash',
      algorithm: 'Algorithme',
      inputLabel: 'Texte à hacher',
      inputPlaceholder: 'Entrez le texte à hacher...',
      generateButton: 'Générer Hash',
      generating: 'Génération...',
      clearButton: 'Effacer',
      hashGenerated: 'Hash généré',
      characters: 'caractères',
      errorEmpty: 'Veuillez entrer un texte à hacher',
      errorGeneration: 'Erreur lors de la génération du hash. Veuillez réessayer.',
      bcryptInfo: 'bcrypt en cours... Cette opération peut prendre quelques secondes car bcrypt est conçu pour être lent afin d\'améliorer la sécurité.'
    },
    verifier: {
      title: 'Vérificateur de Hash',
      algorithm: 'Algorithme',
      originalLabel: 'Texte original',
      originalPlaceholder: 'Entrez le texte original...',
      hashLabel: 'Hash à vérifier',
      hashPlaceholder: 'Entrez le hash à vérifier...',
      verifyButton: 'Vérifier Hash',
      verifying: 'Vérification...',
      clearButton: 'Effacer',
      errorOriginal: 'Veuillez entrer le texte original',
      errorHash: 'Veuillez entrer le hash à vérifier',
      errorVerification: 'Erreur lors de la vérification. Vérifiez le format du hash.',
      bcryptInfo: 'Vérification bcrypt en cours... Cette opération peut prendre quelques secondes car bcrypt nécessite un temps de calcul important pour des raisons de sécurité.',
      matchSuccess: '✅ Hash correspondant',
      matchFail: '❌ Hash non correspondant',
      matchSuccessDesc: 'Le texte original correspond au hash fourni.',
      matchFailDesc: 'Le texte original ne correspond pas au hash fourni.'
    },
    education: {
      title: 'Mode Pédagogique',
      selectAlgorithm: 'Sélectionner un algorithme',
      algorithmInfo: 'Informations sur l\'algorithme',
      description: 'Description',
      useCase: 'Cas d\'usage',
      security: 'Sécurité',
      speed: 'Vitesse',
      concepts: 'Concepts Fondamentaux',
      whatIsHash: 'Qu\'est-ce qu\'un hash ?',
      whatIsHashDesc: 'Un hash (ou empreinte) est une fonction mathématique qui transforme une donnée de taille arbitraire en une chaîne de caractères de taille fixe. Cette transformation est unidirectionnelle : il est impossible de retrouver la donnée originale à partir du hash.',
      hashVsEncryption: 'Hash vs Chiffrement',
      hash: 'Hash',
      encryption: 'Chiffrement',
      hashFeatures: ['• Unidirectionnel', '• Taille fixe', '• Vérification d\'intégrité', '• Stockage de mots de passe'],
      encryptionFeatures: ['• Bidirectionnel', '• Taille variable', '• Protection de données', '• Communication sécurisée']
    },
    security: {
      low: 'faible',
      medium: 'moyenne',
      high: 'élevée'
    },
    speed: {
      slow: 'lente',
      medium: 'moyenne',
      fast: 'rapide'
    },
    footer: 'KryptHash - Outil professionnel pour la génération et vérification de hash',
    copy: 'Copier'
  },
  en: {
    header: {
      title: 'KryptHash',
      subtitle: 'Cryptographic hash generator and verifier'
    },
    tabs: {
      generator: 'Generator',
      verifier: 'Verifier',
      education: 'Learn'
    },
    generator: {
      title: 'Hash Generator',
      algorithm: 'Algorithm',
      inputLabel: 'Text to hash',
      inputPlaceholder: 'Enter text to hash...',
      generateButton: 'Generate Hash',
      generating: 'Generating...',
      clearButton: 'Clear',
      hashGenerated: 'Generated hash',
      characters: 'characters',
      errorEmpty: 'Please enter text to hash',
      errorGeneration: 'Error generating hash. Please try again.',
      bcryptInfo: 'bcrypt in progress... This operation may take a few seconds as bcrypt is designed to be slow to improve security.'
    },
    verifier: {
      title: 'Hash Verifier',
      algorithm: 'Algorithm',
      originalLabel: 'Original text',
      originalPlaceholder: 'Enter original text...',
      hashLabel: 'Hash to verify',
      hashPlaceholder: 'Enter hash to verify...',
      verifyButton: 'Verify Hash',
      verifying: 'Verifying...',
      clearButton: 'Clear',
      errorOriginal: 'Please enter the original text',
      errorHash: 'Please enter the hash to verify',
      errorVerification: 'Verification error. Check the hash format.',
      bcryptInfo: 'bcrypt verification in progress... This operation may take a few seconds as bcrypt requires significant computation time for security reasons.',
      matchSuccess: '✅ Hash matches',
      matchFail: '❌ Hash does not match',
      matchSuccessDesc: 'The original text matches the provided hash.',
      matchFailDesc: 'The original text does not match the provided hash.'
    },
    education: {
      title: 'Educational Mode',
      selectAlgorithm: 'Select an algorithm',
      algorithmInfo: 'Algorithm information',
      description: 'Description',
      useCase: 'Use case',
      security: 'Security',
      speed: 'Speed',
      concepts: 'Fundamental Concepts',
      whatIsHash: 'What is a hash?',
      whatIsHashDesc: 'A hash (or fingerprint) is a mathematical function that transforms data of arbitrary size into a fixed-size character string. This transformation is unidirectional: it is impossible to retrieve the original data from the hash.',
      hashVsEncryption: 'Hash vs Encryption',
      hash: 'Hash',
      encryption: 'Encryption',
      hashFeatures: ['• Unidirectional', '• Fixed size', '• Integrity verification', '• Password storage'],
      encryptionFeatures: ['• Bidirectional', '• Variable size', '• Data protection', '• Secure communication']
    },
    security: {
      low: 'low',
      medium: 'medium',
      high: 'high'
    },
    speed: {
      slow: 'slow',
      medium: 'medium',
      fast: 'fast'
    },
    footer: 'KryptHash - Professional tool for hash generation and verification',
    copy: 'Copy'
  }
};