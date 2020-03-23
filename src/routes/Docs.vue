<template lang="pug">
article
	h1 Getting started
	p This document explains how to create an A/B test on your application using Quick Split. It assumes you're able to implement code inside your application, and that you have have already deployed your application to end users.
	p To get started, you'll need to <a href="https://www.quicksplit.io/register">register an account with Quick Split</a>. Your account will provide API tokens that are necessary to authenticate your application with Quick Split's web service, and we'll be using those tokens throughout this  tutorial.
	b-alert(show variant="info") <strong>Note:</strong> The documentation is best viewed after you're logged in. We'll automatically provide personalized commands for you to run, including inserting the relevant API tokens for you.
	h4 Table of Contents
	p The tutorial is comprised of five topics that walk you through creating an experiment on your application. By the time you've completed each section, you'll have set up a live, running experiment on your application.
	ul
		li <strong>How Quick Split works</strong>: the fundamental concepts associated with running experiments on an application. This section is most helpful if you're running your first experiment on your product.
		li <strong>API tokens and authentication</strong>: using your API tokens to authenticate your application with Quick Split's web service
		li <strong>Creating an experiment</strong>: how to start, stop, and configure an experiment
		li <strong>Logging your experiment's data</strong>: sending events to Quick Split when your application's users are exposed to your experiment
		li <strong>Viewing the results of your experiment</strong>: how to interpret and  share the results of your experiment
	h4 CLI installation (optional)
	p For convenience, we recommend installing Quick Split's command line interface (CLI) while you're developing.
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

</template>

<script>
export default {
	name: 'Docs'
}

</script>

<style lang="sass" scoped=true>
</style>
