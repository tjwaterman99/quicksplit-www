<template lang="pug">
.login.pt-5
	.container
		.row
			.col
				h1.text-center Log In
		.row.mt-5
			.col-md-4.offset-md-4
				b-form(@submit="logIn")
					b-form-group(id="email")
						b-form-input(type="email" v-model="form.email" autofocus required placeholder="Email")
					b-form-group(id="password")
						b-form-input(type="password" v-model="form.password" required placeholder="Password")
					b-btn(type="submit" variant="outline-primary" block)
						span(v-if="!this.submitted") Log in
						b-spinner(v-else)
		.row.mt-2(v-if="errors")
			.col-md-4.offset-md-4
				b-alert(variant="danger" show).text-center {{ errors }}
</template>

<script>
export default {
	name: "LogIn",
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
		logIn: function(event) {
			event.preventDefault()
			this.submitted = true
			var that = this
			this.$api.post('/sessions', {
				email: this.form.email,
				password: this.form.password
			}).then( (resp) => {
				this.$root.user = resp.data.data.user
				that.$router.push('/dashboard')
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
