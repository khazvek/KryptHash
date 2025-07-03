# 🧠 KryptHash

**KryptHash** est une application web simple, rapide et efficace pour :
- Générer des hashs à partir d’un texte (MD5, SHA1, SHA256, SHA512, bcrypt…)
- Comparer un mot clair avec un hash pour vérifier leur correspondance
- Comprendre les bases du hashing en développement backend

> 🔐 Une boîte à outils moderne pour devs, admins et étudiants en cybersécurité.

---

## ✨ Fonctionnalités

- 🔄 **Générateur de Hash**
  - Algorithmes supportés : MD5, SHA1, SHA256, SHA512, bcrypt
  - Bouton "copier" intégré
  - Salt optionnel pour bcrypt

- ✅ **Vérificateur de Hash**
  - Entrez un mot clair + hash
  - Sélectionnez l'algorithme
  - Vérification live : Match ou Non Match

- 📚 **Mode pédagogique**
  - Explication des algorithmes
  - Différence entre hash / chiffrement
  - Cas d’usage en sécurité (mot de passe, tokens, etc.)

- 🌗 **UI moderne**
  - Dark mode
  - Responsive mobile
  - Animations fluides

---

## 🛠️ Stack technique

| Technologie | Usage |
|-------------|-------|
| React.js | Framework frontend |
| Tailwind CSS | Styling fluide |
| crypto-js | Fonctions de hash (MD5, SHA, etc.) |
| bcryptjs | Support du bcrypt |
| react-toastify | Notifications |

---

## 🚀 Démarrage rapide

```bash
git clone https://github.com/khazvek/KryptHash.git
cd KryptHash
npm install
npm run dev
