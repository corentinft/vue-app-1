<template>
  <div>
    Vous avez eu un score de
    <h1>{{ $store.state.score }}%</h1>
    <button @click="returnHome()">Retourner à la page principale</button>
  </div>
</template>

<script>
export default {
  name: "congratulation",

  beforeMount() {
    this.$store.dispatch('congratulation')
  },

  methods: {
    returnHome() {
      this.$store.dispatch('returnHome')
    }
  }
}
</script>
