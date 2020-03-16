<template lang="pug">
.dashboard-navbar.d-flex.flex-column.p-3.bg-primary
	b-link(to="/dashboard#experiments").text-white.p-2 Experiments
	b-link(to="/dashboard#account").text-white.p-2 Account
	b-link(to="/").text-white.p-2 Home
</template>

<script>

export default {
  name: 'DashboardNavbar',
}
</script>

<style lang="sass" scoped=true>

</style>
