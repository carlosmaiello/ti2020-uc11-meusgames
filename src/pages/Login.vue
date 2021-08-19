<template>
  <q-page padding class="flex justify-center content-center">
    <q-form class="q-gutter-md">
      <q-input label="Usuário" v-model="form.username" />
      <q-input label="Senha" type="password" v-model="form.password" />
      <div>
        <q-btn
          label="Entrar"
          color="primary"
          class="full-width"
          @click="logar()"
        />
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
        username: '',
        password: ''
      }
    }
  },
  methods: {
    logar() {
      this.$store
        .dispatch("usuarios/logar", this.form)
        .then(r => {
          this.$router.push("/");
        })
        .catch(erro => {
          alert(erro);
        });
    }
  }
};
</script>
