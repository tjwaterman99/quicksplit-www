<template lang="pug">
.dashboard-content
	h1.mb-4 Experiments
	.experiment-tabs.d-flex.mb-2
		experiment-summary(title="Active experiments" :value="numActiveExperiments").flex-fill
		experiment-summary(title="Exposures (last 7 days)" :value="numRecentExposures").flex-fill
		experiment-summary(title="Conversions (last 7 days)" :value="numRecentConversions").flex-fill
	exposures-chart(:summaries="exposuresSummary").mb-2
	experiment-list(:experiments="experiments")

</template>

<script>
import ExperimentSummary from '@/components/experiments/ExperimentSummary'
import ExperimentList from '@/components/experiments/ExperimentList'
import ExposuresChart from '@/components/experiments/ExposuresChart'

export default {
	name: "Dashboard",
	data: function() {
		return {
			experiments: [],
			exposuresSummary: []
		}
	},
	components: {
		'experiment-summary': ExperimentSummary,
		'experiment-list':  ExperimentList,
		'exposures-chart': ExposuresChart
	},
	computed: {
		environment: function()  {
			return this.$root.environment
		},
		numActiveExperiments: function() {
			return this.experiments.length
		},
		numRecentExposures:  function() {
			var values = this.exposuresSummary.map( es => es.exposures )
			var value = values.reduce( (accumulator, current_value) => {
				return accumulator + current_value
			}, 0)
			return value
		},
		numRecentConversions: function() {
			var values = this.exposuresSummary.map( es => es.conversions )
			var value = values.reduce( (accumulator, current_value) => {
				return accumulator + current_value
			}, 0)
			return value
		}
	},
	methods: {
		loadExperiments: function() {
			var that = this;
			this.$api.get('/experiments').then(resp => {
				that.experiments = resp.data.data
			})
		},
		loadExposuresSummary: function() {
			var that = this;
			this.$api.get('/summaries/exposures').then(resp => {
				that.exposuresSummary = resp.data.data
			})
		}
	},
	created: function() {
		this.loadExperiments()
		this.loadExposuresSummary()
	},
	watch: {
		environment: function() {
			this.loadExperiments()
			this.loadExposuresSummary()
		}
	}
}
</script>

<style lang="sass" scoped=true>
</style>
