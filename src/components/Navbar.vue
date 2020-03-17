<template lang="pug">
	b-navbar(toggleable="lg" type="light" variant="light")
		.container
			b-navbar-brand(to="/") Quick Split
			b-navbar-toggle(target="nav-collapse", v-if="!$route.meta.focused")
			b-collapse#nav-collapse(is-nav, v-if="!$route.meta.focused")
				b-navbar-nav
					b-nav-item(to="/pricing") Pricing

				b-navbar-nav.ml-auto(v-if="!this.$root.loggedIn")
					b-btn(variant="outline-primary" to="/login").mr-lg-2 Log In
					b-btn(variant="primary" to="/register").text-light Register
				b-navbar-nav.ml-auto(v-else)
					b-btn(variant="outline-primary" @click="logOut").mr-lg-2 Log Out
					b-btn(variant="primary").mr-lg-2 Dashboard

</template>

<script>
export default {
	name: "Navbar",
	methods: {
		logOut: function() {
			console.log("Logging out")
			this.$api.delete("/sessions").then( () => {
				this.$root.user = undefined
			})
		}
	}
}
</script>

<style lang="scss" scoped=true>
</style>
