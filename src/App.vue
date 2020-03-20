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
	created: function() {
		this.loadUser();
		this.loadPlans();
	},
	methods: {
		loadUser: function() {
			var that = this
			this.$api.get('/user').then(resp => {
				that.$root.user = resp.data.data
			}).catch( () => {
				that.$root.user = undefined
			})
		},
		loadPlans: function() {
			var that = this
			this.$api.get('/plans').then(resp => {
				that.$root.plans = resp.data.data
			}).catch(err => {
				console.log(err)
			})
		}
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
