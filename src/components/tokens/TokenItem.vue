<template lang="pug">
.token-item.d-flex
	span.private.mx-2 {{ formatPrivate(token) }}
	span.environment.mx-2.text-capitalize {{ token.environment }}
	span.value.mx-2.font-weight-bold.text-primary
		.span(:class="{blurred: isBlurred}") {{ token.value }}
	b-button(pill variant="outline-danger" size="sm" v-if="!showValue" @click="toggleShowValue").show-button Show
</template>

<script>
export default {
	name: "TokenItem",
	props: {
		token: Object
	},
	data: function() {
		return {
			showValue: !this.token.private
		}
	},
	computed: {
		isBlurred: function() {
			return !this.showValue
		}
	},
	methods: {
		formatPrivate: function(token) {
			if (token.private) {
				return "Private"
			} else {
				return "Public"
			}
		},
		toggleShowValue: function(event) {
			event.preventDefault()
			this.showValue = true
		}
	}
}
</script>

<style lang="sass" scoped=true>

.blurred
	color: transparent
	text-shadow: 0 0 8px rgba(0,0,0,0.95)

.private
	min-width: 5%

.environment
	min-width: 5%

</style>
