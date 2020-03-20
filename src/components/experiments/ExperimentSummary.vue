<template lang="pug">
.experiment-summary.p-2rounded.text-center
	h2 {{ value }}
	h5 {{ title }}
</template>

<script>
export default {
	name: 'ExperimentSummary',
	props: [
		'value',
		'title'
	]
}
</script>

<style lang="sass">
@import "@/assets/variables.scss"

.experiment-summary
	background: $white
	box-shadow: 0.05em 0.05em 0.1em $gray-400
</style>
