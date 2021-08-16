<template>
  <q-page padding>
    <h2 class="q-mt-md">Games</h2>
    <q-list bordered separator>
      <q-item v-for="game in games" :key="game.id" :to="`/games/${game.id}`">
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
    };
  },
  computed: {
    games () {
      return this.$store.state.games.games;
    }
  },
  mounted () {
    this.$store.dispatch("games/listar");
  }
};
</script>
