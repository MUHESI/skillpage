import app from "firebase/app";

const Config = {
  apiKey: "AIzaSyDnkdBOgIIlggMlK0QJfGvLDjSoxseS6N0",
  authDomain: "myprojectone-58cec.firebaseapp.com",
  projectId: "myprojectone-58cec",
  storageBucket: "myprojectone-58cec.appspot.com",
  messagingSenderId: "1085846554931",
  appId: "1:1085846554931:web:b2de01b134ff4dd0eb1646",
};
class Firebase {
  constructor() {
    app.initializeApp(Config);
  }
}

export default Firebase;
