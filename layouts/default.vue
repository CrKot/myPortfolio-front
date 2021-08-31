<template>
  <v-app>
    <Nav />
    <App-bar />
    <v-main>
      <Nuxt />
      <Alert />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Alert from '~/components/Alert.vue'
export default {
  components: {
    Alert,
  },
}
</script>
