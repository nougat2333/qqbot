const { listen } = require('./bot/ws')
const 舔狗日记 = require('./handler/舔狗日记')

listen(data => {
  // console.log(data)

  if (data.message_type === 'group' && data.message.includes('舔狗日记')) {
    舔狗日记(data)
  }
})
