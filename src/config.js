// 是否开发环境
exports.dev = process.env.NODE_ENV === 'development'

// 机器人配置
exports.bot = {
  // go-cqhttp websocket url
  ws: 'ws://0.0.0.0:6700',

  // 消息处理: 正则匹配触发对应的回复
  handler: new Map([
    [/^JS\s+/i, require('./handler/js_vm')],
    [/^(二维码|qr(code)?)\s+/i, require('./handler/qrcode')],
    [/舔狗日记/, require('./handler/licking_dog')]
  ]),

  // 定时任务: https://www.npmjs.com/package/node-cron
  schedule: new Map([
    // 周一到周五的 12:30 和 18:30 提醒下班
    ['0 30 12,18 * * 1-5', require('./schedule/off_work')]
  ])
}

// 消息处理配置
exports.handler = {}

// 定时任务配置
exports.schedule = {
  // 下班提醒
  off_work: {
    qq: 397909414
  }
}
