<template>
  <v-navigation-drawer v-if="$auth.loggedIn" v-model="drawer" fixed app>
    <v-img :src="'/img/myFoto1.jpg'" />
    <v-list>
      <v-list-item>
        <v-list-item-action>
          <v-icon>mdi-signal</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="'Навигация по блогу'" />
        </v-list-item-content>
      </v-list-item>
      <v-list-item
        v-for="(page, i) in pages"
        :key="i"
        color="blue"
        :to="page.to"
        exact
        router
      >
        <v-list-item-content class="nav-content" >
          <v-list-item-title v-text="page.title" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      pages: [
        {
          title: 'Обо мне',
          to: '/',
        },
        {
          title: 'Мои проекты',
          to: '/projects',
        },
      ],
    }
  },
  computed: {
    drawer: {
      get() {
        return this.$store.state.navigationDrawer.drawer
      },
      set(value) {
        this.$store.dispatch('navigationDrawer/toggleDrawer', value)
      },
    },
  },
}
</script>
<style scoped>
.nav-content:hover {
  transition: 2s;
  color: blue;
}
</style>
