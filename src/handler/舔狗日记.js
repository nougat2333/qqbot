const 舔狗日记 = require('../service/舔狗日记')

exports.group = async (send, data) => {
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
          text: await 舔狗日记.get()
        }
      }
    ]
  })
}

exports.private = async (send, data) => {
  send('send_private_msg', {
    user_id: data.user_id,
    message: [
      {
        type: 'text',
        data: {
          text: await 舔狗日记.get()
        }
      }
    ]
  })
}
