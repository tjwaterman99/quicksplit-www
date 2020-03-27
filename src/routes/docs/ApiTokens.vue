<template lang="pug">
article
  h1 API authentication
  p Creating experiments and logging their events requires using your account's API tokens. Your tokens can be found on your dashboard's <a href="https://www.quicksplit.io/dashboard/account">account page</a>.
  h4 Types of tokens
  p Your account has four tokens: public and private tokens, both of which have a staging and production version.
  p Private tokens provide full access to your account, and should never be shared publicly. Public tokens can only be used for logging data, so they can be distributed inside your client side applications, including javacsript web apps, native apps, browsers extensions, etc.
  p Staging tokens ensure that the data you log when using those tokens is stored separately from data that is logged when using production tokens. You should use staging tokens in your development environment, while production tokens should be used in instances of your app that are distributed to end-users.
</template>

<script>
export default {
  name: "DocsApiTokens"
}
</script>

<style scoped=true lang="sass">
</style>
