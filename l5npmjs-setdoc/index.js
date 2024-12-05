// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,collection,setDoc,doc } from "firebase/firestore";
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

// custom id with setDoc
// setDoc is available for both custom id and auto generated id
// addDoc is only auto generated id

// setDoc with custom id
// setDoc(doc(db, "products", "myid1001"), {
//     name: "redbull",
//     type: "food",
//     price: 1000
// });

// setDoc(doc(db, "products", "myid1002"), {
//     name: "redbull",
//     type: "food",
//     price: 1000
// }).then(() => {
//     console.log("Create Successfully");
// }).catch(error => {
//     console.log(error);
// });


// setDoc with auto generated id 
setDoc(doc(collection(db,"products")), {
    name: "redbull",
    type: "food",
    price: 1000
}).then(() => {
    console.log("Create Successfully");
}).catch(error => {
    console.log(error);
}); 


// 1SD 


