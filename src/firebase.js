// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYa0JyryIcZbtdVRB3DBtUhFJC2u6pqTo",
  authDomain: "realtor-clone-react-df2ae.firebaseapp.com",
  projectId: "realtor-clone-react-df2ae",
  storageBucket: "realtor-clone-react-df2ae.appspot.com",
  messagingSenderId: "410324296540",
  appId: "1:410324296540:web:a188a467b06eb0ed555799"
};

// Initialize Firebase

const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };