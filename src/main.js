import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import "./assets/styles.sass"

import App from './App.vue'
import Dashboard from './routes/Dashboard.vue'
import DashboardAccount from './routes/DashboardAccount.vue'
import DashboardLogs from './routes/DashboardLogs.vue'
import DashboardReports  from './routes/DashboardReports.vue'
import ReportItem from './routes/ReportItem.vue'
import Home from './routes/Home.vue'
import Pricing from './routes/Pricing.vue'

import NotFound404 from './routes/errors/NotFound404.vue'

import Support from './routes/Support.vue'
import SupportContact from './routes/SupportContact.vue'
import SupportFaq from './routes/SupportFaq.vue'

import LogIn from './routes/LogIn.vue'
import Register from './routes/Register.vue'

import Docs from './routes/Docs.vue'
import DocsApiTokens from './routes/docs/ApiTokens'
import DocsCreateExperiment from './routes/docs/CreateExperiment'
import DocsHowItWorks from './routes/docs/HowItWorks'
import DocsLogging from './routes/docs/Logging'
import DocsReports from './routes/docs/Reports'

import Create from './routes/Create.vue'
import CreateExperiment from './components/forms/CreateExperiment.vue'
import CreateReport from './components/forms/CreateReport.vue'

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
    path: '/support',
    component: Support,
  },
  {
    path: '/support/contact',
    component: SupportContact,
    meta: {
      focused: true
    }
  },
  {
    path: '/support/faq',
    component: SupportFaq
  },
  {
    path: '/dashboard',
    component: Dashboard
  },
  {
    path: '/dashboard/account',
    component: DashboardAccount
  },
  {
    path: '/dashboard/logs',
    component: DashboardLogs
  },
  {
    path: '/dashboard/reports',
    component: DashboardReports,
  },
  {
    path: '/dashboard/reports/:report_id',
    component: ReportItem,
    name: 'report-item'
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
  },
  {
    path: '/register',
    component: Register,
    meta:  {
      focused: true
    }
  },
  {
    path: '/create',
    component: Create,
    meta: {
      focused: true
    },
    children: [
      {
        path: 'experiment',
        component: CreateExperiment,
        meta: {
          focused: true
        }
      },
      {
        path: 'report',
        component: CreateReport,
        meta: {
          focused: true
        }
      }
    ]
  },
  {
    path: '/docs',
    component: Docs
  },
  {
    path: '/docs/how-it-works',
    component: DocsHowItWorks
  },
  {
    path: '/docs/api-tokens',
    component: DocsApiTokens
  },
  {
    path: '/docs/create-experiment',
    component: DocsCreateExperiment
  },
  {
    path: '/docs/logging',
    component: DocsLogging
  },
  {
    path: '/docs/reports',
    component: DocsReports
  },
  {
    path: '*',
    component: NotFound404
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
    environment: "production",
    plans: [],
    experiments: []
  },
  computed: {
    loggedIn: function() {
      return !(this.user === undefined)
    }
  }
})

window.quicksplit = vm
api.vm = vm

vm.$mount('#app')
