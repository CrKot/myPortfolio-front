<template>
  <v-container>
    <div class="title">
      <h2>Регистрация</h2>
    </div>
    <div class="form-container">
      <v-form ref="signup-form" class="form-container-fields">
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="form.firstName"
              :rules="form.firstNameRules"
              label="Имя"
          /></v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="form.lastName"
              :rules="form.lastNameRules"
              label="Фамилия"
          /></v-col>
        </v-row>
        <v-text-field
          v-model="form.phoneNumber"
          :rules="form.phoneNumberRules"
          type="phone"
          label="Номер телефона"
        />
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
        <v-btn large block color="primary" @click="signUp">
          Зарегистрироваться
        </v-btn>
        <p class="text-center mt-4">
          Уже зарегистрованы? <NuxtLink to="/user/sign-in">Войти</NuxtLink>
        </p>
      </v-form>
    </div>
  </v-container>
</template>

<script>
import { email, phoneNumber, name, password } from '~/util/validation.js'
import { validationMessages } from '~/util/validationMessages.js'

const backendUrl = process.env.BACKEND_URL
const API_BOT = process.env.API_BOT

export default {
  data() {
    return {
      form: {
        firstName: '',
        firstNameRules: [
          (v) => !!v || validationMessages.requiredFields,
          (v) => name.validateLength(v) || validationMessages.firstNameLength,
        ],
        lastName: '',
        lastNameRules: [
          (v) => !!v || validationMessages.requiredFields,
          (v) => name.validateLength(v) || validationMessages.lastNameLength,
        ],
        phoneNumber: '',
        phoneNumberRules: [
          (v) => !!v || validationMessages.requiredFields,
          (v) =>
            phoneNumber.validateFormat(v) || validationMessages.phoneNotValid,
        ],
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
    async signUp() {
      const isValid = this.$refs['signup-form'].validate()
      if (!isValid) return

      const signUpData = {
        email: this.form.email,
        phoneNumber: this.form.phoneNumber,
        firstName: this.form.firstName,
        lastName: this.form.lastName,
        password: this.form.password,
      }

      try {
        const { success } = await this.$axios.$post(
          `${backendUrl}/auth/sign-up`,
          signUpData
        )
        if (success) {
          // Сообщение в телеграмм о регистрации нового пользователя(временный код для сбора статистики)
          try {
            const message = encodeURI(
            `Зарегистрирован новый пользователь ${this.form.firstName} ${this.form.lastName}`
          )
            await this.$axios.$get(
              `https://api.telegram.org/${API_BOT}/sendMessage?disable_web_page_preview=false&chat_id=-1001201171209&text=${message}`
            )
          } catch {
            console.error('не отправлено')
          }
          this.$router.push('/user/sign-in')
        }
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
