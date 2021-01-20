const WebSocket = require('ws')

const ws = new WebSocket('ws://0.0.0.0:6700')

const reply = (action, params) => ws.send(JSON.stringify({ action, params }))

const listen = callback => {
  ws.on('message', data => {
    try {
      callback(JSON.parse(data))
    } catch (e) {
      console.error(e)
    }
  })
}

module.exports = {
  ws,
  reply,
  listen
}
