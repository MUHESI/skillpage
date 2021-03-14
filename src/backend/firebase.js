import app from "firebase/app";

import "firebase/auth";

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
    this.auth = app.auth();
  }
  // Inscription
  signUpUser = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);
  //Connexion
  loginUser = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);
  // Deconexion

  SignOutUser = () => this.auth.signOut();
}
export default Firebase;
