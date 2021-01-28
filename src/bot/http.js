const axios = require('axios')
const { HTTP_BASE_URL } = require('../config')

const http = axios.create({
  baseURL: HTTP_BASE_URL,
  method: 'POST'
})

module.exports = {
  http,
  send(action, params) {
    return http.post({ url: action, method: 'POST', data: params })
  }
}
