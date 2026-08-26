# TP Services Web — Formulaire HTML + Firebase + Google Sheet

Formulaire de contact simple qui envoie les données vers :
- **Firebase Firestore** (base de données NoSQL)
- **Google Sheet** (via un Web App Google Apps Script)

## Structure du projet

```
tp-services-web-formulaire/
├── index.html       # le formulaire
├── style.css         # style
├── script.js         # logique + connexions Firebase/Sheet
├── apps-script.gs    # code à coller dans Google Apps Script
├── .gitignore
└── README.md
```

## Étapes restantes à faire toi-même (comptes personnels requis)

1. Créer le projet Firebase et récupérer la config → coller dans `script.js`.
2. Créer le Google Sheet + déployer l'Apps Script → coller l'URL dans `script.js`.
3. Créer le repo GitHub et pousser le code.
4. Tester en ouvrant `index.html` (idéalement via un serveur local, pas en `file://`, sinon les modules JS ES bloquent).

Voir la conversation pour le détail pas-à-pas de chaque étape.
