import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_ERROR, AUTH_LOGOUT } from '../mutation-types'

export default store => {
  store.subscribe((mutation, state) => {
    switch (mutation.type) {
      case AUTH_SUCCESS:
        localStorage.setItem('token', mutation.payload)
        break
      case AUTH_REQUEST:
      case AUTH_ERROR:
      case AUTH_LOGOUT:
        localStorage.removeItem('token')
        break
    }
  })
}
