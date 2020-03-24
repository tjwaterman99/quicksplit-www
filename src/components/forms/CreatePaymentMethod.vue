<template lang="pug">
.container
  .row
    .col-lg-4.offset-lg-4.text-center
      h1 Add a payment

      .credit-card-inputs
        .mb-2.border.stripe-element.card-number(ref='cardNumber', :stripe='stripe', :options='options', @change='number = $event.complete')
        .mb-2.border.stripe-element.card-expiry(ref='cardExpiry', :stripe='stripe', :options='options', @change='expiry = $event.complete')
        .mb-2.border.stripe-element.card-cvc(ref='cardCvc', :stripe='stripe', :options='options', @change='cvc = $event.complete')
</template>

<script>
// Previous version:
// https://github.com/tjwaterman99/quicksplit-api/blob/5b82b3e072f31ad1be4c3e7f860f39395ca26591/www/src/components/pages/Payments.vue

// It looks like the stripe elements will automatically bind to elements
// based on their id. So we need something like div#card-cvc for the stripe
// element to bind to. 
//
// eslint-disable-next-line no-undef
var stripe = new Stripe(process.env.VUE_APP_STRIPE_PUBLIC_KEY)
var elements = stripe.elements()
// var cardExpiryElement = elements.create('cardExpiry');
// var cardCvcElement = elements.create('cardCvc');
var cardNumberElement = elements.create('cardNumber');

export default {
  props: ['options' ],
  name: "CreatePaymentMethod",
  data () {
    return {
      complete: false,
      number: false,
      expiry: false,
      cvc: false,
      stripe: stripe,
      paymentSetupIntent: undefined
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
							email: that.$api.user.email
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
  watch: {},
	created: function() {
		var that = this
		this.$api.get('/account/payment-setup').then(function(resp) {
			that.paymentSetupIntent = resp.data.data
		}).catch(function(error) {
			console.log(error)
		})
	}

}
</script>

<style>
.credit-card-inputs.complete {
  border: 2px solid green;
}
</style>

<!--
<script>
var stripe = new Stripe('pk_test_vs6w4emCv9szUa8mJyeXKTey00IV5800C2');
var elements = stripe.elements()
var cardExpiryElement = elements.create('cardExpiry');
var cardCvcElement = elements.create('cardCvc');
var cardNumberElement = elements.create('cardNumber');

export default {
	name: "CreatePaymentMethod",
	data: function() {
		return {
			cardNumberComplete: false,
			cardExpiryComplete: false,
			cardCvcComplete: false,
			paymentSetupIntent: null
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
.payment-method {
	padding-top: 3em;
}

.StripeElement {
	border: 1px solid black;
	padding: 0.5em;
	font-size: 1em !important;
	border-radius: 0.5em;
}

.submit {
	margin-top: 1em;
}
</style> -->
