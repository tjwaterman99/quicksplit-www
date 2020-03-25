<template lang="pug">
.dashboard-account
	b-alert(show v-if="$root.user.account.downgrade_at" variant="danger") Your account is scheduled to downgrade to the {{ $root.user.account.downgrade_plan.schedule_name }} {{ $root.user.account.downgrade_plan.name }} plan on {{ $root.user.account.downgrade_at }}. You'll continue to have full access to your plan's features until that date.
	.d-flex
		h1.flex-fill Account
		b-button(variant="primary" @click="$router.push('/pricing')").mt-3.mb-4 Change plan
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
			span.d-flex.mt-4
				h4.flex-fill Plan
			b-list-group.mb-4
				b-list-group-item.d-flex
					span.mr-2 <strong>{{ $root.user.account.plan.name }}</strong>
					span.flex-fill
						span(v-if="$root.user.account.plan.schedule") (billing {{ $root.user.account.plan.schedule.name }})
					span(v-if="$root.user.account.bill_at") Next bill {{ $root.user.account.bill_at }}
					span(v-else-if="$root.user.account.downgrade_at") Downgrading on {{ $root.user.account.downgrade_at }}
					span(v-else)
			span.d-flex.mb-2
				h4.flex-fill Payment methods
				b-button(variant="primary" to="/create/payment-method") Add payment method
			b-list-group
				b-list-group-item(v-for="payment_method in $root.user.account.payment_methods" :key="payment_method.id").d-flex
					span.flex-fill {{ payment_method.stripe_data.card.brand }} ending in {{ payment_method.stripe_data.card.last4 }}
					span Expires: {{ payment_method.stripe_data.card.exp_month }} / {{ payment_method.stripe_data.card.exp_year }}

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
			status: {
				health: undefined,
				version: {}
			}
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
