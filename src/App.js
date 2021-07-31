import React, { Suspense, lazy, useEffect } from "react";
import { Switch } from "react-router-dom";
import Container from "./components/Container";
import { useDispatch } from "react-redux";
import Loader from "react-loader-spinner";
import { authOperations } from "./redux/auth";
import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";
import AppBar from "./components/AppBar";

const HomeView = lazy(() => import("./views/HomeView"));
const ContactsListView = lazy(() => import("./views/ContactsListView"));
const AddContactsView = lazy(() => import("./views/AddContactsView"));
const RegisterView = lazy(() => import("./views/RegisterView"));
const LoginView = lazy(() => import("./views/LoginView"));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(authOperations.getCurrentUser()), [dispatch]);

  return (
    <Container>
      <AppBar />

      <Suspense
        fallback={
          <Loader
            className="Loader-main"
            type="Bars"
            color="#45a049"
            height={50}
            width={50}
          />
        }
      >
        <Switch>
          <PublicRoute exact path="/">
            <HomeView />
          </PublicRoute>
          <PrivateRoute exact path="/contacts-list" redirectTo="/login">
            <ContactsListView />
          </PrivateRoute>
          <PrivateRoute exact path="/contacts-add" redirectTo="/login">
            <AddContactsView />
          </PrivateRoute>
          <PublicRoute path="/register" restricted redirectTo="/">
            <RegisterView />
          </PublicRoute>
          <PublicRoute path="/login" restricted redirectTo="/">
            <LoginView />
          </PublicRoute>
          <PublicRoute>
            <HomeView />
          </PublicRoute>
        </Switch>
      </Suspense>
    </Container>
  );
}
