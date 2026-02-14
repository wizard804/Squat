
const firebaseConfig = {
    apiKey: "TON_API_KEY",
    authDomain: "ton-projet.firebaseapp.com",
    projectId: "ton-projet",
    storageBucket: "ton-projet.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:123456789:web:abcdef"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const appDiv = document.getElementById('app');
appDiv.innerHTML = "<p style='color: green;'>✅ Firebase est connecté !</p>";
