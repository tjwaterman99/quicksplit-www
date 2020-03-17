<template lang="pug">
.home
	b-jumbotron(fluid=true, bg-variant="light")
		template(v-slot:header)
			span.text-dark Drive your product
		template(v-slot:lead) Quick Split is the fastest, easiest way to run A/B tests on any of your products. You can A/B test a new feature in as little as 3 lines of code, without needing a data scientist.
		.row
			.col-sm-12.col-md-3.mb-2
				b-btn(variant="primary" block) Create an experiment
			.col-sm-12.col-md-3
				b-btn(variant="outline-primary" block) Read the docs
	.container-fluid.bg-light.section
		.container
			.row
				.col-lg-6.offset-lg-3
					h2.text-center How It Works
					p.text-center.text-secondary.mb-4 Quick Split is built on a resource-based, restful web API. If your application can log data, you can run a rigorous, statistically valid A/B test with just two web requests.
			.row.mb-4.mb-n4
				.col-md-4
					how-it-works-item(header="Log when a user sees your A/B test", :imageSource="exposures_image")
				.col-md-4
					how-it-works-item(header="Log when they convert", :imageSource="conversions_image")
				.col-md-4
					how-it-works-item(header="Get results via dashboard or API", :imageSource="get_results")

	.container-fluid.bg-light.section
		.container
			.row
				.col-lg-6.offset-lg-3
					h2.text-center Your data scientist will love you
		.container.mt-2
			.row
				.col-lg-8.offset-lg-2
					.testimonial
						.row
							.col-md-6
								p it was great!
							.col-md-6.text-center
								p really great!
		round-top.shape

	.container-fluid.bg-primary.section
		.row
			.col-lg-6.offset-lg-3
				h2.text-center.text-light Built for IC's. Scales for teams


</template>

<script>

import exposures_image from "@/assets/images/how-it-works/log-exposures.png"
import conversions_image from "@/assets/images/how-it-works/log-conversions.png"
import get_results from "@/assets/images/how-it-works/get-results.png"
import RoundTop from '@/components/svg/round-top.svg'

export default {
	name: "Home",
	components: {
		"round-top": RoundTop
	},
	data: function() {
		return {
			exposures_image: exposures_image,
			conversions_image: conversions_image,
			get_results: get_results
		}
	}
}
</script>

<style lang="sass">

@import "@/assets/variables"

.section
	padding-top: 5em

.testimonial
	border-radius: 0.5em
	box-shadow: 0.25em 0.25em 1em
	background-color: $light
	height: 20em
	width: fill

.shape
	color: $primary
	margin-top: -15em
</style>
