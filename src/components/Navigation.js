import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "../styles/auth-nav.scss";
import { authSelectors } from "../redux/auth";
import { contactsOperations } from "../redux/contacts";

export default function Navigation() {
  const dispatch = useDispatch();
  const fetchContacts = () => dispatch(contactsOperations.fetchContacts());

  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <nav>
      <NavLink to="/" exact className="link" activeClassName="activeLink">
        Home
      </NavLink>

      {isLoggedIn && (
        <>
          <NavLink
            to="/contacts-add"
            exact
            className="link"
            activeClassName="activeLink"
            onClick={fetchContacts}
          >
            Add contacts
          </NavLink>
          <NavLink
            to="/contacts-list"
            exact
            className="link"
            activeClassName="activeLink"
            onClick={fetchContacts}
          >
            Phonebook
          </NavLink>
        </>
      )}
    </nav>
  );
}
