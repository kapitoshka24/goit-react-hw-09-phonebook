import React from "react";
import "../styles/home.scss";

export default function HomeView() {
  return (
    <div className="container">
      <h1 className="title">
        Hi! That's a phonebook.
        <br />
        Here you can manipulate your contacts.{" "}
        <span role="img" aria-label="Иконка приветствия">
          📕📞
        </span>
      </h1>
    </div>
  );
}
