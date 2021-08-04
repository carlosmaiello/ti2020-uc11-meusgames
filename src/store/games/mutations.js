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
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
  const reducer = (id, game) => (game.id > id ? game.id : id);
  game.id = state.games.reduce(reducer, 0) + 1;

  state.games.push(game);
}
