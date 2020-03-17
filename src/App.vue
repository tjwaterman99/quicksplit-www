<template lang="pug">
#app
  div(v-if="!$route.path.match('/dashboard')")
    navbar
    router-view
  div(v-else).d-flex.dashboard
    dashboard-navbar
    router-view

</template>

<script>
import Navbar from './components/Navbar'
import DashboardNavbar from './components/DashboardNavbar'

export default {
  name: 'App',
  components: {
    Navbar,
    DashboardNavbar
  }
}
</script>

<style lang="sass">
@import "@/assets/variables.scss"

html, body
 height: 100%
 background-color: $light
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
