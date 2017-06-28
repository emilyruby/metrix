<template>
  <div id="container">
    <h1 id="title">MyOptique Group</h1>
    <router-view></router-view>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'

  export default {
    name: 'homepage',
    methods: {
      update (event) {
        this.switch_department({
          header: event.currentTarget.id
        })
      },
      ...mapMutations([
        'switch_department'
      ])
    }
  }
</script>

<style>
  h1 {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: white;
    margin: 30px;
    font-weight: 200;
    font-size: 70px;
  }

  body {
    background-color: #79aec8;
    margin: 0;
    padding: 0;
  }

  #container {
    padding: 0;
    margin: 0;
  }

</style>
