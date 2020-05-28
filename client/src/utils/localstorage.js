export default {
  setItem (key, data) {
    window.localStorage.setItem(key, data)
  },
  getItem (key) {
    return window.localStorage.getItem(key)
  },
  remove (key) {
    localStorage.removeItem(key)
  }
}
