<template>
  <router-link :to='title'>
    <div class="box">
      <div id="title">
        {{title}}
      </div>
      <div id="dot_container">
        <dot colour="green"></dot>
        <dot colour="red"></dot>
        <dot colour="green"></dot>
        <dot colour="green"></dot>
        <dot colour="orange"></dot>
        <dot colour="green"></dot>
      </div>
      <!--<div id="stripe"></div>-->
    </div>
  </router-link>
</template>

<script>
  import Dot from '@/components/Dot.vue'
  import { mapGetters } from 'vuex'

  export default {
    name: 'department',
    props: {
      title: ''
    },
    components: {
      Dot
    },
    computed: {
      ...mapGetters({
        department: 'department'
      })
    }
  }
</script>

<style scoped>
  .box {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;

    margin: 40px;
    font-weight: 200;
    font-size: 30px;
    background-color: ghostwhite;
    border-radius: 5px;
    box-shadow: 5px 5px 5px #444444;
    height: 60%;

    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
    flex-direction: column;
  }

  #title {

  }

  a {
    text-decoration: none !important;
  }

  /*#stripe {*/
    /*align-self: flex-end;*/
    /*justify-self: end;*/
    /*height: 5px;*/
    /*background-color: orange;*/
    /*width: 100%;*/
  /*}*/

  #dot_container {
    padding: 10px;
    align-self: center;
    display: flex;
    flex-direction: row;
  }
</style>
