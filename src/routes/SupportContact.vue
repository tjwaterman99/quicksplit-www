<template lang="pug">
.container.pt-4
	.row
		.col-lg-6.offset-lg-3
			h1.text-center Contact us
			h3.text-center Use the form below to send us a message. We usually reply in 1 business day.
	.row.mt-4
		.col-lg-6.offset-lg-3
			b-form(@submit="submit")
				b-form-group(id="email" label="Email address:" label-for="email-input")
					b-form-input(id="email-input" type="email" required v-model="email")
				b-form-group(id="subject" label="Subject:" label-for="subject-input")
					b-form-input(id="subject-input" type="text" required v-model="subject")
				b-form-group(id="message" label="Message:" label-for="message-input")
					b-form-textarea(id="message-input" type="textbox" required rows=4 v-model="message")
				b-button(type="submit" block variant="primary")
					span(v-if="!this.submitted") Create
					b-spinner(v-else)
			div(v-for="error in errors").mt-2
				b-alert(variant="danger" show) {{ error.message }}
</template>

<script>
export default {
	name: "SupportContact",
	data: function() {
		return {
			email:  this.loadEmail(),
			subject: "",
			message: "",
			errors: [],
			submitted: false
		}
	},
	methods: {
		"submit": function(event) {
				event.preventDefault()
				this.submitted = true;
				var that = this;
				this.$api.post('/contacts', {
					email: that.email,
					message: that.message,
					subject: that.subject
				}).then( () => {
          that.submitted =  false;
          that.$root.$bvToast.toast("Thanks for contacting Quick Split. We'll be in touch soon", {
            title: "Message sent.",
            variant: "info"
          })
          that.$router.push('/support')
				}).catch(err => {
					that.errors.push(err.response.data)
				})
		},
		"loadEmail": function() {
			if (this.$root.user) {
				return this.$root.user.email
			} else {
				return ""
			}
		}
	}
}
</script>

<style lang="sass">
li
	list-style: none
</style>
