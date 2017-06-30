<template>
  <div class="inside">
    {{desc}}
    <div class="container">
      <datas title="Raw Value" raw="7450"></datas>
      <datas title="Growth since Last Week" raw="4%"></datas>
    </div>
  </div>
</template>

<script>
  import Datas from '@/components/Datas.vue'

  export default {
    name: 'contents',
    components: {
      Datas
    },
    props: {
      desc: ''
    }
  }
</script>

<style scoped>
  .inside {
    padding-top: 5px;
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
    box-shadow: 5px 5px 5px #444444;
  }

  .container {
    display: flex;
    flex-direction: row;
    width: auto;
    padding: 5px;
    height: 65%;
  }
</style>
