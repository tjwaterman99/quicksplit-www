<template lang="pug">
b-list-group
	b-list-group-item(v-for="report in reports", :key="report.id")
		span {{ report.experiment_name }}
		span {{ report.ran_at }}
		span {{ report.fields.significant }}
		span {{ report.fields.subjects }}
		b-button(:to='{name: "report-item", params: {report_id: report.id}}') View report
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
