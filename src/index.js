const bot = require('./bot')
const dog = require('./service/dog')

bot.listen(async data => {
  console.log(data)

  if (!('message' in data)) {
    return
  }

  // 他人发送消息带有 "舔狗" 二字
  if (data.message.includes('舔狗')) {
    if (data.message_type === 'group') {
      // 群消息 回复
      bot.send('send_group_msg', {
        group_id: data.group_id,
        message: [
          {
            type: 'reply',
            data: {
              id: data.message_id
            }
          },
          {
            type: 'text',
            data: {
              text: await dog.get()
            }
          }
        ]
      })
    } else if (data.message_type === 'private') {
      // 私聊消息 回复
      bot.send('send_private_msg', {
        user_id: data.user_id,
        message: [
          {
            type: 'text',
            data: {
              text: await dog.get()
            }
          }
        ]
      })
    }
  }
})
