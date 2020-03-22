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
					b-btn(type="submit" variant="outline-primary" block) Create
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
			errors: null
		}
	},
	methods: {
		createReport: function(event) {
			event.preventDefault()
			var that = this
			this.$api.post('/results', {
				experiment: this.form.experiment
			}).then( () => {
				that.$router.push('/dashboard/reports')
			}).catch( (error) => {
				that.errors = error.response.data.message
			})
			return  event
		}
	}
}

</script>

<style lang="sass">
</style>
