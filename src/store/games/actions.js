/*
export function someAction (context) {
}
*/

export function carregar({state, commit}, id) {
    var game = state.games.filter(g => g.id == id)[0];
    commit('setGame', game);
}
