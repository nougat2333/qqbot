const axios = require('axios')

const http = axios.create({
  baseURL: 'http://0.0.0.0:5700',
  method: 'POST'
})

module.exports = {
  http,
  send(action, params) {
    return http.post({ url: action, method: 'POST', data: params })
  }
}
