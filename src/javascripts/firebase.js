import firebase from 'firebase'

const config = {
  projectId: "earlybird-7cb20",
  apiKey: "AIzaSyDOwfFvNiqsmsxi5UfodC0Q2Ej_Z1t4Urc",
  authDomain: "earlybird-7cb20.firebaseapp.com",
  databaseURL: "https://earlybird-7cb20.firebaseio.com",
  storageBucket: "earlybird-7cb20.appspot.com",
  messagingSenderId: "543467201017"
}

firebase.initializeApp(config);

export default firebase;
