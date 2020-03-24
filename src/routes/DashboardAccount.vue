<template lang="pug">
.dashboard-account
	h1 Account
	b-tabs(tabs v-if="$root.loggedIn")
		b-tab(title="Tokens" active)
			b-list-group
				b-list-group-item(v-for="token in $root.user.tokens" :key="token.id")
					token-item(:token="token")
			h4.pt-4 Using your tokens
			ul
				li <strong>Private tokens</strong> provide complete programmatic access to your account, and should <em>never</em> be shared publicly. They can be used for automating interactions with Quick Split, such as pulling reports each day and sharing them with your colleagues.
				li <strong>Public tokens</strong> provide only logging access, and can be published in any application, including client-side apps like a Javascript web app or a browser extension.
				li <strong>Staging tokens</strong> save your logging data in a separate staging environment, and should be used in your development environments. Using your staging tokens helps ensure that your production data is not polluted by data generated during the development or testing of your application.
				li <strong>Production tokens</strong> save your logging data to the production environment, and should be used only in instances of your application that are deployed to real users.

		b-tab(title="Contact")
			b-form.mt-4
				b-form-group(label="Email address")
					b-form-input(type="email" :placeholder="$root.user.email" disabled)

		b-tab(title="Billing")
			span.d-flex.my-2
				h4.flex-fill Payment methods
				b-button(variant="primary" to="/create/payment-method") Add payment method
			b-list-group
				b-list-group-item(v-for="payment_method in $root.user.account.payment_methods" :key="payment_method.id")
					p {{ payment_method }}

		b-tab(title="Status")
			div(v-if="status")
				b-list-group
					b-list-group-item.pt-4 Healthy: {{ this.status.healthy }}
					b-list-group-item.pt-4 Version: {{ this.status.version.version }}
					b-list-group-item.pt-4 Revision: {{ this.status.version.id }}


	b-spinner(v-else)
</template>

<script>
import TokenItem from '@/components/tokens/TokenItem.vue'

export default {
	name: "DashboardAccount",
	data: function() {
		return {
			status: {}
		}
	},
	components: {
		TokenItem: TokenItem
	},
	created: function() {
		var that = this;
		this.$api.get('/').then(resp => {
			that.status = resp.data.data
		})
	}
}
</script>

<style lang="sass">
</style>
