const WebSocket = require('ws')
const { WS_BASE_URL } = require('../config')

const ws = new WebSocket(WS_BASE_URL)

module.exports = {
  ws,
  send(action, params) {
    ws.send(JSON.stringify({ action, params }))
  },
  listen(callback) {
    ws.on('message', data => {
      try {
        callback(JSON.parse(data))
      } catch (e) {
        console.error(e)
      }
    })
  }
}
