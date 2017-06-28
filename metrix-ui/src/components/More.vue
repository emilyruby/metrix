<template>
  <div class="container">
    <sidebar :title="title"></sidebar>
    <metrics :title="title"></metrics>
  </div>
</template>

<script>
  import Metrics from '@/components/Metrics.vue'
  import Sidebar from '@/components/Sidebar.vue'

  export default {
    name: 'information',
    components: {
      Sidebar,
      Metrics
    },
    props: {
      title: ''
    }
  }
</script>

<style scoped>
  .container {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
  }
</style>
