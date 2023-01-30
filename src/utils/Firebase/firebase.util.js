import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBhLvD3rm-Wv-UaMGvltJgXaJoP4olsil0",
    authDomain: "explosion-store.firebaseapp.com",
    projectId: "explosion-store",
    storageBucket: "explosion-store.appspot.com",
    messagingSenderId: "919375484767",
    appId: "1:919375484767:web:147b722728b927b3da48ea"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);