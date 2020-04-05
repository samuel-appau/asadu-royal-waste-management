import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyC_HHppgHby5umgcs2xxPaDct8ay-qwBLE",
  authDomain: "asadu-royal.firebaseapp.com",
  databaseURL: "https://asadu-royal.firebaseio.com",
  projectId: "asadu-royal",
  storageBucket: "asadu-royal.appspot.com",
  messagingSenderId: "988056857567",
  appId: "1:988056857567:web:8dcc381076fd63f7e7726a",
  measurementId: "G-W09NKHVVQ7"
}

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

const firebaseDB=firebase.database();




export {firebase,firebaseDB};