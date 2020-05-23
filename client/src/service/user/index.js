import http from '../http'

export default {
  getUser (id) {
    return http.get('user', { id })
  },

  login (data) {
    return http.post('login', data)
  },

  register (data) {
    return http.post('register', data)
  }
}

