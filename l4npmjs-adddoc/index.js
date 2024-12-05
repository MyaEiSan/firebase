// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
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
console.log(app);

const db = getFirestore(app);
console.log(db);

// addDoc(collection(db,"users"), {
//     name: "aung aung",
//     city: "Yangon",
//     age: 20,
// });


// auto generated id with addDoc 

addDoc(collection(db,"users"), {
    name: "aung aung", 
    city: "Yangon", 
    age: 20,
}).then(docRef => {
    console.log(docRef.id);
}).catch(error => {
    console.log(error);
});


//=> Create Database

// https://console.firebase.google.com/ > Build > Firestore Database > Create Database >
// Database ID = (default)
// Location = asia-southeast1 (Singapore)
// Next > Start in production mode > Create

// Error for writing
// [FirebaseError: 7 PERMISSION_DENIED: Missing or insufficient permissions.] {
//     code: 'permission-denied',
//     customData: undefined,
//     toString: [Function (anonymous)]
//   }


// Error for writing (Solved)
// Rules > allow read, write: if true; > Publish


