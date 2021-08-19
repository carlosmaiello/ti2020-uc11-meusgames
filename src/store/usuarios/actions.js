/*
export function someAction (context) {
}
*/

import { api } from "boot/axios";
const storage = window.localStorage;

export function logar({ commit, dispatch }, { username, password }) {
  return api.post("/login/", { username, password }).then(r => {
    commit("setToken", r.data.token);
    storage.setItem("token", r.data.token);

    return dispatch("me").catch(error => {
      console.log("error");
      commit("setToken", null);
      return error;
    });
  });
}

export function me({ commit }) {
  return api.get("/me/").then(r => {
    commit("setUsuario", r.data);
    return r;
  });
}

export function carregarToken({ commit, dispatch }) {
  var token = storage.getItem("token");
  commit("setToken", token);

  return dispatch("me").catch(error => {
    console.log("error");
    commit("setToken", null);
    return error;
  });
}
