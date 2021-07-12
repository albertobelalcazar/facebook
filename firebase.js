import firebase from 'firebase';

import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDWnxA8ZDD64djSOnEDk4cT15i6i2KZVCY",
    authDomain: "fdemo-6100a.firebaseapp.com",
    projectId: "fdemo-6100a",
    storageBucket: "fdemo-6100a.appspot.com",
    messagingSenderId: "505446776878",
    appId: "1:505446776878:web:dcf2772d763f58d8609fbf"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };