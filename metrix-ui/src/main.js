// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store.js'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import VueApollo from 'vue-apollo'

Vue.config.productionTip = false

Vue.use(VueApollo)

const apolloClient = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://127.0.0.1:8000/graphql',
    transportBatching: true
  }),
  connectToDevTools: true
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  apolloProvider,
  render: h => h(App)
})
