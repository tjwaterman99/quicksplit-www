<template lang="pug">
.dashboard-content
	.d-flex
		h1.mb-4.mr-auto Experiments
		b-button(variant="primary" @click="$router.push('/create/experiment')").mt-3.mb-4 Create experiment
	.experiment-tabs.d-flex.mb-2
		experiment-summary(title="Active experiments" :value="numActiveExperiments").flex-fill.mr-2
		experiment-summary(title="Exposures (last 7 days)" :value="numRecentExposures").flex-fill.mr-2
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
		experiments: function() {
			return this.$root.experiments
		},
		numActiveExperiments: function() {
			return this.experiments.filter( experiment => experiment.active).length
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
				that.$root.experiments = resp.data.data
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
		this.$on('toggle-active', (experiment) => {
			var that = this;
			var route
			var title
			var message
			var variant
			if (experiment.active) {
				route = '/deactivate'
				title = "Stopped experiment"
				message = `Experiment "${experiment.name}" can no longer receive new data.`
				variant = "warning"
			} else {
				route = '/activate'
				title = "Started experiment"
				message = `Experiment "${experiment.name}" can now start receiving new data.`
				variant = "success"
			}

			this.$api.post(route, {experiment: experiment.name}).then( resp => {
				if (resp.data.status_code == 200) {
					that.loadExperiments()
					that.$root.$bvToast.toast(message, {
						title: title,
						variant: variant
					})
				}
			})
		})
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
