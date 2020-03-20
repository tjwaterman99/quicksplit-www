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
						b-form-input(type="email" v-model="form.email" required placeholder="Email")
					b-form-group(id="password")
						b-form-input(type="password" v-model="form.password" required placeholder="Password")
					b-btn(type="submit" variant="outline-primary" block) Log in
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
			errors: null
		}
	},
	methods: {
		logIn: function(event) {
			event.preventDefault()
			var that = this
			this.$api.post('/sessions', {
				email: this.form.email,
				password: this.form.password
			}).then( (resp) => {
				this.$root.user = resp.data.data.user
				that.$router.push('/')
			}).catch( (error) => {
				that.errors = error.response.data.message
			})
		}
	}
}

</script>

<style lang="sass">
</style>
