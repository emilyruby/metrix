<template>
  <div class="container">
    Metric
  </div>
</template>

<script>

  export default {
    name: 'name',
    props: {
      title: ''
    }
  }
</script>

<style scoped>
  .container {
    order: 1;
    background-color: whitesmoke;
    height: 30px;
    width: 340px;
    font-size: 30px;
    padding-left: 10px;
    font-weight: 200;
    color: #2c3e50;
    box-shadow: 5px 5px 5px gray;
    border-radius: 2px;
    border-bottom: solid;
    border-bottom-color: green;
    border-bottom-width: 5px;
  }
</style>
