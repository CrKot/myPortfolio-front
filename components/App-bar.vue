<template>
  <v-app-bar app fixed elevation="0">
    <div>Portfolio Artem_Krv</div>
    <v-spacer />
    <v-switch color="white" :label="theme" @click="changeTheme()"></v-switch>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      theme: 'Ночная тема',
    }
  },
  methods: {
    changeTheme() {
      if (this.$vuetify.theme.dark) {
        this.theme = 'Ночная тема'
      } else {
        this.theme = 'Дневная тема'
      }
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    },
  },
}
</script>
