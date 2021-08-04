<template>
  <q-page padding>
    <h2>Novo Game</h2>
      <q-form class="q-gutter-sm">
        <q-input label="Nome" />
        <q-select label="Categoria" :options="['Ação', 'Aventura', 'Corrida']"/>
        <q-input label="Data de Lançamento" mask="##/##/####" fill-mask="_" />
        <q-input label="Preço" mask="#.##" fill-mask="_" reverse-fill-mask />
        <h6 class="q-mt-lg q-mb-none">Minhas Partidas</h6>
        <q-input label="Horas Jogadas" mask="#" fill-mask="_" reverse-fill-mask />
        <q-checkbox label="Concluído" />
        <q-input label="Última vez que joguei" mask="##/##/####" fill-mask="_" />
        <h6 class="q-mt-lg q-mb-none">Avaliação</h6>
        <q-rating size="2em" :max="5" color="primary" />  
        <q-input type="textarea" label="Comentário" />
        <div>
          <q-btn type="submit" label="Cadastrar" />
        </div>
      </q-form>


  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
}
</script>
