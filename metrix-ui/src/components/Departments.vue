<template>
  <div class="container">
    <department v-for="department in allDepartments" v-bind:title="department['name']" :key="department['name']"></department>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  import Department from '@/components/Department.vue'
  import Red from '@/components/Red.vue'
  import Orange from '@/components/Orange.vue'
  import gql from 'graphql-tag'

  const gqlQuery = gql`{
  allDepartments{
    name
  }
 }`

  export default {
    name: 'departments',
    components: {
      Department,
      Red,
      Orange
    },
    data: () => ({
      allDepartments: {}
    }),
    methods: {
      update (event) {
        console.log(event.currentTarget.id)
        this.switch_department({
          header: event.currentTarget.id
        })
      },
      ...mapMutations([
        'switch_department'
      ])
    },
    apollo: {
      allDepartments: {
        query: gqlQuery
      }
    }
  }
</script>

<style scoped>
  .container {
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 25% 25% 25% 25%;
    grid-template-columns: 25% 25% 25% 25%;
    grid-column-gap: 5px;
    grid-row-gap: 5px;
    margin: 0;
    padding: 0;
  }
</style>
