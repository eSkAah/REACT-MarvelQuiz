import {initializeApp} from "firebase/app";
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAqkJkEFRjVuqdUp3sCf5Fykd7ZpP-r3mE",
    authDomain: "marvel-quiz-57799.firebaseapp.com",
    projectId: "marvel-quiz-57799",
    storageBucket: "marvel-quiz-57799.appspot.com",
    messagingSenderId: "414143195317",
    appId: "1:414143195317:web:a928498da97a79ab6836fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)