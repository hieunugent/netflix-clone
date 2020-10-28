import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// need the database 🌱 

// need a config here
const config = {
  apiKey: "AIzaSyAIgbfMBk2lWfslLTjwLNActTRXI34kChg",
  authDomain: "netflix-7e00c.firebaseapp.com",
  databaseURL: "https://netflix-7e00c.firebaseio.com",
  projectId: "netflix-7e00c",
  storageBucket: "netflix-7e00c.appspot.com",
  messagingSenderId: "208207578380",
  appId: "1:208207578380:web:d727d3ee9e39cb607d3529",
  measurementId: "G-Q3BKHDCK60",
};
const firebase = Firebase.initializeApp(config);

export { firebase} ;