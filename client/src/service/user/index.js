import http from '../http'

export default {
  getUser () {
    return http.get('user')
  },

  login (data) {
    return http.post('login', data)
  },

  register (data) {
    return http.post('register', data)
  }
}

