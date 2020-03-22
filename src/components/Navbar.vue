<template lang="pug">
	b-navbar(toggleable="lg" type="light" variant="light")
		.container
			b-navbar-toggle(target="nav-collapse", v-if="!$route.meta.focused")
			b-navbar-brand(to="/") quicksplit
				img(src="/logo.svg" alt="quicksplit").logo

			b-collapse#nav-collapse(is-nav, v-if="!$route.meta.focused")
				b-navbar-nav
					b-nav-item(to="/pricing") Pricing
					b-nav-item(to="/docs") Docs
					b-nav-item(to="/support") Support

				b-navbar-nav.ml-auto(v-if="!this.$root.loggedIn")
					b-btn(variant="outline-primary" to="/login").mr-lg-2 Log In
					b-btn(variant="primary" to="/register").text-light Register
				b-navbar-nav.ml-auto(v-else)
					b-nav-item(@click="logOut").mr-lg-2 Log Out
					b-nav-item.mr-lg-2.text-primary(to="/dashboard") Dashboard
						b-icon-arrow-right

</template>

<script>
export default {
	name: "Navbar",
	methods: {
		logOut: function() {
			this.$api.delete("/sessions").then( () => {
				this.$root.user = undefined
			})
		}
	}
}
</script>

<style lang="sass" scoped=true>
.logo
	width: 2em
	height: 2em
</style>
