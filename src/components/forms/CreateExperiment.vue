<template lang="pug">
.create-experiment.pt-5
	.container
		.row
			.col
				h1.text-center Create experiment
		.row.mt-5
			.col-md-4.offset-md-4
				b-form(@submit="createExperiment")
					b-form-group(id="name")
						b-form-input(type="text" v-model="form.name" required placeholder="Experiment name")
					b-btn(type="submit" variant="outline-primary" block)
						span(v-if="!this.submitted") Create
						b-spinner(v-else)
		.row.mt-2(v-if="errors")
			.col-md-4.offset-md-4
				b-alert(variant="danger" show).text-center {{ errors }}
</template>

<script>
export default {
	name: "CreateExperiment",
	data: function() {
		return {
			form: {
				name: null
			},
			submitted: false,
			errors: null
		}
	},
	methods: {
		createExperiment: function(event) {
			event.preventDefault()
			this.submitted=true;
			var that = this
			this.$api.post('/experiments', {
				name: this.form.name
			}).then( () => {
				that.$root.$bvToast.toast(`You can now start logging data to your experiment ${this.form.name}`, {
					title: `Created experiment`,
					variant: "success"
				})
				that.$router.push('/dashboard')
			}).catch( (error) => {
				this.submitted = false
				that.errors = error.response.data.message
			})
			return  event
		}
	}
}

</script>

<style lang="sass">
</style>
