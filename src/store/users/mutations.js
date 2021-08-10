/*
export function someMutation (state) {
}
*/

import { api } from "boot/axios";
const storage = window.localStorage;

export function setLogin(state, token) {
  state.logged = true;
  state.token = token;

  api.defaults.headers.common["Authorization"] = `JWT ${token}`;
  storage.setItem("logged", true);
  storage.setItem("token", token);

  setUser({});
}

export function setUser(state, user) {
  storage.setItem("user", user);
  state.user = user;
}

export function setLogout(state) {
  delete api.defaults.headers.common["Authorization"];
  storage.removeItem("logged");
  storage.removeItem("token");
  storage.removeItem("user");

  state.logged = false;
  state.token = null;
  state.user = null;
}
