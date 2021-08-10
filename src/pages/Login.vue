<template>
  <q-page padding class="flex justify-center items-center">
    <q-form class="q-gutter-md">
      <q-input label="Usuário" v-model="form.username" />
      <q-input label="Senha" type="password" v-model="form.password" />
      <q-btn label="Entrar" color="primary" class="full-width" @click="logar()" />
    </q-form>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  data () {
    return {
      form: {
        username: 'usuario',
        password: '123'
      }
    }
  },
  methods: {
    logar () {
      this.$store.dispatch('users/login', this.form).then(r => {
        console.log('logged', this.$store.getters['users/isLogged']);
        if (this.$store.getters['users/isLogged']) {
          this.$router.push('/');
        }
      }).catch(error => {
        console.log('error', error);
        this.$q.notify('Usuário ou senha inválidos');
      });
    }
  }
};
</script>
