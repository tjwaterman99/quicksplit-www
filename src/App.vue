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
import Foot from './components/Footer'

export default {
	name: 'App',
	components: {
		"Navbar":  Navbar,
		"DashboardNavbar": DashboardNavbar,
		"Foot": Foot
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
