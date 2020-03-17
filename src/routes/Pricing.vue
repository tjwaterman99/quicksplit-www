<template lang="pug">
.container-fluid.pt-4
	.row
		.col-lg-10.offset-lg-1
			h1.text-center Pricing
			h3.text-center Start for free. Scale as your team grows.
	.row
		.col-lg-8.offset-lg-2.col-xl-6.offset-xl-3
			plan-collection
</template>

<script>
import PlanCollection from "@/components/pricing/PlanCollection"

export default {
	name: "Pricing",
	components: {
		'plan-collection': PlanCollection
	}
}
</script>

<style lang="sass" scoped=true>
</style>
