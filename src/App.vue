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
html, body
 height: 100%

#app
  height: 100%

.dashboard
  min-height: 100%
</style>
