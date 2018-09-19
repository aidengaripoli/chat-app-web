import http from './http'

class AuthService {
  register () {

  }

  login (user) {
    return http.post('/user/login', user)
  }

  user () {
    return http.get('/user/profile')
  }
}

export default new AuthService()
