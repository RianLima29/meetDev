import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAG1K5F6vpNQx8ZWrXe_M7zqvrmZQekpCI",
    authDomain: "react-firebase-3d082.firebaseapp.com",
    projectId: "react-firebase-3d082",
    storageBucket: "react-firebase-3d082.appspot.com",
    messagingSenderId: "786512745935",
    appId: "1:786512745935:web:f9d4d3816e7ea813b3aeba",
    measurementId: "G-LXMK3L1ZLL"
  };

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)