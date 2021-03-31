import firebase from "firebase/app";
import firestore from "firebase/app";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  };

// const firebase = !fb.apps.length ? fb.initializeApp(firebaseConfig) : fb.app()
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

// const db = firebase.firestore();
// export const getOneCountryDetails = (name) => {    
//     return db.collection("countries").where("continent","==",name)
//             .get()
//             .then(querySnapshot => {    
//                 const data = querySnapshot.docs.map(doc => doc.data());
//                 return data
//         ;}) 
// }

// export const checkForExistingUser = (user) => {    
//     return db.collection("users").where("username","==",user)
//             .get()
//             .then(querySnapshot => { 
//                 if(!querySnapshot.empty){
//                     return true
//                 }else{
//                     return false
//                 }
//         ;}) 
// }
export default firebase;