import { delay } from '../util'

export const state = () => ({
  visible: false,
  type: 'info',
  message: '',
})

export const mutations = {
  showAlert(state, { message, type }) {
    state.type = type
    state.message = message
    state.visible = true
  },
  hideAlert(state) {
    state.visible = false
  },
  resetAlert(state) {
    state.type = 'info'
    state.message = ''
  },
}

export const actions = {
  async showMessage(context, { message, type, duration }) {
    if (context.state.message !== '') {
      return
    }
    context.commit('showAlert', { message, type })
    await delay(duration)
    context.commit('hideAlert')
    await delay(400)
    context.commit('resetAlert')
  },
}
