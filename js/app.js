"use strict";

export default class App {
  constructor() {
    this.isLogged = null;
  }

  login() {
    this.isLogged = true;
  }

  logout() {
    this.isLogged = null;
  }
}
