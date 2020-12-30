import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDwxna-4ZE08WkFCA_5IUqvxTDfkEzgaDI",
  authDomain: "sociogram-world.firebaseapp.com",
  databaseURL: "https://sociogram-world.firebaseio.com",
  projectId: "sociogram-world",
  storageBucket: "sociogram-world.appspot.com",
  messagingSenderId: "598795257178",
  appId: "1:598795257178:web:a45a5c31b90e7c5be51f63",
  measurementId: "G-PJM542H6V1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
