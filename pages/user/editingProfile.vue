<template>
  <v-container>
    <div class="text-center">
      <h2>Редактирование профиля</h2>
    </div>
    <v-expansion-panels class="user_panel">
      <v-expansion-panel>
        <v-expansion-panel-header>
          <span>Изменить имя и фамилию</span>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-form ref="info">
            <span>Имя</span>
            <v-text-field
              v-model="accountSettings.info.firstName"
              :rules="firstNameRules"
              :placeholder="accountSettings.info.firstName"
            />
            <span>Фамилия</span>
            <v-text-field
              v-model="accountSettings.info.lastName"
              :rules="lastNameRules"
              :placeholder="accountSettings.info.lastName"
            />
            <v-btn
              :disabled="
                accountSettings.info.lastName.length < 3 ||
                accountSettings.info.firstName.length < 3
              "
              color="primary"
              @click="updateUserInfo()"
            >
              Сохранить
            </v-btn>
          </v-form>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <span>Изменить телефон</span>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-form ref="phone">
            <v-text-field
              v-model="accountSettings.phone.phoneNumber"
              :rules="phoneRules"
              placeholder="Введите номер телефона"
            />
            <v-btn
              :disabled="accountSettings.phone.phoneNumber.length < 10"
              color="primary"
              @click="updatePhone()"
            >
              Сохранить
            </v-btn>
          </v-form>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <span>Изменить пароль</span>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-form ref="password">
            <span>Новый пароль</span>
            <v-text-field
              v-model="accountSettings.pass.newPassword"
              type="password"
              :rules="passwordRules"
              label="Введите новый пароль"
            />
            <span>Текущий пароль</span>
            <v-text-field
              v-model="accountSettings.pass.currentPassword"
              type="password"
              :rules="passwordRules"
              label="Введите текущий пароль"
            />
            <v-btn
              :disabled="
                accountSettings.pass.newPassword.length < 5 ||
                accountSettings.pass.currentPassword.length < 5
              "
              color="primary"
              @click="changePassword()"
            >
              Сохранить
            </v-btn>
          </v-form>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <span>Изменить электронную почту</span>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-form ref="email">
            <v-text-field
              v-model="accountSettings.email.userEmail"
              :rules="emailRules"
              :placeholder="accountSettings.email.userEmail"
            />
            <v-btn
              :disabled="accountSettings.email.userEmail.length < 6"
              color="primary"
              @click="changeEmail()"
            >
              Сохранить
            </v-btn>
          </v-form>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <span>Удалить пользователя</span>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-form ref="delete">
            <span
              ><strong>Внимание!</strong> Вы не сможете отменить позже это
              действие, для удаления пользователя введите текущий пароль</span
            >
            <v-text-field
              v-model="accountSettings.delete.currentPassword"
              :rules="passwordRules"
              type="password"
              placeholder="Текущий пароль пользователя"
            />
            <v-btn
              :disabled="accountSettings.delete.currentPassword.length < 5"
              color="primary"
              @click="deleteAccount()"
            >
              Удалить
            </v-btn>
          </v-form>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script>
import { name, email, password, phoneNumber } from '~/util/validation'
import { validationMessages } from '~/util/validationMessages.js'

export default {
  middleware: 'authorized',

  data() {
    return {
      accountSettings: {
        info: {
          firstName: this.$auth.user.firstName,
          lastName: this.$auth.user.lastName,
        },
        phone: {
          phoneNumber: '',
        },
        pass: {
          newPassword: '',
          currentPassword: '',
        },
        email: {
          userEmail: this.$auth.user.email,
        },
        delete: {
          currentPassword: '',
        },
      },
      firstNameRules: [
        (v) => !!v || validationMessages.requiredField,
        (v) => name.validateLength(v) || validationMessages.firstNameLength,
      ],
      lastNameRules: [
        (v) => !!v || validationMessages.requiredField,
        (v) => name.validateLength(v) || validationMessages.lastNameLength,
      ],
      phoneRules: [
        (v) => !!v || validationMessages.requiredField,
        (v) =>
          phoneNumber.validateFormat(v) || validationMessages.phoneNotValid,
      ],
      emailRules: [
        (v) => !!v || validationMessages.requiredField,
        (v) => email.validateFormat(v) || validationMessages.emailNotValid,
      ],
      passwordRules: [
        (v) => !!v || validationMessages.requiredField,
        (v) => password.validateLength(v) || validationMessages.passwordLength,
      ],
    }
  },
  methods: {
    async updateUserInfo() {
      const isValid = this.$refs.info.validate()
      if (!isValid) return

      if (
        this.accountSettings.info.firstName === this.$auth.user.firstName &&
        this.accountSettings.info.lastName === this.$auth.user.lastName
      )
        return

      const updatedData = {
        propsToUpdate: {
          firstName: this.accountSettings.info.firstName,
          lastName: this.accountSettings.info.lastName,
        },
      }
      try {
        const res = await this.$axios.$patch(
          `${process.env.BACKEND_URL}/user/`,
          updatedData
        )
        const updatedUser = { ...this.$auth.user, ...res.user }
        this.$auth.setUser(updatedUser)
      } catch (err) {
        console.error(err)
      }
    },
    async updatePhone() {
      const isValid = this.$refs.phone.validate()
      if (!isValid) return

      const phone = this.accountSettings.phone.phoneNumber
      try {
        await this.$axios.$patch(`${process.env.BACKEND_URL}/user/phone`, {
          phone,
        })
      } catch (err) {
        console.error(err)
      }
    },
    async changePassword() {
      const isValid = this.$refs.password.validate()
      if (!isValid) return
      const form = {
        newPassword: this.accountSettings.pass.newPassword,
        currentPassword: this.accountSettings.pass.currentPassword,
      }
      try {
        await this.$axios.$patch(
          `${process.env.BACKEND_URL}/user/password`,
          form
        )
        await this.$auth.logout()
        this.$router.push('/user/sign-in')
      } catch (err) {
        console.error(err)
      }
    },
    async changeEmail() {
      const isValid = this.$refs.email.validate()
      if (!isValid) return

      const email = this.accountSettings.email.userEmail.toLowerCase()
      if (email === this.$auth.user.email) return

      try {
        const res = await this.$axios.$patch(
          `${process.env.BACKEND_URL}/user/email`,
          { email }
        )
        const updatedUser = { ...this.$auth.user }
        updatedUser.email = res.newEmail
        this.$auth.setUser(updatedUser)
        this.$router.push('/user/sign-in')
      } catch (err) {
        console.error(err)
      }
    },
    async deleteAccount() {
      const isValid = this.$refs.delete.validate()
      if (!isValid) return

      const password = this.accountSettings.delete.currentPassword
      try {
        await this.$axios.$delete(`${process.env.BACKEND_URL}/user/`, {
          data: { password },
        })
        await this.$auth.logout()
        this.$router.push('/user/sign-up')
      } catch (err) {
        console.error(err)
      }
    },
    changeTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    },
  },
}
</script>

<style scoped>
.user_panel {
  max-width: 600px;
  margin: 2% auto;
}
</style>
