<template>
  <div class="container">
    <metric></metric>
    <metric></metric>
    <metric></metric>
  </div>
</template>

<script>
  import Metric from '@/components/Metric.vue'

  export default {
    name: 'metrics',
    components: {
      Metric
    },
    props: {
      title: ''
    }
  }
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    margin-left: 15vw;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
