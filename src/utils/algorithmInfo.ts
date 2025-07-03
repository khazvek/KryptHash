import { AlgorithmInfo } from '../types';

export const algorithmInfo: Record<string, Record<string, AlgorithmInfo>> = {
  fr: {
    MD5: {
      name: 'MD5',
      description: 'Algorithme de hachage rapide mais obsolète pour la sécurité. Produit un hash de 128 bits.',
      useCase: 'Vérification d\'intégrité de fichiers, sommes de contrôle (non recommandé pour la sécurité)',
      security: 'low',
      speed: 'fast'
    },
    SHA1: {
      name: 'SHA-1',
      description: 'Algorithme de hachage cryptographique désormais considéré comme faible. Produit un hash de 160 bits.',
      useCase: 'Anciennement utilisé pour les certificats SSL, maintenant déprécié',
      security: 'low',
      speed: 'fast'
    },
    SHA256: {
      name: 'SHA-256',
      description: 'Algorithme de hachage sécurisé et largement utilisé. Produit un hash de 256 bits.',
      useCase: 'Blockchain, signatures numériques, authentification, stockage de mots de passe',
      security: 'high',
      speed: 'medium'
    },
    SHA512: {
      name: 'SHA-512',
      description: 'Version plus robuste de SHA-2 avec un hash de 512 bits. Très sécurisé.',
      useCase: 'Applications nécessitant une sécurité maximale, systèmes cryptographiques avancés',
      security: 'high',
      speed: 'medium'
    },
    bcrypt: {
      name: 'bcrypt',
      description: 'Fonction de hachage adaptative avec salt automatique, conçue pour les mots de passe.',
      useCase: 'Stockage sécurisé de mots de passe, authentification utilisateur',
      security: 'high',
      speed: 'slow'
    }
  },
  en: {
    MD5: {
      name: 'MD5',
      description: 'Fast hashing algorithm but obsolete for security. Produces a 128-bit hash.',
      useCase: 'File integrity verification, checksums (not recommended for security)',
      security: 'low',
      speed: 'fast'
    },
    SHA1: {
      name: 'SHA-1',
      description: 'Cryptographic hash algorithm now considered weak. Produces a 160-bit hash.',
      useCase: 'Formerly used for SSL certificates, now deprecated',
      security: 'low',
      speed: 'fast'
    },
    SHA256: {
      name: 'SHA-256',
      description: 'Secure and widely used hashing algorithm. Produces a 256-bit hash.',
      useCase: 'Blockchain, digital signatures, authentication, password storage',
      security: 'high',
      speed: 'medium'
    },
    SHA512: {
      name: 'SHA-512',
      description: 'More robust version of SHA-2 with a 512-bit hash. Very secure.',
      useCase: 'Applications requiring maximum security, advanced cryptographic systems',
      security: 'high',
      speed: 'medium'
    },
    bcrypt: {
      name: 'bcrypt',
      description: 'Adaptive hash function with automatic salt, designed for passwords.',
      useCase: 'Secure password storage, user authentication',
      security: 'high',
      speed: 'slow'
    }
  }
};