import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import { FirebaseContext } from "../backend";

function SignIn(props) {
  const firebase = useContext(FirebaseContext);
  // travail de connexion
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [btn, setBtn] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    if (password.length > 5 && email !== "") {
      setBtn(true);
    } else if (btn) {
      setBtn(false);
    }
  }, [password, email, btn]);
  const hundleSubmit = (e) => {
    e.preventDefault();
    // /const { email, password } = loginData;
    firebase
      .loginUser(email, password)
      .then((user) => {
        setEmail("");
        setPassword("");
        props.history.push("/index"); // Redirection to index paage
      })
      .catch((error) => {
        setError(error);
      });
  };

  //Gestion Error
  const errorMessage = error !== "" && <span>{error.message} </span>;

  return (
    <div>
      <h2>Connexion</h2>

      <form onSubmit={hundleSubmit}>
        <div className="form">
          <input
            type="email"
            autoComplete="off"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className="form">
          <input
            type="password"
            autoComplete="off"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <label htmlFor="password">Password</label>
        </div>

        <div>
          Besoin de créer un compte ?
          <Link className="" to="/SignUp">
            cliquer ici
          </Link>
        </div>

        <div>
          {btn ? (
            <button>Connexion</button>
          ) : (
            <button disabled>Connexion</button>
          )}
        </div>
        {errorMessage}
      </form>
    </div>
  );
}

export default SignIn;
