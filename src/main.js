import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App.vue'
import Dashboard from './routes/Dashboard.vue'
import Home from './routes/Home.vue'
import Pricing from './routes/Pricing.vue'
import "./assets/styles.sass"
import VueRouter from 'vue-router'
import HowItWorksItem from './components/how-it-works/HowItWorksItem'
import Client from './client'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)
Vue.component("HowItWorksItem", HowItWorksItem)

var routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/dashboard',
    component: Dashboard
  },
  {
    path: '/pricing',
    component: Pricing
  }
]

var router = new VueRouter({routes, mode: "history"})
var api = new Client(process.env.VUE_APP_API_URL)
var stripe_public_key = process.env.VUE_APP_STRIPE_PUBLIC_KEY

Vue.observable(api)

Vue.prototype.$api = api
Vue.prototype.$stripe_public_key = stripe_public_key


Vue.config.productionTip = false

var vm = new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

window.vm = vm
