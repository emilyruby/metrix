<template>
  <div id="sidebar">
    <div id="card">
      <div id="title">
        {{$route.params.title}}
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'sidebar',
    props: {
      title: ''
    },
    computed: {
      ...mapGetters({
        department: 'department'
      })
    }
  }
</script>

<style scoped>
 #sidebar {
   position: fixed;
   width: 30vw;
   background-color: transparent;
   height: 100%;
   margin: 0;
   padding: 0;
 }

  #card {
    height: 110px;
    width: 330px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    font-weight: 200;
    font-size: 38px;
    margin-left: 17%;
    margin-right: 20%;
    margin-top: 50%;
    background-color: whitesmoke;
    border-radius: 5px;
    box-shadow: 5px 5px 5px #444444;
    display: flex;
    justify-content: center;
  }

  #title {
    align-self: center;
    justify-self: center;
    text-align: center;
  }
</style>
