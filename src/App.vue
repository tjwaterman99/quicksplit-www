<template lang="pug">
#app
  div(v-if="!$route.path.match('/dashboard')")
    navbar
    router-view
    foot

  div(v-else).d-flex.dashboard
    dashboard-navbar
    router-view

</template>

<script>
import Navbar from './components/Navbar'
import DashboardNavbar from './components/DashboardNavbar'
import Foot from './components/Footer'

export default {
  name: 'App',
  components: {
    "Navbar":  Navbar,
    "DashboardNavbar": DashboardNavbar,
    "Foot": Foot
  }
}
</script>

<style lang="sass">
@import "@/assets/variables.scss"

html, body
 height: 100%
 background-color: $dark
 overflow-x: hidden


#app
  height: 100%
  background-color: $light

.dashboard
  min-height: 100%

.container-fluid
  padding-left: 0px !important
  padding-right: 0px !important
</style>
