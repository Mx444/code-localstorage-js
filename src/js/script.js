"use strict";

import App from "./app.js";
const user = new App();

document.addEventListener("DOMContentLoaded", function () {
  const btnLogin = document.getElementById("buttonLogin");
  const divContainer = document.getElementById("container");
  const btnLogout = document.getElementById("buttonLogout");

  function checkStatus() {
    const log = window.localStorage.getItem("isLogged");

    if (log === "true") {
      user.isLogged = true;
      btnLogin.setAttribute("hidden", true);
      divContainer.removeAttribute("hidden");
    } else {
      user.isLogged = null;
      btnLogin.removeAttribute("hidden");
      divContainer.setAttribute("hidden", true);
    }
  }

  checkStatus();

  function login() {
    user.login();

    if (user.isLogged) {
      window.localStorage.setItem("isLogged", "true");
      console.log(`User is Logged : ${user.isLogged}`);
      checkStatus();
    }
  }

  function logout() {
    user.logout();

    if (!user.isLogged) {
      window.localStorage.setItem("isLogged", "false");
      console.log(`User is Logged : ${user.isLogged}`);
      checkStatus();
    }
  }

  btnLogin.addEventListener("click", login);
  btnLogout.addEventListener("click", logout);
});
