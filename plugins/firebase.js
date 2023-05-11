// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB-tEVowUljBe4a9ETo3KF1C31Q_iwpytE",
    authDomain: "cpch-64b6e.firebaseapp.com",
    projectId: "cpch-64b6e",
    storageBucket: "cpch-64b6e.appspot.com",
    messagingSenderId: "440995826719",
    appId: "1:440995826719:web:f2f1f7d9a05dbf5839992a"
};
const apps = getApps()
let app;
if (!apps.length) {
    
    // Initialize Firebase
    app = initializeApp(firebaseConfig);

}
else {
    app = apps [0]
}

console.log(app.name);
    const firestore = getFirestore(app)

export { firestore }

/* app.firestore().settings({timestampsInSnapshots: true})

const fireDb = app.firestore()

export { fireDb } */