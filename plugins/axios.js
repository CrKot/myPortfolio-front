export default function ({ $axios, app }) {
  $axios.onError((error) => {
    app.store.dispatch('alert/showMessage', {
      type: 'error',
      message: error.message,
      duration: 4000,
    })
  })
  $axios.onResponse((response) => {
    if (response.data.success === false) {
      const getError = () => {
        if (response.data.errors) {
          response.data.errors.forEach((error) => {
            app.store.dispatch('alert/showMessage', {
              type: 'error',
              message: error.message,
              duration: 4000,
            })
          })
          return
        }
        if (response.data.message) {
          app.store.dispatch('alert/showMessage', {
            type: 'error',
            message: response.data.message,
            duration: 4000,
          })
        } else {
          app.store.dispatch('alert/showMessage', {
            type: 'error',
            message: 'Unknown error',
            duration: 4000,
          })
        }
      }
      throw new Error(getError())
    }
    if (response.data.success && response.data.message) {
      app.store.dispatch('alert/showMessage', {
        type: 'success',
        message: response.data.message,
        duration: 2500,
      })
    }
  })
}
