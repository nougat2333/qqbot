const axios = require('axios')

const http = axios.create({
  baseURL: 'http://0.0.0.0:5700',
  method: 'POST'
})

const send = (action, params) =>
  http.post({ url: action, method: 'POST', data: params })

module.exports = {
  http,
  send
}
