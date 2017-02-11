import * as firebase from "firebase";

var config = {
  apiKey: "AIzaSyBkNdRcnmOfDJ0we8wQKu4_xH99zkrjdfU",
  authDomain: "yallagenie-b1232.firebaseapp.com",
  databaseURL: "yallagenie-b1232.firebaseio.com",
};

export const firebaseRef = firebase.initializeApp(config);
