<template>
  <div class="container">
    {{name}}
  </div>
</template>

<script>

  export default {
    name: 'name',
    props: {
      name: ''
    }
  }
</script>

<style scoped>
  .container {
    order: 1;
    background-color: whitesmoke;
    height: 30px;
    width: auto;
    font-size: 30px;
    padding-left: 10px;
    font-weight: 200;
    color: #2c3e50;
    box-shadow: 5px 5px 5px #444444;
    border-radius: 2px;
    border-bottom: solid;
    border-bottom-color: green;
    border-bottom-width: 5px;
  }
</style>
