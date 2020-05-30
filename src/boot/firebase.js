import * as firebase from "firebase/app";

import "firebase/auth";
import "firebase/database";

var firebaseConfig = {
    apiKey: "AIzaSyDrExsF_AvYcsm3PJIRQxFjFZlcJKrqSzs",
    authDomain: "smackchat-aa000.firebaseapp.com",
    databaseURL: "https://smackchat-aa000.firebaseio.com",
    projectId: "smackchat-aa000",
    storageBucket: "smackchat-aa000.appspot.com",
    messagingSenderId: "204131724746",
    appId: "1:204131724746:web:63972c43e95b88f3b93333"
  };

let firebaseApp = firebase.initializeApp(firebaseConfig);
let firebaseAuth = firebaseApp.auth();
let firebaseDb = firebaseApp.database();

export { firebaseAuth, firebaseDb }