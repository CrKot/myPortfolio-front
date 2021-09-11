<template>
  <v-container fluid>
    <div v-if="!$auth.loggedIn">
      <div class="title">
        <h2>
          Привествую вас на своей странице портфолио, данный проект создан для
          ознакомления с моим кодом и стэкем технологий. Со временем проект
          будет дополняться контентом, здесь я попытаюсь сложить в кучу весь
          свой имеющийся и будущий код
        </h2>
      </div>
      <div class="content">
        <h3>
          Буду рад любому фидбэку с вашей стороны, это помогает мне развиваться
          как специалисту. Заранее спасибо! <br />
          p.s Вы можете отправить мне любое сообщение через телеграм бота по
          кнопке <span style="color: #0000ff">"Отправьте мне сообщение"</span> в
          шапке блога
        </h3>
        <div class="mb-10" />
        <p>
          Для продолжения вам необходимо зарегистрироваться(произвольные данные)
          или войти
        </p>
        <div class="btn-group">
          <NuxtLink to="user/sign-up"
            ><v-btn color="blue darken-1 btn" text>Регистрация</v-btn></NuxtLink
          >
          <NuxtLink to="user/sign-in"
            ><v-btn color="blue darken-1 btn" text>Войти</v-btn></NuxtLink
          >
        </div>
      </div>
    </div>
    <div v-else>
      <v-row>
        <v-col cols="12" md="9">
          <v-timeline :dense="$vuetify.breakpoint.smAndDown">
            <v-timeline-item v-for="(post, index) in myBiography" :key="index">
              <span slot="opposite">{{ post.date }}</span>
              <v-card class="elevation-2">
                <v-card-title class="text-h5">{{ post.title }}</v-card-title>
                <v-card-text>
                  {{ post.text }}
                </v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-col>
        <v-col cols="3">
          <v-img class="img mb-4" :src="'/img/coffee.jpg'" />
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import biography from '@/util/myBiography.ts'

export default {
  data() {
    return {
      myBiography: biography,
      show: false,
    }
  },
  methods: {
    test() {
      window.location.href = 'https://github.com/CrKot/admin-panel'
    },
  },
}
</script>

<style scoped>
.btn-group {
  margin-top: 3%;
}
.btn {
  margin-left: 1%;
  margin-right: 1%;
}
.content {
  text-align: center;
}
h2 {
  text-align: center;
}
@media screen and (max-width: 900px) {
  h2 {
    font-size: 90%;
    line-height: 1.3em;
  }
  h3 {
    font-size: 90%;
    line-height: 1.4em;
  }
  span {
    font-size: 95%;
    line-height: 1.4em;
  }
}
.title {
  margin-bottom: 6%;
}
</style>
