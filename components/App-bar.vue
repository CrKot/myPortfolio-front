<template>
  <v-app-bar app fixed elevation="0">
    <v-app-bar-nav-icon v-if="$auth.loggedIn" @click="drawer = !drawer" />
    <div class="header">
      <span>Проект-портфолио. Kонтакты email: ArtemSalikhov@mail.ru</span>
      <SendMessageDialog />
    </div>
    <v-spacer />
    <div>
      <small>
        {{ theme }}
      </small>
      <div>
        <v-switch
          class="mt-auto"
          color="white"
          @click="changeTheme()"
        ></v-switch>
      </div>
    </div>
    <v-divider class="mr-4 ml-4" vertical inset />
    <v-menu v-if="$auth.loggedIn">
      <template #activator="{ on, attrs }">
        <v-btn small plain v-bind="attrs" v-on="on">Профиль</v-btn>
      </template>
      <v-list dense>
        <v-list-item-group>
          <v-list-item>
            <NuxtLink to="/">
              <v-btn x-small plain>Главная</v-btn>
            </NuxtLink>
          </v-list-item>
          <v-list-item>
            <NuxtLink to="/user/editingProfile">
              <v-btn x-small plain>Редактировать</v-btn>
            </NuxtLink>
          </v-list-item>
          <v-divider />
          <v-list-item>
            <v-btn block color="primary" @click="$auth.logout()">Выйти</v-btn>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-menu>
    <NuxtLink v-else to="/user/sign-in">
      <v-btn small plain>Войти</v-btn>
    </NuxtLink>
  </v-app-bar>
</template>

<script>
import SendMessageDialog from '~/components/FormSendMessage.vue'

export default {
  components: {
    SendMessageDialog
  },
  data() {
    return {
      theme: 'Ночная тема',
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

<style scoped>
@media screen and (max-width: 900px) {
  .header {
    line-height: 1em;
  }
  span {
    font-size: 80%;
  }
}
</style>
