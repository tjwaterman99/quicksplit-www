<template lang="pug">
ul.plan-item.list-group.text-center.p-2
	li.list-group-item.border-0.bg-light.mb-n3
		h4.text-primary {{ formatName(plan.name) }}
	li.list-group-item.border-0.bg-transparent.mt-n2.font-weight-bold {{ formatPrice(plan) }}
	li.list-group-item.bg-white.border-0 {{ formatSubjectsPerExperiment(plan) }}
	li.list-group-item.bg-white.border-0 {{ formatMaxActiveExperiments(plan) }}
	li.list-group-item.bg-white.border-0
		b-btn(variant="primary").btn-block.p-2
			div(v-if="plan.name=='custom'") Contact Sales
			div(v-else-if="plan.name=='free'") Start for free
			div(v-else="plan.name=='free'") Get started


</template>

<script>
export default {
	name: "PlanItem",
	props: {
		plan: Object,
		annual: Boolean
	},
	created: function() {
		console.log(this.plan)
	},
	methods: {
		formatPrice: function(plan) {
			var price = plan.price_in_cents / 100

			if (this.annual) {
				price = Math.ceil(price / 12)
			}

			if (plan.self_serve) {
				return `$${price} / mo`
			} else {
				return "Custom"
			}
		},
		formatName: function(name) {
			name = name.charAt(0).toUpperCase() + name.substring(1)
			if (name == "Custom") {
				return "Enterprise"
			} else {
				return name
			}
		},
		formatSubjectsPerExperiment: function(plan) {
			if (plan.name=="custom") {
				return "Custom subjects"
			}
			return `${plan.max_subjects_per_experiment / 1000}K subjects per test`
		},
		formatMaxActiveExperiments: function(plan) {
			if (plan.name=="custom") {
				return "Custom experiments"
			}
			return `${plan.max_active_experiments} active experiments`
		}
	}
}
</script>

<style lang="sass" scoped=true>
.plan-item
	height: 100%
	min-height: 100%
</style>
