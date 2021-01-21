const { listen } = require('./bot/ws')
const sendDogDiary = require('./handler/send-dog-diary')

listen(data => {
  // console.log(data)

  if (data.message_type === 'group' && data.message === '舔狗日记') {
    sendDogDiary(data)
  }
})
