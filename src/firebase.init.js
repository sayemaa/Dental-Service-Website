// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB13lf5oicJ2P8vYrVIl2dm1ZkLDY4N3YE",
    authDomain: "dental-service-f0546.firebaseapp.com",
    projectId: "dental-service-f0546",
    storageBucket: "dental-service-f0546.appspot.com",
    messagingSenderId: "844832527496",
    appId: "1:844832527496:web:78cf1b7319bc49c99bfb3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;