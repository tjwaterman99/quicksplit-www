<template lang="pug">
ul.plan-item.list-group.text-center.p-2
	li.list-group-item.border-0.bg-light.mb-n3
		h4.text-primary {{ formatName(plan.name) }}
	li.list-group-item.border-0.bg-transparent.mt-n2.font-weight-bold {{ formatPrice(plan) }}
	li.list-group-item.bg-white.border-0 {{ formatSubjectsPerExperiment(plan) }}
	li.list-group-item.bg-white.border-0 {{ formatMaxActiveExperiments(plan) }}
	li.list-group-item.bg-white.border-0
		b-btn(variant="primary" :to="{path: values.route, query: values.query}").btn-block.p-2 {{ values.message }}


</template>

<script>
export default {
	name: "PlanItem",
	props: {
		plan: Object,
		annual: Boolean
	},
  computed: {
    values: function() {
      var result = {
        message: undefined,
        route: undefined,
        query: {
          name: this.plan.name,
          annual: this.annual
        }
      }
      // Signed up and has a plan
      if (this.$root.loggedIn) {
        if (this.$root.user.account.plan.id == this.plan.id) {
          result.message = "Current plan"
          result.route = "/change/plan"
        } else if (!this.plan.self_serve) {
          result.message = "Contact us"
          result.route = "/support/contact"
          result.query = {}
        } else if (this.$root.upgradeablePlan.rank == this.plan.rank) {
          if (this.$root.upgradeablePlan.price_in_cents > this.plan.price_in_cents) {
            result.message = "Upgrade"
            result.route = "/change/plan"
          } else {
            result.message = "Downgrade"
            result.route = "/change/plan"
          }
        } else if (this.$root.upgradeablePlan.rank > this.plan.rank) {
          result.message = "Downgrade"
          result.route = "/change/plan"
        } else {
          result.message = "Downgrade"
          result.route = "/change/plan"
        }
      // Defaults for non-signed in accounts
      } else {
        if (this.plan.price_in_cents > 0) {
          result.message = "Get started"
          result.route = "/register"
        } else {
          result.message = "Start for free"
          result.route = "/register"
        }
      }

      return result
    }
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
