<template lang="pug">
.container-fluid.pt-4
	.row
		.col-lg-10.offset-lg-1
			h1.text-center Frequently asked questions
	.row.mt-5
		.col-lg-6.offset-lg-3
			h5 Q: How does Quick  Split calculate whether my experiment is statistically significant?
			p We use the industry-standard ANOVA test. If the F-statistic of the ANOVA test has an associated p-value of less than 0.1, we report that the experiment is statistically significant.

			h5 Q: Can I do a three-way test (an A/B/C test)?
			p You can use any number of cohorts for your experiment, including running three way tests. Quick Split will determine whether there is any significant difference between the cohorts

</template>

<script>
export default {
	name: "SupportFaq"
}
</script>

<style lang="sass">
</style>
