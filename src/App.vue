<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App',
  mounted () {
    this.$store.dispatch('usuarios/carregarToken').catch(error => {
      this.$router.push('/login');
    });
  }
}
</script>
