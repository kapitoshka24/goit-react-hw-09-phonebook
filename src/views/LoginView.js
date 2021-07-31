import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../redux/auth";

export default function LoginView() {
  const dispatch = useDispatch();
  const onLogin = (user) => dispatch(authOperations.logIn(user));

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onLogin({ email, password });

    reset();
  };

  const reset = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <div className="centeredDiv">
      <h1>Please login</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={({ target: { value } }) => setEmail(value)}
          />
        </label>

        <label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={({ target: { value } }) => setPassword(value)}
          />
        </label>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
