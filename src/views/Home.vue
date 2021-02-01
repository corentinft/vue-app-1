<template>
  <div class="home">
    Vous allez participez à un questionnaire sur certains principes de vuejs
    <btn-start />
  </div>
</template>

<script>
import btnStart from '@/components/BtnStart'

export default {
  name: 'Home',
  components: {
    btnStart
  }
}
</script>
