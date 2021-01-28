const { listen, handler, schedule } = require('./bot')

// 监听消息 并按照 src/config.js 处理
listen(handler)

// 定时任务
schedule()
