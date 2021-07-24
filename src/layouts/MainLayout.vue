<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          Meus Games
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-footer>
      <q-tabs class="text-primary bg-white">
        <q-route-tab icon="home" label="Início" to="/" />
        <q-route-tab icon="fas fa-gamepad" label="Games" to="/games" />
        <q-route-tab icon="fas fa-user-circle" label="Perfil" to="/perfil" />
      </q-tabs>
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "MainLayout",
};
</script>
