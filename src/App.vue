<template lang="pug">
#app
	div(v-if="$route.path.match('/dashboard')").d-flex.dashboard
		dashboard-navbar.dashboard-nav
		div.flex-grow-1.px-4.py-2.dashboard-body
			b-alert(:show="$root.environment != 'production'") You're viewing {{ $root.environment }} data.
			router-view

	div(v-else-if="$route.path.match('/docs')").d-flex.docs
		docs-navbar.dashboard-nav
		div.flex-grow-1.px-4.py-2.docs-body
			router-view

	div(v-else)
		navbar
		router-view
</template>

<script>
import Navbar from './components/Navbar'
import DashboardNavbar from './components/DashboardNavbar'
import DocsNavbar from './components/DocsNavbar'

export default {
	name: 'App',
	components: {
		"Navbar":  Navbar,
		"DashboardNavbar": DashboardNavbar,
		"DocsNavbar": DocsNavbar
	},
  metaInfo: {
    title: 'A/B test any product',
    titleTemplate: '%s | Quick Split',
    meta: [
      {'description': "Quick Split is the simple, easy to use A/B testing service for your products. You can run an A/B test with just two logging calls. Unlimited free plan."}
    ]
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
	min-height: 100%
	background-color: $light

.dashboard
	min-height: 100%

.dashboard-nav
	min-width: 12em
	max-height: 100%
	min-height:  100%
	position: fixed

.dashboard-body
	margin-left: 13em

.docs
	min-height: 100%

.docs-body
	margin-left: 13em
	max-width: 40em

.container-fluid
	padding-left: 0px !important
	padding-right: 0px !important
</style>
