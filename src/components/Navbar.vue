<template  lang="pug">
b-navbar(toggleable="lg" type="dark" variant="primary")
	.container
		b-navbar-brand(to="/") Quick Split
		b-navbar-toggle(target="nav-collapse")
		b-collapse#nav-collapse(is-nav)
			b-navbar-nav
				b-nav-item(href="/pricing") Pricing
				b-nav-item(to="/dashboard") Dashboard

			b-navbar-nav.ml-auto

				b-nav-item-dropdown(text="Lang" right)
					b-dropdown-item(to="/") EN
					b-dropdown-item(to="/") ES
					b-dropdown-item(to="/") RU
					b-dropdown-item(to="/") FA

				b-nav-item-dropdown(right)
					template(v-slot:button-content)
						em User
					b-dropdown-item(to="#") Profile
					b-dropdown-item(to="#") Sign Out
</template>

<script>
export default {
	name: "Navbar"
}
</script>
