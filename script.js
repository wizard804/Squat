
const firebaseConfig = {
  apiKey: "AIzaSyDxTEoyx7uwDy1Hwhloa1wCVpYa5lJ4_9I",
  authDomain: "squat-277ee.firebaseapp.com",
  databaseURL: "https://squat-277ee-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "squat-277ee",
  storageBucket: "squat-277ee.firebasestorage.app",
  messagingSenderId: "646360838023",
  appId: "1:646360838023:web:4fc76054717fed4b93ed22",
  measurementId: "G-RM8N0YQKBS"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const appDiv = document.getElementById('app');
appDiv.innerHTML = "<p style='color: green;'>✅ Firebase est connecté !</p>";
