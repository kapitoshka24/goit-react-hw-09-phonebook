import axios from "axios";
import { contactsActions } from "./";
import { addContactSuccess, serverError } from "../../ulits/pnotify";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const fetchContacts = () => async (dispatch) => {
  dispatch(contactsActions.fetchContactsRequest());

  try {
    const { data } = await axios.get("/contacts");
    dispatch(contactsActions.fetchContactsSuccess(data));
  } catch (error) {
    dispatch(contactsActions.fetchContactsError(error));
    serverError();
  }
};

const addContact = (contact) => (dispatch) => {
  const { name, number } = contact;
  dispatch(contactsActions.addContactRequest());

  try {
    const { data } = axios.post("/contacts", contact);
    dispatch(contactsActions.addContactSuccess(data));
    addContactSuccess(name, number);
  } catch (error) {
    dispatch(contactsActions.addContactError(error));
    serverError();
  }
};

const deleteContact = (contactId) => (dispatch) => {
  dispatch(contactsActions.deleteContactRequest());

  try {
    axios.delete(`/contacts/${contactId}`);
    dispatch(contactsActions.deleteContactSuccess(contactId));
  } catch (error) {
    dispatch(contactsActions.deleteContactError(error));
  }
};

export default {
  fetchContacts,
  addContact,
  deleteContact,
};
