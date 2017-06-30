<template>
  <div class="container">
    <metric what="Growth in Number of Shipments" description="Percentage change in number of shipments made last week
    vs the week before that. Metric is the % growth between these time periods."></metric>
    <metric what="Proportion of SKU's in Stock" description="Overall percentage of replenishable units in stock
    currently. Stock coverage."></metric>
    <metric what="Growth in Number of Hometrials" description="Percentage change in number of home trials served last
    week vs the week before that. Metric is the % growth between these time periods."></metric>
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
