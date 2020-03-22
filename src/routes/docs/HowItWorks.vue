<template lang="pug">
article
  h1 How it works

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
  p Thanks!
</template>

<script>
export default {
  name: "DocsHowItWorks"
}
</script>

<style scoped=true lang="sass">
</style>
