export default function() {
  return {
    games: [
      {
        id: 1,
        nome: "Game 1",
        categoria: "Corrida",
        dataLancamento: "2020-04-01",
        preco: 219.99,
        horasJogadas: 1000,
        concluido: false,
        dataUltimoJogo: "2021-06-01",
        avaliacao: 4,
        comentario: "Jogo bom"
      },
      {
        id: 2,
        nome: "Game 2",
        categoria: "Aventura",
        dataLancamento: "2013-01-31",
        preco: 219.99,
        horasJogadas: 5000,
        concluido: true,
        dataUltimoJogo: "2015-04-03",
        avaliacao: 5,
        comentario: "Top!!!"
      }
    ],
    game: {
      id: 1,
      nome: "Game 1",
      categoria: "Corrida",
      dataLancamento: "2020-04-01",
      preco: 219.99,
      horasJogadas: 1000,
      concluido: false,
      dataUltimoJogo: "2021-06-01",
      avaliacao: 3,
      comentario: "Jogo bom"
    }
  };
}
