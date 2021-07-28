<template>
  <q-page padding>
    <h2>{{ game.nome }}</h2>
    <p><b>Categoria: </b> {{ game.categoria }}</p>
    <p><b>Lançamento: </b> {{ game.dataLancamento }}</p>
    <p><b>Preço: </b> {{ game.preco }}</p>
    <p><b>Horas Jogadas: </b> {{ game.horasJogadas }}</p>
    <p><b>Concluído: </b> {{ game.concluido }}</p>
    <p><b>Último Jogo: </b> {{ game.dataUltimoJogo }}</p>
    <p>
      <b>Avaliação: </b>
      <q-rating v-model="game.avaliacao" size="2em" :max="5" color="primary" />
    </p>
    <p><b>Comentário: </b> {{ game.comentario }}</p>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  data() {
    return {
      game: {
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
};
</script>
