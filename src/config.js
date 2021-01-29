// 是否开发环境
exports.isDev = process.env.NODE_ENV === 'development'

// go-cqhttp websocket url
exports.wsUrl = 'ws://0.0.0.0:6700'

// 是否允许同一条消息触发多个 handler, 一般不需要开启
exports.handlerAll = false

// 正则匹配, 触发对应的回复
exports.handlerMap = new Map([
  [/^JS\s+/i, require('./handler/运行JS')],
  [/^(二维码|qr(code)?)\s+/i, require('./handler/二维码')],
  [/舔狗日记/, require('./handler/舔狗日记')],
  [/没起床/, require('./handler/没起床')]
])

// 定时任务 https://www.npmjs.com/package/node-cron
exports.scheduleMap = new Map([
  // 周一到周五的 12:30 和 18:30 提醒下班
  ['0 30 12,18 * * 1-5', require('./schedule/下班提醒')]
])

// 定时下班提醒的私聊 QQ 号码
exports.下班提醒_QQ号 = 397909414
