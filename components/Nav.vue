<template>
  <v-navigation-drawer v-if="$auth.loggedIn" fixed app>
    <div>Будет допилен позже</div>
    <div>{{ auth }}</div>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      auth: JSON.stringify(this.$auth.user, null, 2),
    }
  },
}
</script>
