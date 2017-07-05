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
    font-size: 70px;
  }

  body {
    background: #79aec8; /* For browsers that do not support gradients */
    background: -webkit-linear-gradient(#022B3A, #1F7A8C); /* For Safari 5.1 to 6.0 */
    background: -o-linear-gradient(#022B3A, #1F7A8C); /* For Opera 11.1 to 12.0 */
    background: -moz-linear-gradient(#022B3A, #1F7A8C); /* For Firefox 3.6 to 15 */
    background: linear-gradient(#022B3A, #1F7A8C); /* Standard syntax */
    margin: 0;
    padding: 0;
  }

  #title {
    font-family: 'Raleway', sans-serif;
    font-weight: 200 !important;
  }

  #container {
    height: 100%;
  }
</style>
