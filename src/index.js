const { listen } = require('./bot/ws')

// 正则匹配 调用对应的 handler
const handlerMap = new Map()
handlerMap.set(/舔狗日记/, require('./handler/licking-dog-diary'))

listen(data => {
  // console.log(data)

  for (const [key, value] of handlerMap) {
    if (key.test(data.message) && value[data.message_type]) {
      value[data.message_type](data)
      return
    }
  }
})
