<template lang="pug">
.how-it-works-item.text-center
	h5.text-center.pt-4 {{ header }}
	.img-wrapper.px-4.pb-1.pt-2
		img(:src="imageSource")
</template>

<script>
export default {
	name: "HowItWorksItem",
	props: [
		"header",
		"imageSource"
	]
}
</script>

<style lang="sass" scoped=true>
.img-wrapper
	img
		max-width: 100%
		max-height: 100%
		border-radius: 0.75em
		box-shadow: 0.2em 0.1em 0.5em

</style>
