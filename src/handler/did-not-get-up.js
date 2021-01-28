const { send } = require('../bot/ws')
const didNotGetUp = require('../service/did-not-get-up')

module.exports = {
  async group(data) {
    send('send_group_msg', {
      group_id: data.group_id,
      message: [
        {
          type: 'text',
          data: {
            text: didNotGetUp.get()
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
            text: didNotGetUp.get()
          }
        }
      ]
    })
  }
}
