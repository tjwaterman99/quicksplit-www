<template lang="pug">
.create-payment-method.pt-5
	.container
		.row
			.col
				h1.text-center Add payment method
		.row
			.col-md-4.offset-md-4
				form.payment-method
					.form-group
						#card-number
					.form-row
						.col
							#card-cvc
						.col
							#card-expiry
					.form-group.mt-3
						b-button(type="submit" variant="outline-primary" block) Add payment method
			.row.mt-2(v-if="errors")
				.col-md-4.offset-md-4
					b-alert(variant="danger" show).text-center {{ errors }}
</template>

<script>
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
			paymentSetupIntent: null
		}
	},
	methods: {
		handleAddPayment: function(event) {
			event.preventDefault()
			var that = this;
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
					console.log(result.error)
				} else {
					console.log("Success!")
					console.log(result)
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
