<template lang="pug">
.create-experiment.pt-5
	.container
		.row
			.col
				h1.text-center Change plan
		.row.mt-5
			.col-md-4.offset-md-4
				b-form(@submit="changePlan")
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
			submitted: false,
			errors: null
		}
	},
	computed: {
		plan_options: function() {
			return this.$root.plans.map(function(plan) {
				return {text: `${plan.name} (${plan.schedule_name})`, value: plan}
			})
		}
	},
	methods: {
		changePlan: function(event) {
			event.preventDefault()
			this.submitted=true;
			var that = this
			this.$api.patch('/account/plan', {
				name: this.selected.name,
				schedule_name: this.selected.schedule_name
			}).then( () => {
				that.$root.loadUser().then( () => {
					that.$root.$bvToast.toast(`Your plan  was changed to the ${this.selected.schedule_name} ${this.selected.name} plan`, {
						title: `Changed plan`,
						variant: "success"
					})
					that.$router.push('/dashboard/account')
				})
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
