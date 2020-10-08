import React from "react";
import ReactDOM from "react-dom";
import { history } from "./routes/AppRouter";
import { firebase } from "./firebase/firebase";
import { startSetExpenses } from "./redux/actions/expenses";
import { login, logout } from "./redux/actions/auth";
import LoadingPage from "./components/LoadingPage";
import App, { applicationStore } from "./App";
import "./styles/index.css";

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById("root")
    );
    hasRendered = true;
  }
};

ReactDOM.render(
  <React.StrictMode>
    <LoadingPage />
  </React.StrictMode>,
  document.getElementById("root")
);

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    applicationStore.dispatch(login(user.uid));
    applicationStore.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if (history.location.pathname === "/") {
        history.push("/dashboard");
      }
    });
  } else {
    applicationStore.dispatch(logout());
    renderApp();
    history.push("/");
  }
});
