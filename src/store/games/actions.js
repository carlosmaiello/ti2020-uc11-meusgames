/*
export function someAction (context) {
}
*/

import { api } from "boot/axios";

export function listar({ state, commit }) {
  return api
    .get("/games/")
    .then(r => {
      commit("setGames", r.data);
    })
    .catch(error => {
      commit("setGames", []);
    });
}

export function carregar({ commit }, id) {
  return api
    .get(`/games/${id}/`)
    .then(r => {
      commit("setGame", r.data);
    })
    .catch(error => {
      commit("setGame", null);
    });
}

export function inserir({ commit }, dados) {
  return api.post(`/games/`, dados);
}

export function alterar({ commit }, { id, dados }) {
  return api.put(`/games/${id}/`, dados);
}

export function categorias({ state, commit }) {
  return api
    .get("/categorias/")
    .then(r => {
      commit("setCategorias", r.data);
    })
    .catch(error => {
      commit("setCategorias", []);
    });
}
