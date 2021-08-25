<template>
  <q-page padding>
    <q-header>
      <q-toolbar>
        <q-btn
          flat
          round
          dense
          icon="arrow_back"
          :to="`/games/${$route.params.id}`"
          v-if="isEditar"
        />
        <q-btn flat round dense icon="arrow_back" to="/games" v-else />
      </q-toolbar>
    </q-header>

    <h2 class="q-mt-md" v-if="isEditar">Alterar Game</h2>
    <h2 class="q-mt-md" v-else>Novo Game</h2>

    <q-form class="q-gutter-sm">
      <q-input label="Nome" v-model="form.nome" />
      <q-select
        label="Categoria"
        :options="categorias"
        v-model="form.categoria"
        option-label="nome"
        option-value="id"
      />
      <q-input
        label="Data de Lançamento"
        mask="##/##/####"
        fill-mask="_"
        v-model="form.dataLancamento"
      />
      <q-input
        label="Preço"
        mask="#.##"
        fill-mask="_"
        reverse-fill-mask
        v-model="form.preco"
      />
      <h6 class="q-mt-lg q-mb-none">Minhas Partidas</h6>
      <q-input
        label="Horas Jogadas"
        mask="#"
        fill-mask="_"
        reverse-fill-mask
        v-model="form.horasJogadas"
      />
      <q-checkbox label="Concluído" v-model="form.concluido" />
      <q-input
        label="Última vez que joguei"
        mask="##/##/####"
        fill-mask="_"
        v-model="form.dataUltimoJogo"
      />
      <h6 class="q-mt-lg q-mb-none">Avaliação</h6>
      <q-rating size="2em" :max="5" color="primary" v-model="form.avaliacao" />
      <q-input type="textarea" label="Comentário" v-model="form.comentario" />
      <div class="q-my-lg">
        <q-btn
          label="Alterar"
          color="primary"
          class="full-width"
          size="lg"
          @click="enviarForm()"
          v-if="isEditar"
        />
        <q-btn
          label="Cadastrar"
          color="primary"
          class="full-width"
          size="lg"
          @click="enviarForm()"
          v-else
        />
      </div>
    </q-form>
  </q-page>
</template>

<script>
function dataENParaBr(data) {
  var dia = data.substring(8, 10);
  var mes = data.substring(5, 7);
  var ano = data.substring(0, 4);

  return `${dia}/${mes}/${ano}`;
}

function dataBrParaEn(data) {
  var dia = data.substring(0, 2);
  var mes = data.substring(3, 5);
  var ano = data.substring(6, 10);

  return `${ano}-${mes}-${dia}`;
}

export default {
  // name: 'PageName',
  data() {
    return {
      form: {
        nome: "",
        categoria: null,
        dataLancamento: "",
        preco: 0,
        horasJogadas: 0,
        concluido: false,
        dataUltimoJogo: "",
        avaliacao: 0,
        comentario: ""
      }
    };
  },
  methods: {
    enviarForm() {
      if (this.isEditar) {

        var dados = {
          id: this.$route.params.id,
          ...this.form,
        };

        dados.dataLancamento = dataBrParaEn(dados.dataLancamento);
        dados.dataUltimoJogo = dataBrParaEn(dados.dataUltimoJogo);

        this.$store.dispatch("games/alterar", dados);
        this.$router.push(`/games/${this.$route.params.id}`);
      } else {
        this.$store.dispatch("games/inserir", this.form);
        this.$router.push("/games");
      }
    }
  },
  computed: {
    isEditar() {
      return this.$route.params.id;
    },
    categorias() {
      return this.$store.state.games.categorias;
    },
    dataLancamentoBr() {
      // 2021-12-31
      // 0123456789
      var dia = this.form.dataLancamento.substring(8, 9);
      var mes = this.form.dataLancamento.substring(5, 6);
      var ano = this.form.dataLancamento.substring(0, 3);

      return `${dia}/${mes}/${ano}`;
    }
  },
  mounted() {
    if (this.isEditar) {
      this.$store.dispatch("games/carregar", this.$route.params.id);
      this.form = { ...this.$store.state.games.game };
      this.form.dataLancamento = dataENParaBr(this.form.dataLancamento);
      this.form.dataUltimoJogo = dataENParaBr(this.form.dataUltimoJogo);
    }
  }
};
</script>
