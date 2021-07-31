import React from "react";
import shortid from "shortid";
import { useDispatch, useSelector } from "react-redux";
import { contactsOperations, contactsSelectors } from "../redux/contacts";

export default function ContactList() {
  const dispatch = useDispatch();
  const onDelete = (id) => dispatch(contactsOperations.deleteContact(id));

  const items = useSelector(contactsSelectors.getVisibleContacts);

  return (
    <ol>
      {items.map(({ id, name, number }) => (
        <li key={shortid.generate()}>
          {name}: {number}
          <button onClick={() => onDelete(id)}>Delete</button>
        </li>
      ))}
    </ol>
  );
}
