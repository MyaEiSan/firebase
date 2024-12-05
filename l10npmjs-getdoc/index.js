// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore,getDoc,doc} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8US4JrXV9TGH9XIxxXdddeR-z9bSm27c",
  authDomain: "my-first-project-311b2.firebaseapp.com",
  projectId: "my-first-project-311b2",
  storageBucket: "my-first-project-311b2.appspot.com",
  messagingSenderId: "831432964903",
  appId: "1:831432964903:web:3d58a712ed10c43a700702"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// console.log(db);

const dbRef = doc(db, "products", "myid1002");
const getdata = await getDoc(dbRef);

// console.log(getdata.data());
// console.log(getdata.data().name);
// console.log(getdata.data().price);
console.log(getdata.data().type);
