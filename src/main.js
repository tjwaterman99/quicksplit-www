import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App.vue'
import Dashboard from './routes/Dashboard.vue'
import Home from './routes/Home.vue'
import "./assets/styles.sass"
import VueRouter from 'vue-router'
import HowItWorksItem from './components/how-it-works/HowItWorksItem'

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
  }
]

var router =  new VueRouter({routes, mode: "history"})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
