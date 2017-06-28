<template>
  <div class="container">
    <name></name>
    <contents></contents>
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
      title: ''
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
