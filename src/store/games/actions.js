/*
export function someAction (context) {
}
*/

import { api } from '../../boot/axios';

/**
 * Consulta os dados na api e carrega no state games
 * @param {} param0 
 * @returns 
 */
export function listar({commit}) {
    return api.get("/games/").then(r => {
        commit("setGames", r.data);
    });
}

/**
 * Consulta a categoria do id
 * @param {*} param0 
 * @param {*} id 
 */
export function carregar({state, commit}, id) {
    var game = state.games.filter(g => g.id == id)[0];
    commit('setGame', game);
}

export function inserir({commit, dispatch}, form) {
    return api.post('/games/', form).then(r => {
        commit('setGame', r.data);
        return dispatch('listar');
    })

}

export function alterar({commit,dispatch}, form) {
    return api.patch(`/games/${form.id}/`, form).then(r => {
        commit('setGame', r.data);
        return dispatch('listar');
    })
}

export function listarCategorias({commit}) {
    return api.get('/categorias/').then(r => {
        commit('setCategorias', r.data);
    })
}