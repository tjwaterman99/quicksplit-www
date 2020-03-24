<template lang="pug">
.container
  .row
    .col-lg-4.offset-lg-4.text-center
      h1 Add a payment

      .credit-card-inputs
        card-number.mb-2.border.stripe-element.card-number(ref='cardNumber', :stripe='stripe', :options='options', @change='number = $event.complete')
        card-expiry.mb-2.border.stripe-element.card-expiry(ref='cardExpiry', :stripe='stripe', :options='options', @change='expiry = $event.complete')
        card-cvc.mb-2.border.stripe-element.card-cvc(ref='cardCvc', :stripe='stripe', :options='options', @change='cvc = $event.complete')
</template>

<script>
import { CardNumber, CardExpiry, CardCvc } from 'vue-stripe-elements-plus'

// eslint-disable-next-line no-undef
console.log(Stripe)

// eslint-disable-next-line no-undef
var stripe = new Stripe(process.env.VUE_APP_STRIPE_PUBLIC_KEY)

export default {
  props: ['options' ],
  name: "CreatePaymentMethod",
  data () {
    return {
      complete: false,
      number: false,
      expiry: false,
      cvc: false,
      stripe: stripe
    }
  },
  components: { CardNumber, CardExpiry, CardCvc },
  methods: {
    update () {
      this.complete = this.number && this.expiry && this.cvc

      // field completed, find field to focus next
      if (this.number) {
        if (!this.expiry) {
          this.$refs.cardExpiry.focus()
        } else if (!this.cvc) {
          this.$refs.cardCvc.focus()
        }
      } else if (this.expiry) {
        if (!this.cvc) {
          this.$refs.cardCvc.focus()
        } else if (!this.number) {
          this.$refs.cardNumber.focus()
        }
      }
      // no focus magic for the CVC field as it gets complete with three
      // numbers, but can also have four
    }
  },
  watch: {
    number () { this.update() },
    expiry () { this.update() },
    cvc () { this.update() }
  }
}
</script>

<style>
.credit-card-inputs.complete {
  border: 2px solid green;
}
</style>

<!-- <template>
	<div>
		<Header>Add credit card</Header>
	<div class="container">
		<div class="row">
			<div class="col-lg-6 offset-lg-3">
			<form class="payment-method">
				<div class="form-group">
					<div id="card-number" ></div>
				</div>
				<div class="form-row">
					<div class="col">
						<div id="card-cvc"></div>
					</div>
					<div class="col">
						<div id="card-expiry"></div>
					</div>
				</div>
				<div class="form-group">
					<button type="submit" class="btn btn-primary btn-block submit" @click="handleAddPayment">Add credit card</button>
				</div>
			</form>
			</div>
		</div>
	</div>
	</div>
</template>

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
