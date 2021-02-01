<template>
  <div>
    {{ $store.state.question.question }}
    <response :responses="$store.state.question.response" />
  </div>
</template>

<script>
import response from "@/components/Response";

export default {
  name: "Questionary",

  components: {
    response
  },

  beforeMount() {
    this.$store.dispatch('setQuestion')
  }
}
</script>