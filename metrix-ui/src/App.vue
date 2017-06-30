<template>
  <div id="app">
    <homepage></homepage>
  </div>
</template>

<script>
  import Homepage from '@/components/Homepage.vue'

  export default {
    name: 'app',
    components: {
      Homepage
    }
  }
</script>

<style>
 #app {
   margin: 0;
   padding: 0;
 }
</style>
