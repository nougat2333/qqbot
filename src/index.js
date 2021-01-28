const { listen } = require('./bot/ws')

const isDev = process.env.NODE_ENV === 'development'

// 正则匹配 调用对应的 handler
const handlerMap = new Map()
handlerMap.set(/舔狗日记/, require('./handler/licking-dog-diary'))
handlerMap.set(/没起床/, require('./handler/did-not-get-up'))

listen(data => {
  if (isDev) {
    console.log(data)
  }

  for (const [key, value] of handlerMap) {
    if (key.test(data.message) && value[data.message_type]) {
      value[data.message_type](data)
      // 如果需要 "一个关键词触发多个 handler", 可删除 return, 但会降低性能
      return
    }
  }
})
