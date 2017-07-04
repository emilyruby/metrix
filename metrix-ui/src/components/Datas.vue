<template>
  <div class="mother-container">
    <div class="child1">
      {{title}}
    </div>
    <div class="child2">
      {{raw}}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'data',
    props: {
      title: '',
      raw: ''
    }
  }
</script>

<style scoped>
  .mother-container {
    margin: 5px;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    border: solid;
    border-color: #22404F;
  }

  .child1 {
    background-color: #447e9b;
    color: white;
    order: 1;
    padding: 4px;
  }

  .child2 {
    order: 2;
    padding: 4px;
    text-align: center;
    font-weight: bold;
  }
</style>
