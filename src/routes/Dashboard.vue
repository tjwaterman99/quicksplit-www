<template lang="pug">
.dashboard-content
	h1.mb-4 Experiments
	.experiment-tabs.d-flex
		experiment-summary(title="Active experiments" :value="activeExperiments").flex-fill
		experiment-summary(title="Exposures (last 7 days, todo)" :value="50000").flex-fill
		experiment-summary(title="Conversions (last 7 days, todo)" :value="500").flex-fill

</template>

<script>
import ExperimentSummary from '@/components/experiments/ExperimentSummary'

export default {
	name: "Dashboard",
	data: function() {
		return {
			experiments: []
		}
	},
	components: {
		'experiment-summary': ExperimentSummary
	},
	computed: {
		environment: function()  {
			return this.$root.environment
		},
		activeExperiments: function() {
			return this.experiments.length
		}
	},
	methods: {
		loadExperiments: function() {
			var that = this;
			this.$api.get('/experiments').then(resp => {
				that.experiments = resp.data.data
			})
		}
	},
	created: function() {
		this.loadExperiments()
	},
	watch: {
		environment: function() {
			this.loadExperiments()
		}
	}
}
</script>

<style lang="sass" scoped=true>
</style>
