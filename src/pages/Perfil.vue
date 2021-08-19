<template>
  <q-page padding>
    <h2 class="q-mt-md">Perfil</h2>
    <h4>{{ usuario.username }}</h4>
    <p><b>Nome</b>: {{ usuario.first_name }} {{ usuario.last_name }}</p>
    <p><b>E-mail</b>: {{ usuario.email }}</p>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  computed: {
    usuario () {
      return this.$store.state.usuarios.usuario;
    }    
  }
};
</script>
