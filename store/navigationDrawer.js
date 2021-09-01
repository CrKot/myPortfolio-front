export const state = () => ({
  drawer: true,
})

export const mutations = {
  setDrawer(state, value) {
    state.drawer = value
  },
}

export const actions = {
  toggleDrawer(context, value) {
    context.commit('setDrawer', value)
  },
}
