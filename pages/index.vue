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
          как специалисту. Заранее спасибо!
        </h3>
        <div class="mb-10" />
        <p>Для продолжения вам необходимо зарегистрироваться или войти</p>
        <div class="btn-group">
          <NuxtLink to="user/sign-up"
            ><v-btn color="primary" class="btn">Регистрация</v-btn></NuxtLink
          >
          <NuxtLink to="user/sign-in"
            ><v-btn color="primary" class="btn">Войти</v-btn></NuxtLink
          >
        </div>
      </div>
    </div>
    <div v-else>
      <v-row>
        <v-col cols="9">
          <p>
            Приветствую вас на моей стрнице, меня зовут Артем мне
            {{ calculateAge() }} лет, за свою жизнь я работал в разных местах,
            от слесаря на авто разборе до предпринимателя с сетью to go coffe и
            бутиков с одеждой в ТЦ. В конце 2019 года, я понял что все-таки пора
            начать изучать программирование, знакомый мне посоветовал онлайн
            школу Hexlet и сказал что это самые адекватные курсы(не соврал), в
            течении года я изучал JavaScript на данной ресурсе.
          </p>
        </v-col>
        <v-col cols="3">
          <v-img :src="'/img/coffee.jpg'" />
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    }
  },
  methods: {
    calculateAge() {
      const birthMonth = 1
      const birthDay = 12
      const birthYaer = 1991
      const todayDate = new Date()
      const todayYear = todayDate.getFullYear()
      const todayMonth = todayDate.getMonth()
      const todayDay = todayDate.getDate()
      let age = todayYear - birthYaer
      if (todayMonth < birthMonth - 1) {
        age -= 1
      }
      if (birthMonth - 1 === todayMonth && todayDay < birthDay) {
        age -= 1
      }
      return age
    },
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
  }
}
.title {
  margin-bottom: 6%;
}
</style>
