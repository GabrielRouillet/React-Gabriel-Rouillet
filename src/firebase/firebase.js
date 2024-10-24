// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {doc,getDoc} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcR8jmt3z1p6OaSsXhJV5kPbKgkYdXiYg",
  authDomain: "ecommerce-react-coderhou-a164b.firebaseapp.com",
  projectId: "ecommerce-react-coderhou-a164b",
  storageBucket: "ecommerce-react-coderhou-a164b.appspot.com",
  messagingSenderId: "191624579782",
  appId: "1:191624579782:web:dc68ab778631ae25a0a5c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

//obtener un producto

export async function getSingleProduct(id){
    const documentRef = doc(db, 'products', id);

    try{
        const snapshot = await getDoc(documentRef);
        return snapshot
    }catch{

    }

}