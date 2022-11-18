import firebase from "firebase"
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyDAThbIaOLVLiSWFL0S_BagbOhgjuEu1Nc",
    authDomain: "crud-3214.firebaseapp.com",
    projectId: "crud-3214",
    storageBucket: "crud-3214.appspot.com",
    messagingSenderId: "124430672128",
    appId: "1:124430672128:web:f7ea92f47f5195fcdb93e5"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = firebase.firestore()
  export default database 