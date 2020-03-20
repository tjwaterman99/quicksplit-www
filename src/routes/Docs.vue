<template lang="pug">
.dashboard-content
	h1 Getting started
	p This document explains how to create an A/B test on your product using quicksplit. It assumes you're able to implement code inside your product, although it also provides helpful context for non-developers.
	p To get started, you'll need to create an account if you haven't already done so. Your account will provide API tokens that are necessary to authenticate with the web service.
	b-alert(show variant="info") <strong>Note:</strong> The documentation is best viewed after you're logged in. We'll automatically provide personalized commands for you to run, including inserting the relevant API tokens for you.

	h3 CLI installation (optional)
	p For convenience, we recommend installing Quick Split's command line interface (CLI). While the CLI is not necessary, it can make development more convenient. We'll show examples of all the commands using Javascript, Python, and the CLI.
	p To install the CLI, you need Python 3.7+ and <code>pip</code> installed.
	pre
		| $ pip3 install --user quicksplit
	p Log in with the CLI using the <code>login</code> command.
	pre
		| $ quicksplit login
	p You'll be prompted for your email and password.
	p To see a full list of available commands, use the <code>--help</code> flag.
	pre
		| $ quicksplit --help
	h3 Retrieving your API tokens
	h3 Creating an experiment
	//- topics: tokens, activating an experiment,
	//- staging vs production environment, public vs private
	//- tokens
</template>

<script>
export default {
	name: 'Docs'
}

</script>

<style lang="sass" scoped=true>
</style>
