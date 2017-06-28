<template>
  <router-link :to='title'>
    <div class="box">
      <div id="title">
        {{title}}
      </div>
      <div id="stripe"></div>
    </div>
  </router-link>
</template>

<script>

  export default {
    name: 'department',
    props: {
      title: ''
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
    background-color: whitesmoke;
    border-radius: 5px;
    box-shadow: 5px 5px 5px gray;
    height: 60%;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
  }

  #title {
    align-self: center;
    padding-bottom: 40px;
  }

  a {
    text-decoration: none !important;
  }

  #stripe {
    align-self: flex-end;
    justify-self: end;
    height: 5px;
    background-color: red;
    width: 100%;
  }
</style>
