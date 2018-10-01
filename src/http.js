import axios from 'axios'
import store from './store/'

const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_ROOT_API
})

axiosInstance.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
  return config
})

axiosInstance.interceptors.response.use(response => {
  return response
}, error => {
  if (error.response) {
    const status = error.response.status
    if (status === 400 || status === 401) {
      if (!(error.config.method === 'post' && /\/login\/?$/.test(error.config.url))) {
        store.dispatch('logout') // token is invalid, logout
      }
    }
    return Promise.reject(error.response.data.errors)
  }
  const errors = { message: error.message }
  return Promise.reject(errors)
})

export default axiosInstance
