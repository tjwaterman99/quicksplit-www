<template lang="pug">
.dashboard-navbar.d-flex.flex-column.p-3.bg-primary
	side-navbar-item(to="/dashboard" text="Experiments" icon="book-half-fill")
	side-navbar-item(to="/dashboard/logs" text="Logs (todo)" icon="document-text")
	side-navbar-item(to="/dashboard/reports" text="Reports (todo)" icon="table")
	side-navbar-item(to="/docs" text="Docs (todo)" icon="terminal")
	side-navbar-item(to="/dashboard/account" text="Account" icon="person-fill").mb-auto  //- This moves the below items to the bottom of the navbar
	side-navbar-item(to="/" text="Exit" icon="box-arrow-left")
</template>

<script>
import SideNavbarItem from '@/components/navbars/SideNavbarItem.vue'


export default {
  name: 'DashboardNavbar',
	components: {
		'SideNavbarItem': SideNavbarItem
	}
}
</script>

<style lang="sass" scoped=true>

</style>
