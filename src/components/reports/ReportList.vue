<template lang="pug">
b-list-group
	b-list-group-item(v-for="report in reports", :key="report.id").d-flex.align-items-center.border-0.my-1
		span.flex-fill {{ report.experiment_name }}
		span.flex-fill {{ report.ran_at }}
		span.flex-fill {{ report.fields.subjects }} subjects
		span.flex-fill {{ report.fields.significant }}
		b-link(:to='{name: "report-item", params: {report_id: report.id}}') View report
			b-icon-arrow-right.ml-2
</template>

<script>
export default {
	name: "ReportList",
	props: {
		'reports': Array
	}
}
</script>

<style lang="sass">
</style>
