<template lang="pug">
.dashboard-log
	.row.d-flex
		h1.mb-4.mr-auto Recent events
		b-button(variant="primary" @click="loadLogs").mt-3.mb-4.mr-4 Refresh
	b-table(:items="logs" :fields="fields")

</template>

<script>

export default {
	name: "DashboardLog",
	data: function() {
		return {
			logs: [],
			fields: ["last_seen_at", "subject", "experiment", "cohort", "type", "value", "id"]
		}
	},
	computed: {
		environment: function()  {
			return this.$root.environment
		}
	},
	methods: {
		loadLogs: function() {
			var that = this;
			this.$api.get('/recent').then(resp => {
				that.logs = resp.data.data
			})
		}
	},
	created: function() {
		this.loadLogs()
	},
	watch: {
		environment: function() {
			this.loadLogs()
		}
	}
}
</script>

<style lang="sass" scoped=true>
</style>
