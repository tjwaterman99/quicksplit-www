<template lang="pug">
.experiment-list.p-2.mt-4
	b-list-group
		b-list-group-item(v-for="experiment in experiments" :key="experiment.id").d-flex.align-items-center
			span.experiment-data.experiment-name.flex-fill {{ experiment.name  }}
			span.experiment-data.experiment-active.flex-fill {{ experiment.active  }}
			span.experiment-data.experiment-subjects.flex-fill {{ experiment.subjects_counter  }}  subjects
			span.experiment-data.experiment-exposures.flex-fill {{ experiment.last_exposure_at  }}
			b-btn(variant="outline-primary") Start
			b-btn(variant="outline-primary") Get results
</template>

<script>
export default {
	name: "ExperimentList",
	props: {
		experiments: Array
	}
}
</script>

<style lang="sass">
.experiment-data
	margin-right: 2em
</style>
