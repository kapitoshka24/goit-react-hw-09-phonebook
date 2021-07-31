import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../redux/auth";

export default function RegisterView() {
  const dispatch = useDispatch();
  const onRegister = (user) => dispatch(authOperations.register(user));

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onRegister({ name, email, password });

    reset();
  };

  const reset = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="centeredDiv">
      <h1>Register</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="name"
            name="name"
            value={name}
            onChange={({ target: { value } }) => setName(value)}
          />
        </label>

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

        <button type="submit">Register</button>
      </form>
    </div>
  );
}
