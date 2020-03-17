<template lang="pug">
footer
  .container-fluid
    .row
      .col
        ul
          li test
          li test2
      .col
        ul
          li test3
          li test4
</template>

<script>
export default {
  name: "Foot"
}
</script>

<style lang="sass" scoped=true>
@import "@/assets/variables.scss"

footer
  background-color:  $dark

  ul
    margin-bottom: 0px
</style>
