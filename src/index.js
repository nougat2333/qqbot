const { listen } = require('./bot/ws')
const { IS_DEV, HANDLER_MAP } = require('./config')

listen(data => {
  if (IS_DEV) {
    console.log(data)
  }

  // 正则匹配 调用对应的 handler
  for (const [key, value] of HANDLER_MAP) {
    if (key.test(data.message) && value[data.message_type]) {
      value[data.message_type](data)
      // 如果一条消息允许触发多个 handler, 可删除 return, 但会降低性能
      return
    }
  }
})
