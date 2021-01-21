const { listen } = require('./bot/ws')
const sendDogText = require('./handler/send-dog-text')

listen(data => {
  console.log(data)

  if (data.message_type === 'group' && data.message === '舔狗日记') {
    sendDogText(data)
  }
})
