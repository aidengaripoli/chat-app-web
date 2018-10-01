import http from './http'

class AuthService {
  register (details) {
    return http.post('/user/register', details)
  }

  login (user) {
    return http.post('/user/login', user)
  }

  user () {
    return http.get('/user/profile')
  }
}

export default new AuthService()
