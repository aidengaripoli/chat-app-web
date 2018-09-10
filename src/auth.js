import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:80'
})

axiosInstance.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
  return config
})

class Auth {
  register () {

  }

  login (user) {
    return axiosInstance.post('/user/login', user)
  }

  user () {

  }
}

export default new Auth()
