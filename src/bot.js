const WebSocket = require('ws')
const cron = require('node-cron')
const glob = require('glob')
const path = require('path')

const config = require('./config')
const service = glob.sync(path.join(__dirname, 'service', '*.js')).reduce(
  (obj, file) => ({
    ...obj,
    [path.basename(file, '.js')]: require(file)
  }),
  {}
)
const ws = new WebSocket(config.bot.ws)

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
  if (config.dev) {
    console.log(data)
  }
  for (const [key, value] of config.bot.handler) {
    if (
      key.test(data.message) &&
      typeof value[data.message_type] === 'function'
    ) {
      value[data.message_type]({ send, data, service, config })
      return
    }
  }
}

function schedule() {
  for (const [key, value] of config.bot.schedule) {
    if (typeof value === 'function') {
      cron.schedule(key, () => value({ send, service, config }))
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
