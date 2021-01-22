const { send } = require('../bot/ws')
const lickingDogDiary = require('../service/licking-dog-diary')

module.exports = {
  async group(data) {
    send('send_group_msg', {
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
            text: await lickingDogDiary.get()
          }
        }
      ]
    })
  },
  async private(data) {
    send('send_private_msg', {
      user_id: data.user_id,
      message: [
        {
          type: 'text',
          data: {
            text: await lickingDogDiary.get()
          }
        }
      ]
    })
  }
}
