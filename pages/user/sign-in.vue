<template>
  <v-container>
    <div class="title">
      <h2>Для получения доступа к портфолио необходимо авторизоваться</h2>
    </div>
    <div class="form-container">
      <v-form ref="signin-form" class="form-container-fields">
        <v-text-field
          v-model="form.email"
          :rules="form.emailRules"
          type="email"
          label="Электронный адрес"
        />
        <v-text-field
          v-model="form.password"
          :rules="form.passwordRules"
          type="password"
          label="Пароль"
        />
        <v-btn large block color="primary" @click="signIn"> Войти </v-btn>
        <p class="text-center mt-4">
          <NuxtLink to="/user/sign-up">Зарегистрироваться</NuxtLink>
        </p>
      </v-form>
    </div>
  </v-container>
</template>

<script>
import { email, password } from '~/util/validation.js'
import { validationMessages } from '~/util/validationMessages.js'

export default {
  data() {
    return {
      form: {
        email: '',
        emailRules: [
          (v) => !!v || validationMessages.requiredFields,
          (v) => email.validateFormat(v) || validationMessages.emailNotValid,
        ],
        password: '',
        passwordRules: [
          (v) => !!v || validationMessages.requiredFields,
          (v) =>
            password.validateLength(v) || validationMessages.passwordLength,
        ],
      },
    }
  },
  methods: {
    async signIn() {
      const isValid = this.$refs['signin-form'].validate()
      if (!isValid) return

      try {
        this.form.email = this.form.email.toLowerCase()
        await this.$auth.loginWith('local', {
          data: this.form,
        })
      } catch (e) {
        console.error(e)
      }
    },
  },
}
</script>

<style scoped>
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
.form-container {
  margin: auto;
  max-width: 600px;
  border: 1px solid;
}
.form-container-fields {
  margin: 4%;
}
</style>
