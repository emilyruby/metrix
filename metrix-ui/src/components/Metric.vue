<template>
  <div class="container">
    <name :name="what"></name>
    <contents :desc="description"></contents>
  </div>
</template>

<script>
  import Contents from '@/components/Contents.vue'
  import Name from '@/components/Name/Name.vue'

  export default {
    name: 'metric',
    components: {
      Name,
      Contents
    },
    props: {
      what: '',
      description: ''
    }
  }
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    padding: 15px;
  }
</style>
