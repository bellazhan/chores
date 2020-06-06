import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBWtkscaekTJG8R6MqCtHiAnERfEAsDpBM",
  authDomain: "choreweek-testing.firebaseapp.com",
  databaseURL: "https://choreweek-testing.firebaseio.com",
  projectId: "choreweek-testing",
  storageBucket: "choreweek-testing.appspot.com",
  messagingSenderId: "90145853984",
  appId: "1:90145853984:web:67271f609c20857779a245",
  measurementId: "G-0DD9WR6BTT"
};
  
firebase.initializeApp(firebaseConfig);

export default firebase;
