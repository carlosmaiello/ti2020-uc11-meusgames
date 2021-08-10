<template>
  <q-page padding>
    <h2 class="q-mt-md">Perfil</h2>
    <div class="row justify-center text-center">
      <div class="col-6">
        <q-avatar size="128px">
          <img src="https://cdn.quasar.dev/img/boy-avatar.png">
        </q-avatar>
        <h4 class="q-ma-sm">{{ this.user.username }}</h4>
        <p>{{ this.user.email }}</p>
      </div>
    </div>
    <q-btn color="negative" label="Sair" class="full-width" @click="sair()" />
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  computed: {
    user() {
      return this.$store.state.users.user;
    }
  },
  methods: {
    sair() {
      this.$store.dispatch("users/logout");
      this.$router.push("/login");
    }
  }
};
</script>
