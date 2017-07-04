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
    margin-bottom: 0px;
    font-size: 70px;
  }

  body {
    background: #29b6ff; /* For browsers that do not support gradients */
    background: -webkit-linear-gradient(#29b6ff, #ffffff); /* For Safari 5.1 to 6.0 */
    background: -o-linear-gradient(#29b6ff, #ffffff); /* For Opera 11.1 to 12.0 */
    background: -moz-linear-gradient(#29b6ff, #ffffff); /* For Firefox 3.6 to 15 */
    background: linear-gradient(#29b6ff, #ffffff); /* Standard syntax */
    margin: 0;
    padding: 0;
  }

  #container {
    padding: 0;
    margin: 0;
  }

  #title {
    font-family: 'Raleway', sans-serif;
    font-weight: 200 !important;
  }

</style>
