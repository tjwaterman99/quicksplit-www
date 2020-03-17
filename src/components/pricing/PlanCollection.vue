<template lang="pug">
.plan-collection
	.custom-control.custom-switch.text-center.mt-2
		input(type="checkbox" checked).custom-control-input#annual
		label.custom-control-label(for="annual", @click="toggleAnnual") Annual Prices
	ul.plan-collection-list.list-group.list-group-horizontal-md.bg-light.border-0.d-flex.px-3.mt-2
		li(v-for="plan in selectedPlans", :key="plan.id").plan-collection-item.list-group-item.bg-light.flex-even.p-0.border-0
			plan-item(:plan="plan", :annual="annual")

</template>

<script>

import PlanItem from '@/components/pricing/PlanItem'

export default {
	name: "PlanCollection",
	components: {
		"plan-item": PlanItem
	},
	data: function() {
		return {
			plans: [],
			annual: true
		}
	},
	methods: {
		toggleAnnual: function() {
			console.log("toggled")
			this.annual = !this.annual
		}
	},
	computed: {
		selectedPlans: function() {
			if (this.annual) {
				return this.plans.filter(function(plan) {
					if (plan.name == "free" || !plan.self_serve) {
						return true
					} else {
						return plan.schedule.name == "annual"
					}
				})
			} else {
				return this.plans.filter(function(plan) {
					if (plan.name== "free" || !plan.self_serve) {
						return true
					} else {
						return plan.schedule.name == "monthly"
					}
				})
			}
		}
	},
	created: function() {
		console.log("created")
		var that = this
		this.$api.get('/plans').then(resp => {
			that.plans = resp.data.data
		}).catch(err => {
			console.log(err)
		})
	}
}
</script>

<style lang="sass">
.flex-even
	flex: 1

</style>
