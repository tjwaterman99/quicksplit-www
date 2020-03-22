<template lang="pug">
h1 Report for {{ report.experiment_name }}
	h2 Stat sig: {{ report.fields.significant }}
	h2 Subjects: {{ report.fields.subjects }}
	pre.text-small {{ report.fields.summary }}
</template>

<script>
export default {
	name: "ReportItem",
	data: function() {
		return {
			report: null
		}
	},
	created: function() {
		var that = this
		this.$api.get(`/results/${this.$route.params.report_id}`).then(resp => {
			that.report = resp.data.data
		})
	}
}
</script>

<style lang="sass" scoped=true>
.text-small
	font-size: 0.4em !important
</style>
