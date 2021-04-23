import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBPQTaztaWjkUL92M-ARfX_uQmczwZmyDU',
  authDomain: 'picstagram-81421.firebaseapp.com',
  projectId: 'picstagram-81421',
  storageBucket: 'picstagram-81421.appspot.com',
  messagingSenderId: '197747715792',
  appId: '1:197747715792:web:95c2341db31764305978d5',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
