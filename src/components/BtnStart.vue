<template>
  <div class="hello">
    <button @click.prevent="start()">Commencer le questionnaire</button>
  </div>
</template>

<script>
export default {
  name: 'BtnStart',

  methods: {
    start() {
      this.$store.dispatch('startQuestionary')
    }
  }
}
</script>

<style>
</style>
