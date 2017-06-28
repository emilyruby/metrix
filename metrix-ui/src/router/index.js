import Vue from 'vue'
import Router from 'vue-router'
import Departments from '@/components/Departments.vue'
import More from '@/components/More.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: Departments,
      component: Departments
    },
    {
      path: '/:title',
      name: More,
      components: {
        default: More
      },
      props: true
    }
  ]
})
