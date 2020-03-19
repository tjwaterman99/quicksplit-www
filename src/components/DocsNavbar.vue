<template lang="pug">
.dashboard-navbar.d-flex.flex-column.p-3.bg-secondary
	side-navbar-item(to="/docs" text="Getting started" icon="house-fill" variant="secondary")
	side-navbar-item(to="/docs/logging" text="Collecting data" icon="document-text" variant="secondary")
	side-navbar-item(to="/docs/reports" text="Calculating results" icon="table" variant="secondary").mb-auto

	side-navbar-item(to="/dashboard" text="Dashboard" icon="book-half-fill" variant="secondary")
	side-navbar-item(to="/" text="Exit" icon="box-arrow-left" variant="secondary")
</template>

<script>
import SideNavbarItem from '@/components/navbars/SideNavbarItem.vue'

export default {
  name: 'DocsNavbar',
	components: {
		SideNavbarItem: SideNavbarItem
	}
}
</script>

<style lang="sass" scoped=true>

</style>
