<template lang="pug">
.dashboard-navbar.d-flex.flex-column.p-3.bg-primary
	b-link(to="/docs#registration").text-white.p-2 Registration
	b-link(to="/docs#other").text-white.p-2 Other
	b-link(to="/").text-white.p-2 Home
</template>

<script>

export default {
  name: 'DocsNavbar',
}
</script>

<style lang="sass" scoped=true>

</style>
