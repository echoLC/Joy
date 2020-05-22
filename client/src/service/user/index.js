import http from '../http'

export default {
  getUser () {
    return http.get('user')
  }
}
