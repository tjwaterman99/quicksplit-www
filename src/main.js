import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App.vue'
import Dashboard from './routes/Dashboard.vue'
import Home from './routes/Home.vue'
import Pricing from './routes/Pricing.vue'
import LogIn from './routes/LogIn.vue'
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
  },
  {
    path: '/login',
    component: LogIn,
    meta: {
      focused: true
    }
  }
]

var router = new VueRouter({routes, mode: "history"})
var api = new Client(process.env.VUE_APP_API_URL)
var stripe_public_key = process.env.VUE_APP_STRIPE_PUBLIC_KEY

Vue.config.productionTip = false
Vue.prototype.$stripe_public_key = stripe_public_key
Vue.prototype.$api = api

var vm = new Vue({
  router,
  render: h => h(App),
  data: {
    user: undefined,
    plans: []
  },
  computed: {
    loggedIn: function() {
      return !(this.user === undefined)
    }
  }
}).$mount('#app')

window.quicksplit = vm
