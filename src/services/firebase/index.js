import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDMlXjqP-B8hNF2i4Cs_RJebGf-EfE65hw",
  authDomain: "sunflower-e4f97.firebaseapp.com",
  projectId: "sunflower-e4f97",
  storageBucket: "sunflower-e4f97.appspot.com",
  messagingSenderId: "952192218306",
  appId: "1:952192218306:web:f10b430a8494beabe7775b"
};

const app = initializeApp(firebaseConfig);

export const ddbb = getFirestore(app)