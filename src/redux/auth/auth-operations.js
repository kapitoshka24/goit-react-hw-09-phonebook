import axios from "axios";
import { authActions } from "./";
import { loginSuccess, registerSuccess, authError } from "../../ulits/pnotify";

axios.defaults.baseURL = "https://connections-api.herokuapp.com/";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = (credentials) => async (dispatch) => {
  dispatch(authActions.registerRequest());

  try {
    const { data } = await axios.post("/users/signup", credentials);
    token.set(data.token);
    dispatch(authActions.registerSuccess(data));
    registerSuccess();
  } catch (error) {
    dispatch(authActions.registerError(error.message));
    authError();
  }
};

const logIn = (credentials) => async (dispatch) => {
  dispatch(authActions.loginRequest());

  try {
    const { data } = await axios.post("/users/login", credentials);
    token.set(data.token);
    dispatch(authActions.loginSuccess(data));
    loginSuccess();
  } catch (error) {
    dispatch(authActions.loginError(error.message));
    authError();
  }
};

const logOut = () => async (dispatch) => {
  dispatch(authActions.logoutRequest());

  try {
    await axios.post("/users/logout");
    token.unset();
    dispatch(authActions.logoutSuccess());
  } catch (error) {
    dispatch(authActions.logoutError(error.message));
  }
};

const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);
  dispatch(authActions.getCurrentUserRequest);

  try {
    const { data } = await axios.get("users/current");
    dispatch(authActions.getCurrentUserSuccess(data));
  } catch (error) {
    dispatch(authActions.getCurrentUserError(error.message));
  }
};

export default {
  register,
  logIn,
  logOut,
  getCurrentUser,
};
