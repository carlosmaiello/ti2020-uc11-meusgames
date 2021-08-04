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
  const reducer = (id, game) => (game.id > id ? game.id : id);
  game.id = state.games.reduce(reducer, 0) + 1;

  state.games.push(game);
}
