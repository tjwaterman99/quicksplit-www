<template lang="pug">
.container-fluid.pt-4
	.row
		.col-lg-10.offset-lg-1
			h1.text-center Frequently asked questions
	.row.mt-5
		.col-lg-6.offset-lg-3
			h5 Q: What sample sizes can I use for a single experiment?
			p  You can log up to 3000 subjects in a single experiment. In typical situations, that's a large enough sample size to detect ~1% differences in conversion rates.

			h5 Q: Can I run multiple experiments at the same time?
			p You can run up to three concurrent experiments on a single account. To stop an existing experiment, use the command quicksplit stop. To restart an experiment, use the command quicksplit start.

			h5 Q: Can I do a three-way test (an A/B/C test)?
			p You can use any number of cohorts for your experiment, including running three way tests.

			h5 Q: How do you calculate whether my experiment is statistically significant?
			p We use the industry-standard methodology called an ANOVA test. If the F-statistic of the ANOVA test has an associated p-value of less than 0.1, we conclude that the test is significant.
</template>

<script>
export default {
	name: "SupportFaq"
}
</script>

<style lang="sass">
</style>
