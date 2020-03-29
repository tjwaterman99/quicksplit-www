<template lang="pug">
.login.pt-5
	.container
		.row
			.col
				h1.text-center Create your account
		.row.mt-5
			.col-md-4.offset-md-4
				register-form(cta="Create account")

</template>

<script>
import RegisterForm from '@/components/forms/Register'

export default {
	name: "Register",
	components: {
		'register-form': RegisterForm
	}
}

</script>

<style lang="sass">
</style>
