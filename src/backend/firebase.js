import app from "firebase/app";

const config = {
  apiKey: "AIzaSyDlEV0JduWhdnV0akAGhF2mEtCcNxY8FQw",
  authDomain: "cres-virtus.firebaseapp.com",
  projectId: "cres-virtus",
  storageBucket: "cres-virtus.appspot.com",
  messagingSenderId: "439670783659",
  appId: "1:439670783659:web:70e7c74d1f214397d601ee",
};
class Firebase {
  constructor() {
    app.initializeApp(config);
  }
}
export default Firebase;
