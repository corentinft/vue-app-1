<template>
  <div class="hello">
    <button v-for="(response,index) in responses" :key="index" @click.prevent="uplaodResponse(index)">{{ response.text }}</button>
  </div>
</template>

<script>
export default {
  name: 'Response',

  props: {
    responses: Array
  },

  methods: {
    uplaodResponse(index) {
      this.$store.dispatch('uplaodResponse', index)
    }
  }
}
</script>

<style>
</style>
