import React, { useState } from "react";

function SignUp() {
  const data = {
    pseudo: "",
    email: "",
    password: "",
    confirmerpassword: "",
  };
  const [loginData, setloginData] = useState(data);

  const hunldeChange = (e) => {
    setloginData({ ...loginData, [e.target.id]: e.target.value }); // Engeniosité élevée
  };

  const { pseudo, email, password, confirmerpassword } = loginData;
  const btn =
    pseudo === "" ||
    email === "" ||
    password === "" ||
    password != confirmerpassword ? (
      <button type="button" class="btn btn-primary" disabled>
        Inscription
      </button>
    ) : (
      <button type="button" class="btn btn-secondary">
        Inscription Now
      </button>
    );

  return (
    <div>
      <h2>Inscription</h2>
      <form>
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
        <div>{btn} </div>
      </form>
    </div>
  );
}

export default SignUp;
