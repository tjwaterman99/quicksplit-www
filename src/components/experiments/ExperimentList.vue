<template lang="pug">
.experiment-list.p-2.mt-4
	b-list-group.experiment-list
		b-list-group-item(v-for="experiment in experiments" :key="experiment.id").d-flex.align-items-center.text-left.experiment-item
			span(:class={'active': "experiment.active"}).experiment-data.experiment-name.flex-fill
				span {{ experiment.name  }}
				b-badge(pill variant="success" size="sm" v-if="experiment.active").ml-2 Active
			span.experiment-data.experiment-subjects.flex-fill {{ experiment.subjects_counter }}  subjects
			span.experiment-data.experiment-exposures.flex-fill {{ formatTimestamp(experiment.last_exposure_at) }}
			b-btn(variant="outline-danger" v-if="experiment.active" @click="toggleActive(experiment)").experiment-data Stop
			b-btn(variant="success" v-else @click="toggleActive(experiment)").experiment-data Start
			b-link(to="/reports").experiment-data.experiment-results Results
				b-icon-arrow-right.ml-2
</template>

<script>
export default {
	name: "ExperimentList",
	props: {
		experiments: Array
	},
	methods: {
		formatTimestamp(timestamp) {
			if (!timestamp) {
				return "No exposures"
			} else {
				return timestamp.substring(0, 19)
			}
		},
		toggleActive(experiment) {
			this.$parent.$emit("toggle-active", experiment)
		}
	}
}
</script>

<style lang="sass">
@import "@/assets/variables"
@import "~bootstrap"

.experiment-item
	border: 1px
	margin: 0.1em

.experiment-data
	margin-right: 2em
	max-width: 20%

.experiment-results
	&:hover
		font-weight: bold
		text-decoration: none
		color: $primary

</style>
