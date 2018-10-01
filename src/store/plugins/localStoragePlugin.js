import {
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_ERROR,
  AUTH_LOGOUT,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_ERROR
} from '../mutation-types'

export default store => {
  store.subscribe((mutation, state) => {
    switch (mutation.type) {
      case AUTH_SUCCESS:
      case REGISTER_SUCCESS:
        localStorage.setItem('token', mutation.payload)
        break
      case AUTH_REQUEST:
      case AUTH_ERROR:
      case REGISTER_REQUEST:
      case REGISTER_ERROR:
      case AUTH_LOGOUT:
        localStorage.removeItem('token')
        break
    }
  })
}
