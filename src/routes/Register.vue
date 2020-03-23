<template lang="pug">
.login.pt-5
	.container
		.row
			.col
				h1.text-center Create your account
		.row.mt-5
			.col-md-4.offset-md-4
				b-form(@submit="register")
					b-form-group(id="email")
						b-form-input(type="email" v-model="form.email" required autofocus placeholder="Email")
					b-form-group(id="password")
						b-form-input(type="password" v-model="form.password" required placeholder="Password")
					b-btn(type="submit" variant="outline-primary" block)
						span(v-if="!this.submitted") Create account
						b-spinner(v-else)
		.row.mt-2(v-if="errors")
			.col-md-4.offset-md-4
				b-alert(variant="danger" show).text-center {{ errors }}
</template>

<script>
export default {
	name: "Register",
	data: function() {
		return {
			form: {
				email: null,
				password: null
			},
			errors: null,
			submitted: false
		}
	},
	methods: {
		register: function(event) {
			event.preventDefault()
			this.submitted = true
			var that = this
			this.$api.post('/user', {
				email: this.form.email,
				password: this.form.password
			}).then( (resp) => {
        this.$gtag.event('conversion', {send_to:  'AW-861254232/f6wNCL-oj8sBENjk1poD'})
				this.$root.user = resp.data.data
				that.$router.push('/')
			}).catch( (error) => {
				that.submitted = false
				that.errors = error.response.data.message
			})
		}
	}
}

</script>

<style lang="sass">
</style>
