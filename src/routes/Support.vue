<template lang="pug">
.container-fluid.pt-4
	.row
		.col-lg-10.offset-lg-1
			h1.text-center Help center
			h3.text-center Get help. Find answers.
	.row
		.col-lg-6.offset-lg-3.d-flex.flex-row
			b-link.border.flex-fill.text-center.m-2.p-4.bg-white.support-link(to="/support/faq")
				h3 FAQ
				p Frequently asked questions
			b-link.border.flex-fill.text-center.m-2.p-4.bg-white.support-link(to="/support/contact")
				h4 Contact
				p Get help over email
</template>

<script>
export default {
	name: "Support"
}
</script>

<style lang="sass">
@import "@/assets/variables"


.support-link
	min-width: 45%

	&:hover
		background-color: $gray-200 !important
		text-decoration: none
		box-shadow: 0.1em 0.1em 2px

</style>
