import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { authOperations, authSelectors } from "../../redux/auth";
import defaultAvatar from "./default-image.jpg";
import "../../styles/avatar.scss";

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  const onLogOut = () => dispatch(authOperations.logOut());

  return (
    <div className="user-container">
      <img src={defaultAvatar} alt="" width="32" className="user-avatar" />
      <span className="user-name">Welcome, {name}</span>
      <button type="button" onClick={onLogOut} className="logout-btn">
        Logout
      </button>
    </div>
  );
}
