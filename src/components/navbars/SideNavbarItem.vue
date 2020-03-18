<template lang="pug">
b-link(:to="to", :active="isActive").px-2.d-flex.justify-content-between.align-items-center.my-1.rounded
	span.mr-4.p-1 {{ text }}
	b-icon(:icon="icon")
</template>

<script>
export default {
	props: {
		'to': String,
		'text': String,
		'icon': String
	},
	computed: {
		isActive: function() {
			return this.$route.path == this.to
		}
	}
}
</script>

<style lang="sass" scoped=true>

@import "@/assets/variables"
@import "~bootstrap"

a
	color: $white

a.active
	background-color: theme-color-level(primary, 3)

a:hover
	background-color: theme-color-level(primary, 1)
	text-decoration: none
	color: $white
</style>
