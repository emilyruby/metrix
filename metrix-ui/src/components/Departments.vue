<template>
  <div class="container">
    <department title="AAArgh"></department>
    <department title="Buying & Merchandising"></department>
    <department title="Internationals"></department>
    <department title="Finance"></department>
    <department title="Marketing SRO"></department>
    <department title="Marketing CRM"></department>
    <department title="Designers"></department>
    <department title="Products"></department>
    <department title="Warehouse"></department>
    <department title="Customer Service GD"></department>
    <department title="Customer Service SGS"></department>
    <department title="Customer Service EWB"></department>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  import Department from '@/components/Department.vue'

  export default {
    name: 'departments',
    components: {
      Department
    },
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
