<template>
  <v-container>
    <div class="title">
      <h2>
        Привествую вас на своей странице портфолио, для продолжения необходимо
        зарегистрировать нового пользователя
      </h2>
    </div>
    <div class="form-container">
      <v-form ref="signup-form" class="form-container-fields">
        <v-text-field
          v-model="form.firstName"
          :rules="form.firstNameRules"
          label="Имя"
        />
        <v-text-field
          v-model="form.lastName"
          :rules="form.lastNameRules"
          label="Фамилия"
        />
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
