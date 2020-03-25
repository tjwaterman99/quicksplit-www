<template lang="pug">
.create-payment-method.pt-5
	.container
		.row
			.col
				h1.text-center Add payment method
		.row
			.col-md-4.offset-md-4
				form.payment-method(@submit="handleAddPayment")
					.form-group
						#card-number
					.form-row
						.col
							#card-cvc
						.col
							#card-expiry
					.form-group.mt-3
						b-button(type="submit" variant="outline-primary" block)
							span(v-if="!this.submitted") Add payment method
							b-spinner(v-else)
		.row.mt-2(v-if="error")
			.col-md-4.offset-md-4
				b-alert(variant="danger" show).text-center {{ error }}
</template>

<script>
const { PollUntil } = require('poll-until-promise');

// eslint-disable-next-line no-undef
var stripe = new Stripe(process.env.VUE_APP_STRIPE_PUBLIC_KEY)
var elements = stripe.elements()
var cardExpiryElement = elements.create('cardExpiry');
var cardCvcElement = elements.create('cardCvc');
var cardNumberElement = elements.create('cardNumber');

export default {
	name: "Payments",
	data: function() {
		return {
			cardNumberComplete: false,
			cardExpiryComplete: false,
			cardCvcComplete: false,
			paymentSetupIntent: null,
			setupIntent: null,
			error: null,
			submitted: false
		}
	},
	methods: {
		handleAddPayment: function(event) {
			event.preventDefault();
			var that = this;
			that.submitted = true;
			stripe.confirmCardSetup(
				that.paymentSetupIntent.client_secret,
				{
					payment_method: {
						type: 'card',
						card: cardNumberElement,
						billing_details: {
							email: that.$root.user.email
						}
					}
				}
			).then(function(result) {
				if (result.error) {
					that.error = result.error.message
					that.submitted = false
				} else {
					that.setupIntent = result.setupIntent
					var payment_method_id = result.setupIntent.payment_method
					var poll = new PollUntil()
					var matched = false
					poll
						.stopAfter(15 * 1000)
						.tryEvery(1000)
						.execute(function () {
							console.log(`Polling server for payment_method_id: ${payment_method_id}`)

							that.$api.get('/user').then( resp => {
								resp.received_at = new Date()
								console.log("Got response: ", resp)
								for (let payment_method of resp.data.data.account.payment_methods) {
									console.log(`Comparing ${payment_method.stripe_payment_method_id} to ${payment_method_id}`)
									if (payment_method.stripe_payment_method_id == payment_method_id) {
										console.log("Got a match", payment_method.stripe_payment_method_id, payment_method_id)
										console.log("Updating matched")
										matched = true
										console.log("match is now", matched)
									} else {
										console.log("Not a match", payment_method.stripe_payment_method_id, payment_method_id)
										console.log("match is now", matched)
									}
								}
							}).catch( () => {})
							console.log("Returning matched: ", matched)
							return matched
						}
					).then(value => {
							console.log("success!", value)
							that.$root.$bvToast.toast(`Added a new payment method to your account. You can now use that payment method to upgrade.`, {
								title: `Added payment method`,
								variant: "success"
							})
							that.$root.loadUser().then( (resp) => {
								that.$root.user = resp.data.data
								console.log("Payment method thinks user is: ", that.$root.user)
								that.$router.push('/dashboard/account')
							})
						})
						.catch(err => console.log("Error was:", err))
					}
				})
		}
	},
	created: function() {
		var that = this
		this.$api.get('/account/payment-setup').then(function(resp) {
			that.paymentSetupIntent = resp.data.data
		}).catch(function(error) {
			console.log(error)
		})
	},
	mounted: function() {
		var that = this;
		cardNumberElement.on('change', function(event) {
			that.cardNumberComplete = event.complete
		});
		cardExpiryElement.on('change', function(event) {
			that.cardExpiryComplete = event.complete
		})
		cardCvcElement.on('change', function(event) {
			that.cardCvcComplete = event.complete
		})
		cardNumberElement.mount("#card-number");
		cardExpiryElement.mount("#card-expiry");
		cardCvcElement.mount("#card-cvc");
	}
}
</script>

<style lang="scss" scoped=true>
@import "@/assets/variables";

.payment-method {
	padding-top: 3em;
}

.StripeElement {
	border: 1px solid $gray-200 !important;
	padding: 0.5em;
	font-size: 1em !important;
	border-radius: 0.2em;
	background-color: white
}
.submit {
	margin-top: 1em;
}
</style>
