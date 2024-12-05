// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,setDoc,doc } from "firebase/firestore";
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


// setDoc(doc(db, 'products', "myid1001"), {
//     name: "sponsor",
//     type: "food",
//     price: 700
// });

// setDoc(doc(db, "products", "bceSK1VzSEe1U5i6cUIi"), {
//     name: "deedo",
//     type: "food",
//     price: 500
// }).then(() => {
//     console.log("Update Successfully");
// }).catch(error => {
//     console.log(error);
// });

// => Before Merge
// setDoc(doc(db, "products", "myid1002"), {
//     name: "speed",
//     type: "food",
//     price: 500,
//     unit: "bot"
// }).catch(error => {
//     console.log(error);
// });


// setDoc(doc(db, "products", "myid1002"), {
// }).then(() => {
//     console.log("Update Successfully");
// }).catch(error => {
//     console.log(error);
// });

// =>After Merge

// setDoc(doc(db, "products", "myid1002"), {
//     name: "speed",
//     type: "food",
//     price: 500,
//     unit: "bot"
// }).then(() => {
//     console.log("Update Successfully");
// }).catch(error => {
//     console.log(error);
// });

// အသစ် ထပ်တိုး or update လုပ်တာတို့ဖြစ်နေမှ လုပ်မှာ မဟုတ်ရင် ဒီအတိုင်းပဲ ဖြစ်နေမှာ merge:true က ဗလာဖြစ်သွားမှာမဟုတ်ဘူး
// setDoc(doc(db, "products", "myid1002"), {
// },{merge:true}).then(() => {
//     console.log("Update Successfully");
// }).catch(error => {
//     console.log(error);
// });

// => Before Merge
// setDoc(doc(db, "products", "myid1002"), {
//     name: "deedo"
// }).then(() => {
//     console.log("Update Successfully");
// }).catch(error => {
//     console.log(error);
// });

// setDoc(doc(db, "products", "myid1002"), {
//     name: "speed",
//     type: "food",
//     price: 500,
//     unit: "bot"
// }).then(() => {
//     console.log("Update Successfully");
// }).catch(error => {
//     console.log(error);
// });

// => After Merge
// merge:true က ပေးလိုက်တဲ့ data ကိုပဲ update လုပ်မှာ
// setDoc(doc(db, "products", "myid1002"), {
//     name: "deedo"
// },{merge:true}).then(() => {
//     console.log("Update Successfully");
// }).catch(error => {
//     console.log(error);
// });

// => Before Merge
// setDoc(doc(db, "products", "myid1002"), {
//     stock: 200
// }).then(() => {
//     console.log("Update Successfully");
// }).catch(error => {
//     console.log(error);
// });

// => After Merge 

setDoc(doc(db, "products", "myid1002"), {
    name: "speed",
    type: "food",
    price: 500,
    unit: "bot"
}).then(() => {
    console.log("Update Successfully");
}).catch(error => {
    console.log(error);
});


setDoc(doc(db, "products", "myid1002"), {
    stock: 200, 
    promo: "10%"
},{merge:true}).then(() => {
    console.log("Update Successfully");
}).catch(error => {
    console.log(error);
});