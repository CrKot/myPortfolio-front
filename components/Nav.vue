<template>
  <v-navigation-drawer v-if="$auth.loggedIn" v-model="drawer" fixed app>
    <v-list>
      <v-list-item>
        <div>Будет допилен позже</div>
      </v-list-item>
      <v-list-item>
        <div>{{ auth }}</div>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      auth: JSON.stringify(this.$auth.user, null, 2),
    }
  },
  computed: {
    drawer: {
      get() {
        return this.$store.state.navigationDrawer.drawer
      },
      set(value) {
        return value
      },
    },
  },
}
</script>
