<template>
  <v-alert
    class="fixed alert-message mt-16"
    :value="visible"
    transition="slide-y-reverse-transition"
    dismissible
    outlined
    text
    :type="type"
  >
    {{ message }}
  </v-alert>
</template>

<script>
export default {
  name: 'Alert',
  computed: {
    visible() {
      return this.$store.state.alert.visible
    },
    type() {
      return this.$store.state.alert.type
    },
    message() {
      return this.$store.state.alert.message
    },
  },
}
</script>

<style>
.alert-message {
  width: 450px;
  bottom: 40px;
  left: calc(50% - 225px);
  z-index: 10;
}

@media screen and (max-width: 768px) {
  .alert-message {
    width: 85vw;
    left: 7.5vw;
  }
}
</style>
