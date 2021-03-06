import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import Firebase, { FirebaseContext } from "./components/firebase";

ReactDOM.render(
  <React.StrictMode>
    {/* <Firebase.Provider value={new Firebase()}> </Firebase.Provider> */}
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
