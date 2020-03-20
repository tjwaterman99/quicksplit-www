<template lang="pug">
.dashboard-reports
	.d-flex
		h1.mb-4.mr-auto Reports
		b-button(variant="primary" @click="$router.push('/create/report')").mt-3.mb-4 Create report
	report-list(:reports="reports")
</template>

<script>
import ReportList  from '@/components/reports/ReportList';

export default {
	name: "DashboardReports",
	data: function() {
		return {
			'reports': []
		}
	},
	methods: {
		createReport: function()  {
			this.$router.push('/create/report')
		},
		loadReports: function() {
			var that = this;
			this.$api.get('/results').then(resp => {
				that.reports = resp.data.data
			})
		}
	},
	components: {
		'ReportList': ReportList
	},
	created: function() {
		this.loadReports()
	}
}
</script>

<style lang="sass">
</style>
