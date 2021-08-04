/*
export function someMutation (state) {
}
*/

export function setGames(state, games) {
    state.games = games;
}

export function setGame(state, game) {
    state.game = game;
}

export function addGame(state, game) {
    game.id = 10;
    state.games.push(game);
}
