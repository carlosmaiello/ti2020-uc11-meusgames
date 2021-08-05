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

export function updateGame(state, game) {
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/find
  var gameEncontrado = state.games.find(g => g.id == game.id);
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
  var index = state.games.indexOf(gameEncontrado);
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
  state.games.splice(index, 1);
  state.games.push(game);
}
