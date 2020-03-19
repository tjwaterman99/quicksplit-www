<template lang="pug">
.dashboard-navbar.d-flex.flex-column.p-3.bg-primary
	side-navbar-item(to="/dashboard" text="Experiments (wip)" icon="book-half-fill")
	side-navbar-item(to="/dashboard/logs" text="Logs" icon="document-text")
	side-navbar-item(to="/dashboard/reports" text="Reports (todo)" icon="table")
	side-navbar-item(to="/docs" text="Docs (todo)" icon="terminal")
	side-navbar-item(to="/dashboard/account" text="Account" icon="person-fill").mb-auto
	span.d-flex.justify-content-between.align-items-center.px-2
		p.mr-4.p-1.text-white View staging data
		b-form-checkbox(switch plain=true @change="toggleTestData" :checked="$root.environment!='production'").pb-3



	side-navbar-item(to="/" text="Exit" icon="box-arrow-left")
</template>

<script>
import SideNavbarItem from '@/components/navbars/SideNavbarItem.vue'


export default {
  name: 'DashboardNavbar',
	components: {
		'SideNavbarItem': SideNavbarItem
	},
	methods: {
		toggleTestData: function(event) {
			if (event == true) {
				this.$root.environment =  "staging"
			} else {
				this.$root.environment = "production"
			}
			this.$emit("environment-change", this.$root.environment)
		}
	}
}
</script>

<style lang="sass" scoped=true>

</style>
