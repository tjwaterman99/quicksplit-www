<template lang="pug">
	b-navbar(toggleable="lg" type="light" variant="light")
		.container
			b-navbar-brand(to="/") Quick Split
			b-navbar-toggle(target="nav-collapse")
			b-collapse#nav-collapse(is-nav)
				b-navbar-nav
					b-nav-item(to="/pricing") Pricing

				b-navbar-nav.ml-auto
					b-btn(variant="outline-primary" @click="signIn").mr-lg-2 Sign In
					b-btn(variant="primary" @click="signUp").text-light Sign Up

</template>

<script>
export default {
	name: "Navbar",
	methods: {
		signUp: function() {
			console.log("Signing up")
		},
		signIn: function() {
			console.log("Signing in")
		}
	}
}
</script>

<style lang="scss" scoped=true>
</style>
