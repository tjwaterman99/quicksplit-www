<template lang="pug">
	b-jumbotron(fluid=true, bg-variant="primary")
		template(v-slot:header)
			.text-white Drive your product
		template(v-slot:lead)
			.text-white Quick Split is easiest way to run A/B tests on any of your products, without needing a data scientist
</template>

<script>
export default {
	name: "Home"
}
</script>

<style lang="sass">
</style>
