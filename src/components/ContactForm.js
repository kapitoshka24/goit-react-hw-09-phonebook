import React, { useState } from "react";
import { existedContactError } from "../ulits/pnotify";
import { useDispatch, useSelector } from "react-redux";
import { contactsOperations, contactsSelectors } from "../redux/contacts";

export default function ContactForm() {
  const dispatch = useDispatch();
  const onAdd = (contact) => dispatch(contactsOperations.addContact(contact));
  const fetchContacts = () => dispatch(contactsOperations.fetchContacts());

  const contacts = useSelector(contactsSelectors.getContacts);

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const findByName = (contactName) => {
    return contacts.some(({ name }) => name === contactName);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (findByName(name)) {
      existedContactError(name, number);
      return;
    }

    onAdd({ name, number });
    fetchContacts();
    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          onChange={({ target: { value } }) => setName(value)}
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          // autoComplete="off"
          required
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          onChange={({ target: { value } }) => setNumber(value)}
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          // autoComplete="off"
          required
        />
      </label>
      <button>Add contact</button>
    </form>
  );
}
