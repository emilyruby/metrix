<template>
  <div class="container">
    Description of Metric.
  </div>
</template>

<script>

  export default {
    name: 'content',
    props: {
      title: ''
    }
  }
</script>

<style scoped>
  .container {
    order: 2;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: whitesmoke;
    height: 200px;
    width: 60vw;
    font-size: 20px;
    padding-left: 10px;
    font-weight: 200;
    color: #2c3e50;
    box-shadow: 5px 5px 5px gray;
  }
</style>
