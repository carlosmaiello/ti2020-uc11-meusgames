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
        v-model="form.categoria_id"
        option-value="id"
        option-label="nome"
        emit-value
        map-options
      />
      <q-input
        label="Data de Lançamento"
        mask="##/##/####"
        fill-mask="_"
        v-model="form.dataLancamento"
        unmasked-value
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
        unmasked-value
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
import { date } from "quasar";

export default {
  // name: 'PageName',
  data() {
    return {
      form: {
        nome: "",
        categoria: "Corrida",
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
      const dados = {
        ...this.form
      };

      if (dados.dataLancamento) {
        dados.dataLancamento = dados.dataLancamento.replace(
          /(\d{2})(\d{2})(\d{4})/,
          "$3-$2-$1"
        );
      } else {
        delete dados["dataLancamento"];
      }

      if (dados.dataUltimoJogo) {
        dados.dataUltimoJogo = dados.dataUltimoJogo.replace(
          /(\d{2})(\d{2})(\d{4})/,
          "$3-$2-$1"
        );
      } else {
        delete dados["dataUltimoJogo"];
      }

      if (this.isEditar) {
        this.$store
          .dispatch("games/alterar", { id: this.$route.params.id, dados })
          .then(r => {
            this.$router.push(`/games/${this.$route.params.id}`);
          });
      } else {
        this.$store.dispatch("games/inserir", dados).then(r => {
          this.$router.push("/games");
        });
      }
    }
  },
  computed: {
    isEditar() {
      return this.$route.params.id;
    },
    categorias() {
      return this.$store.state.games.categorias;
    }
  },
  created() {
    this.$store.dispatch("games/categorias");
  },
  mounted() {
    if (this.isEditar) {
      this.$store.dispatch("games/carregar", this.$route.params.id);
      const game = this.$store.state.games.game;
      this.form = {
        ...game,
        dataLancamento: date.formatDate(game.dataLancamento, "DDMMYYYY"),
        dataUltimoJogo: date.formatDate(game.dataUltimoJogo, "DDMMYYYY")
      };
    }
  }
};
</script>
