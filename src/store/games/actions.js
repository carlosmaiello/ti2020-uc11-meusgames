/*
export function someAction (context) {
}
*/

import { api } from '../../boot/axios';

export function listar({state, commit}) {
    return api.get("/games/").then(r => {
        commit("setGames", r.data);
    });
}

export function carregar({state, commit}, id) {
    var game = state.games.filter(g => g.id == id)[0];
    commit('setGame', game);
}

export function inserir({commit}, form) {
    commit('addGame', form);
}

export function alterar({commit}, form) {
    commit('updateGame', form);
}

export function listarCategorias({commit}) {
    return api.get('/categorias/').then(r => {
        commit('setCategorias', r.data);
    })
}