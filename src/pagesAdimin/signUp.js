import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { FirebaseContext } from "../backend";

function SignUp(props) {
  const data = {
    pseudo: "",
    email: "",
    password: "",
    confirmerpassword: "",
  };
  const firebase = useContext(FirebaseContext);

  const [loginData, setloginData] = useState(data);
  const [error, setError] = useState("");

  const hunldeChange = (e) => {
    setloginData({ ...loginData, [e.target.id]: e.target.value }); // Engeniosité élevée
  };

  const hundleSubmit = (e) => {
    // Cette fonction valide l'enregistrement d'un user
    e.preventDefault();
    const { email, password } = loginData;
    firebase
      .signUpUser(email, password)
      .then((user) => {
        setloginData({ ...data }); //va vider les values dans les inputs du formulaire
        props.history.push("/index"); // Redirection to index paage
      })
      .catch((error) => {
        setError(error);
        setloginData({ ...data });
      });
  };
  const { pseudo, email, password, confirmerpassword } = loginData;
  const btn =
    pseudo === "" ||
    email === "" ||
    password === "" ||
    password != confirmerpassword ? (
      <button class="btn btn-primary" disabled>
        Inscription
      </button>
    ) : (
      <button class="btn btn-secondary">Inscription Now</button>
    );

  //Gestion Error
  const ErrorMessage = error !== "" && <span>{error.message} </span>;

  return (
    <div>
      {}
      <h2>Inscription</h2>
      {ErrorMessage}

      <form onSubmit={hundleSubmit}>
        <div className="form">
          <input
            type="text"
            id="pseudo"
            autoComplete="off"
            required
            onChange={hunldeChange}
            value={pseudo}
          />
          <label htmlFor="pseudo">Pseudo</label>
        </div>
        <div className="form">
          <input
            type="email"
            id="email"
            autoComplete="off"
            required
            onChange={hunldeChange}
            value={email}
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className="form">
          <input
            type="password"
            id="password"
            autoComplete="off"
            required
            onChange={hunldeChange}
            value={password}
          />
          <label htmlFor="password">Password</label>
        </div>
        <div className="form">
          <input
            type="password"
            id="confirmerpassword"
            autoComplete="off"
            required
            onChange={hunldeChange}
            value={confirmerpassword}
          />
          <label htmlFor="confirmerpassword">Confirmer password</label>
        </div>
        <div>
          <Link className="" to="/SignIn">
            Avez-vous déjà un compte ? connectez-vous ici
          </Link>
        </div>

        <div>{btn} </div>
      </form>
    </div>
  );
}

export default SignUp;
