<template lang="pug">
.home
	.container
		.marquee
			.row
				.col-md-6.mb-4
					h1.text-dark Drive your product
					h5.mb-4 Quick Split is the fastest, easiest way to run A/B tests on any of your products. You can A/B test a new feature in as little as 3 lines of code, without needing a data scientist.
				.col-md-4.offset-md-1.mt-2
					register-form(cta="Get started")

	.container-fluid.bg-light.section.how-it-works
		.container
			.row
				.col-lg-6.offset-lg-3
					h2.text-center How It Works
					p.text-center.text-secondary.mb-4 Quick Split is built on a resource-based, restful web API. If your application can log data, you can run a rigorous, statistically valid A/B test with just two web requests.
			.row
				.col-md-4
					how-it-works-item(header="Log when a user sees your A/B test", :imageSource="exposures_image")
				.col-md-4
					how-it-works-item(header="Log when they convert", :imageSource="conversions_image")
				.col-md-4
					how-it-works-item(header="Get results via dashboard or API", :imageSource="get_results")

	.container-fluid.bg-light.section.testimonial(v-if="false")
		.container
			.row
				.col-lg-6.offset-lg-3
					h2.text-center Your data scientist will thank you
		.container
			.row
				.col-lg-8.offset-lg-2
					.row.justify-content-center.text-center
							.testimonial-portrait.border.rounded-circle.mt-2
							.container
								blockquote.blockquote.text-center
									p.lead.text-secondary I used to spend hours helping product teams run A/B tests, but now Quick Split automates all the tedious work. No more data pipelines needed.
									footer.blockquote-footer Tom Waterman, Data Scientist @ Facebook

	.container-fluid.bg-light.section.pricing
		.row
			.col-lg-6.offset-lg-3
				h2.text-center.text-dark Built for IC's. Scales for teams
		.row
			.col-lg-6.offset-lg-3
				plan-collection

	.container-fluid.bg-light.section.call-to-action.pb-4
		.row
			.col-lg-8.offset-lg-2.text-center
				h2 Get started for free
				.container
					.row
						.col-sm-12.col-md-3.offset-md-3.mb-2
							b-btn(variant="primary" block to="/create/experiment") Create an experiment
						.col-sm-12.col-md-3.mb-2
							b-btn(variant="outline-primary" block to="/docs") Read the docs

</template>

<script>

import exposures_image from "@/assets/images/how-it-works/log-exposures.png"
import conversions_image from "@/assets/images/how-it-works/log-conversions.png"
import get_results from "@/assets/images/how-it-works/get-results.png"
import RoundTop from '@/components/svg/round-top.svg'
import PlanCollection from '@/components/pricing/PlanCollection'
import RegisterForm from '@/components/forms/Register'


export default {
	name: "Home",
	components: {
		"round-top": RoundTop,
		"plan-collection": PlanCollection,
    "register-form": RegisterForm
	},
	data: function() {
		return {
			exposures_image: exposures_image,
			conversions_image: conversions_image,
			get_results: get_results
		}
	},
	computed: {
		ctaLink: function() {
			if (this.$root.loggedIn) {
				return '/create/experiment'
			} else {
				return '/register'
			}
		}
	},
  created: function() {
    this.$gtag.event('conversion', {send_to:  'AW-861254232/FQ-WCN_0gcYBENjk1poD'})
  }
}
</script>

<style lang="sass">

@import "@/assets/variables"

.section
	padding-top: 3em
	padding-bottom: 3em

.testimonial
	.testimonial-portrait
		height: 10em
		width: 10em
		background-image: url("../assets/images/photo-tom-waterman.png")
		background-size: cover
		box-shadow: 0.2em 0.1em 0.5em

.marquee
	margin-top: 2em
	padding-top: 2em
	padding-bottom: 2em
	height: 100%
	width: 100%

.marquee-image img
	max-width: 100%


</style>
