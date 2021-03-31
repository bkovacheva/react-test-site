import app from 'firebase/app';
const firebase = require('firebase/app');
require('firebase/<PACKAGE>');


// import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  };

  class Firebase {
    constructor() {
      app.initializeApp(firebaseConfig);
    }
  }
  // var test=db.collection("countries")
  //                    .get()
  
  export default Firebase;