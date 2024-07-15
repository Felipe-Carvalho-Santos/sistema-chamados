import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAh4ns3Xs0JQq9BuNrzH2jLAoMVBGc0lN8",
    authDomain: "chamados-9a6c3.firebaseapp.com",
    projectId: "chamados-9a6c3",
    storageBucket: "chamados-9a6c3.appspot.com",
    messagingSenderId: "346941493830",
    appId: "1:346941493830:web:e0a73c0d279b44d379f047",
    measurementId: "G-XF4J5H8R8R"
  };

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage };