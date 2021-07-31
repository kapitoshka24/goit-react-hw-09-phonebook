import React from "react";
import Filter from "../components/Filter";
import ContactList from "../components/ContactList";
import Loader from "react-loader-spinner";
import { contactsSelectors } from "../redux/contacts";
import { useSelector } from "react-redux";

export default function ContactsListView() {
  const isLoading = useSelector(contactsSelectors.getLoading);

  return (
    <div className="centeredDiv">
      <h1>Contacts</h1>
      <Filter />
      {isLoading ? (
        <Loader
          className="Loader"
          type="Bars"
          color="#45a049"
          height={50}
          width={50}
        />
      ) : (
        <ContactList />
      )}
    </div>
  );
}
