import { error, success } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";

const settings = {
  title: false,
  sticker: false,
  maxTextHeight: null,
  mouseReset: false,
  delay: 2000,
  width: "300px",
};

export const existedContactError = (name, number) =>
  error({
    text: `Contact ${name}/${number} already exists.`,
    ...settings,
  });

export const addContactSuccess = (name, number) =>
  success({
    text: `You successfully added ${name}/${number} to your phonebook.`,
    ...settings,
  });

export const serverError = () =>
  error({
    text: `Sorry, something went wrong on a server side. Try again later!`,
    ...settings,
  });

export const loginSuccess = () =>
  success({
    text: `You successfully logged in.`,
    ...settings,
  });

export const registerSuccess = () =>
  success({
    text: `You successfully registered.`,
    ...settings,
  });

export const authError = () =>
  error({
    text: `Sorry, something went wrong. Try again!`,
    ...settings,
  });
