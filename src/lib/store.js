var store = localStorage

export default {
  get: function (key) {
    return store.getItem(key)
  },
  del: function (key) {
      store.removeItem(key)
  },
  put: function(key, item) {
      store.setItem(key, item)
  }
}
