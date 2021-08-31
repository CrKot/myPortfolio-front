<template>
  <v-container>
    <div v-if="!$auth.loggedIn">
      <div class="title">
        <h2>
          Привествую вас на своей странице портфолио, данный проект создан для
          ознакомления с моим кодом и стэкем технологий. Со временем проект
          будет дополняться контентом, здесь я попытаюсь сложить в кучу весь
          свой имеющийся и будущий код
        </h2>
      </div>
      <v-div class="content">
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
      </v-div>
    </div>
    <div v-else>Решить что добавить</div>
  </v-container>
</template>

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
