import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDdGEmbY-06yR9qtwX6gCdC6P2kz7U_cY8",
  authDomain: "instagram-clone-7b04d.firebaseapp.com",
  projectId: "instagram-clone-7b04d",
  storageBucket: "instagram-clone-7b04d.appspot.com",
  messagingSenderId: "1060148981811",
  appId: "1:1060148981811:web:ccd4ed63e9de5c091a3346",
  measurementId: "G-3G1R2124ZP"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage };
  export default db;