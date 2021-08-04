<template>
  <q-page padding>
    <h2>Novo Game</h2>
      <q-form class="q-gutter-sm">
        <q-input label="Nome" v-model="form.nome" />
        <q-select label="Categoria" :options="['Ação', 'Aventura', 'Corrida']" v-model="form.categoria" />
        <q-input label="Data de Lançamento" mask="##/##/####" fill-mask="_" v-model="form.dataLancamento" />
        <q-input label="Preço" mask="#.##" fill-mask="_" reverse-fill-mask v-model="form.preco" />
        <h6 class="q-mt-lg q-mb-none">Minhas Partidas</h6>
        <q-input label="Horas Jogadas" mask="#" fill-mask="_" reverse-fill-mask v-model="form.horasJogadas" />
        <q-checkbox label="Concluído" v-model="form.concluido" />
        <q-input label="Última vez que joguei" mask="##/##/####" fill-mask="_" v-model="form.dataUltimoJogo" />
        <h6 class="q-mt-lg q-mb-none">Avaliação</h6>
        <q-rating size="2em" :max="5" color="primary" v-model="form.avaliacao" />  
        <q-input type="textarea" label="Comentário" v-model="form.comentario" />
        <div class="q-my-lg">
          <q-btn label="Cadastrar" color="primary" class="full-width" size="lg" @click="enviarForm()" />
        </div>
      </q-form>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  data () {
    return {
      form: {
        nome: "Game 1",
        categoria: "Corrida",
        dataLancamento: "2020-04-01",
        preco: 219.99,
        horasJogadas: 1000,
        concluido: false,
        dataUltimoJogo: "2021-06-01",
        avaliacao: 2,
        comentario: "Jogo bom"
      }
    };
  },
  methods: {
    enviarForm() {
      this.$store.dispatch('games/inserir', this.form);
      this.$router.push("/games");
    }
  }
}
</script>
