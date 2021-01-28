const WebSocket = require('ws')
const cron = require('node-cron')
const config = require('./config')

const ws = new WebSocket(config.wsUrl)

function send(action, params) {
  ws.send(JSON.stringify({ action, params }))
}

function listen(callback) {
  ws.on('message', data => {
    try {
      callback(JSON.parse(data))
    } catch (e) {
      console.error(e)
    }
  })
}

function handler(data) {
  if (config.isDev) {
    console.log(data)
  }
  for (const [key, value] of config.handlerMap) {
    if (
      key.test(data.message) &&
      typeof value[data.message_type] === 'function'
    ) {
      value[data.message_type](send, data)
      if (!config.handlerAll) {
        return
      }
    }
  }
}

function schedule() {
  for (const [key, value] of config.scheduleMap) {
    if (typeof value === 'function') {
      cron.schedule(key, () => value(send))
    }
  }
}

module.exports = {
  ws,
  send,
  listen,
  handler,
  schedule
}
