<template>
  <q-page padding class="flex justify-center content-center">
    <q-form class="q-gutter-md">
      <q-input label="E-mail" type="email" />
      <q-input label="Senha" type="password" />
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
  methods: {
    logar() {
      this.$api
        .post("/login/", { username: "usuario", password: "123" })
        .then(r => {
          console.log(r);
        });
    }
  }
};
</script>
