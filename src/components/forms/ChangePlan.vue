<template lang="pug">
.create-experiment.pt-5
	.container
		.row
			.col
				h1.text-center Change plan
		.row.mt-5
			.col-md-4.offset-md-4
				b-form(@submit="createExperiment")
					b-form-group(id="name")
						b-form-select(v-model="selected" :options="plan_options")
					b-btn(type="submit" variant="outline-primary" block)
						span(v-if="!this.submitted") Change plan
						b-spinner(v-else)
		.row.mt-2(v-if="errors")
			.col-md-4.offset-md-4
				b-alert(variant="danger" show).text-center {{ errors }}
</template>

<script>
// TODO: allow selecting only self serve plans by filtering the root's plan object
// TODO: add toggle for annual vs monthly pricing
// form-select docs: https://bootstrap-vue.js.org/docs/components/form-select/
export default {
	name: "ChangePlan",
	data: function() {
		return {
			form: {
				name: null
			},
      selected: null,
      plan_options: [
        {value: 1, text: "first plan"},
        {value: 2, text: "second plan"}
      ],
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
