import * as firebase from "firebase/";

const firebaseConfig = {
  apiKey: "AIzaSyDVVl7zrDilQa3bSMLeuCjmZ16s3_0KxPg",
  authDomain: "budget-app-13b00.firebaseapp.com",
  databaseURL: "https://budget-app-13b00.firebaseio.com",
  projectId: "budget-app-13b00",
  storageBucket: "budget-app-13b00.appspot.com",
  messagingSenderId: "99827162950",
  appId: "1:99827162950:web:14a093aed929aa3715cf47",
  measurementId: "G-PK6HGP68HG"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default}