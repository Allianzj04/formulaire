// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCj1mmOM2nV5HBHVk0-Iec4FKqqZfz0A9M",
  authDomain: "st-project-91bd9.firebaseapp.com",
  projectId: "st-project-91bd9",
  storageBucket: "st-project-91bd9.firebasestorage.app",
  messagingSenderId: "304249842658",
  appId: "1:304249842658:web:5e7cee4dbd052544fc67bb"
};

// Initialize Firebase
app = initializeApp(firebaseConfig);

// ============================================
// 2. INITIALISER FIREBASE (IMPORT DES MODULES)
// ============================================
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ============================================
// 3. GÉRER L'ENVOI DU FORMULAIRE
// ============================================
document.getElementById("contactForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    // Récupérer les valeurs
    const nom = document.getElementById("nom").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const statusDiv = document.getElementById("statusMessage");

    // Vérifier que tous les champs sont remplis
    if (!nom || !email || !message) {
        statusDiv.className = "error";
        statusDiv.textContent = "⚠️ Tous les champs sont obligatoires !";
        return;
    }

    try {
        // Envoyer les données vers Firestore (collection "contacts")
        const docRef = await addDoc(collection(db, "contacts"), {
            nom: nom,
            email: email,
            message: message,
            date: new Date().toISOString()
        });

        // Message de succès
        statusDiv.className = "success";
        statusDiv.textContent = `✅ Message envoyé avec succès ! ID: ${docRef.id}`;

        // Réinitialiser le formulaire
        document.getElementById("contactForm").reset();

    } catch (error) {
        console.error("Erreur:", error);
        statusDiv.className = "error";
        statusDiv.textContent = `❌ Erreur lors de l'envoi : ${error.message}`;
    }
});