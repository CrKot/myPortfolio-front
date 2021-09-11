<template>
  <v-dialog v-model="dialog" max-width="600px">
    <template #activator="{ on, attrs }">
      <v-btn x-small color="warning" text outlined v-bind="attrs" v-on="on"
        >Отправьте мне сообщение</v-btn
      >
    </template>
    <v-card>
      <v-card-title
        ><span
          >В данной форме вы можете отправить мне любое сообщение, буду рад
          любому фидбэку, предложению или критике</span
        ></v-card-title
      >
      <v-card-text>
        <v-textarea
          v-model="message"
          outlined
          label="Введите сообщение"
        ></v-textarea>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dialog = false">
          Закрыть
        </v-btn>
        <v-btn color="blue darken-1" text @click="sendMessage">
          Отправить
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
const API_BOT = process.env.API_BOT

export default {
  data() {
    return {
      dialog: false,
      message: '',
    }
  },
  methods: {
    async sendMessage() {
      if (!this.message) return
      const message = encodeURI(this.message)
      try {
        await this.$axios.$get(
          `https://api.telegram.org/${API_BOT}/sendMessage?disable_web_page_preview=false&chat_id=-1001201171209&text=${message}`
        )
      } catch {
        console.error('не отправлено')
      }
      this.dialog = !this.dialog
    },
  },
}
</script>