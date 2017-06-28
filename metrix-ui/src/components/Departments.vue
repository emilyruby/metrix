<template>
  <div class="container">
    <department title="Technology"></department>
    <red title="Buying & Merchandising"></red>
    <department title="Internationals"></department>
    <department title="Finance"></department>
    <orange title="Marketing SRO"></orange>
    <orange title="Marketing CRM"></orange>
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
  import Red from '@/components/Red.vue'
  import Orange from '@/components/Orange.vue'

  export default {
    name: 'departments',
    components: {
      Department,
      Red,
      Orange
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
