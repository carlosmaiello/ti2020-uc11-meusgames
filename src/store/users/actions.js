/*
export function someAction (context) {
}
*/

import { api } from "boot/axios";
const storage = window.localStorage;

export function login({ commit, dispatch }, { username, password }) {
  return api
    .post("/login/", { username, password })
    .then(r => {
      commit("setLogin", r.data.token);
      return dispatch("me");
    })
    .catch(error => {
      commit("setLogoff");
      return error;
    });
}

export function me({ commit }) {
  return api.get("/me/").then(r => {
    commit("setUser", r.data);
    return r;
  });
}

export function checkLogin({ commit, dispatch }) {
  commit("setLogin", storage.getItem("token"));

  return dispatch("me");
}

export function logout({ commit }) {
  commit("setLogout");
}
