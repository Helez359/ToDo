import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBqyd1MS3EgFjF27C2uixdBRx1F7JbfFwg",
    authDomain: "mytodo-2a87c.firebaseapp.com",
    projectId: "mytodo-2a87c",
    storageBucket: "mytodo-2a87c.appspot.com",
    messagingSenderId: "256111317397",
    appId: "1:256111317397:web:e81116193dea11f19ae69c"

});

const db = firebaseApp.firestore()

export default db