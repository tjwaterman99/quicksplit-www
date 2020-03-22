<template lang="pug">
.login.pt-5
	.container
		.row
			.col
				h1.text-center Create report
		.row.mt-5
			.col-md-4.offset-md-4
				b-form(@submit="createReport")
					b-form-group(id="experiment")
						b-form-input(type="text" v-model="form.experiment" required placeholder="Experiment name")
					b-btn(type="submit" variant="outline-primary" block)
						span(v-if="!this.submitted") Create
						b-spinner(v-else)
		.row.mt-2(v-if="errors")
			.col-md-4.offset-md-4
				b-alert(variant="danger" show).text-center {{ errors }}
</template>

<script>
export default {
	name: "CreateReport",
	data: function() {
		return {
			form: {
				experiment: this.$route.query.experiment || null
			},
			errors: null,
			submitted: false
		}
	},
	methods: {
		createReport: function(event) {
			event.preventDefault()
			this.submitted = true
			var that = this
			this.$api.post('/results', {
				experiment: this.form.experiment
			}).then( () => {
				that.$root.$bvToast.toast(`Your report for experiment ${this.form.experiment} is now saved.`, {
					title: `Created report`,
					variant: "success"
				})
				that.$router.push('/dashboard/reports')
			}).catch( (error) => {
				that.submitted = false
				that.errors = error.response.data.message
			})
			return  event
		}
	}
}

</script>

<style lang="sass">
</style>
