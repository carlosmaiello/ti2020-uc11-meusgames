<template>
  <q-page padding>
    <h2 class="q-mt-md">Games</h2>
    <q-list bordered separator>
      <q-item v-for="game in games" :key="game.nome" to="/games/detalhes">
        <q-item-section>
          <q-item-label>{{ game.nome }}</q-item-label>
          <q-item-label caption>{{ game.categoria }}</q-item-label>
        </q-item-section>
        <q-item-section>
          <q-item-label>Horas: {{ game.horasJogadas }}</q-item-label>
        </q-item-section>
        <q-item-section>
          <q-item-label v-if="game.concluido">Concluido</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>

    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn fab icon="add" color="accent" to="/games/novo" />
    </q-page-sticky>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  data() {
    return {
      games: [
        {
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
      ]
    };
  }
};
</script>
