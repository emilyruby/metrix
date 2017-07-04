<template>
  <div id="dot" :style="style"></div>
</template>

<script>
  export default {
    name: 'dot',
    props: {
      colour: ''
    },
    computed: {
      style () {
        return 'background-color: ' + this.colour
      }
    }
  }
</script>

<style scoped>
  #dot {
    border-radius: 100%;
    width: 20px;
    height: 20px;
    margin-left: 5px;
    margin-right: 5px;
    margin-top: 10px;
  }
</style>
