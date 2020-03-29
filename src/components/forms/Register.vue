<template lang="pug">
.register-form
  .row
    .col
      b-form(@submit="register")
        b-form-group(id="email")
          b-form-input(type="email" v-model="form.email" required autofocus placeholder="Email")
        b-form-group(id="password")
          b-form-input(type="password" v-model="form.password" required placeholder="Password")
        b-btn(type="submit" variant="outline-primary" block)
          span(v-if="!this.submitted") {{ cta }}
          b-spinner(v-else)
  .row.mt-2(v-if="errors")
    .col
      b-alert(variant="danger" show).text-center {{ errors }}
</template>

<script>
export default {
	name: "RegisterForm",
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
  props: {
    cta: String
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
				that.$router.push('/dashboard')
			}).catch( (error) => {
				that.submitted = false
				that.errors = error.response.data.message
			})
		}
	}
}
</script>
