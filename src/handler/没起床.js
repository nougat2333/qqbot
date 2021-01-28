const 没起床 = require('../service/没起床')

exports.group = (send, data) => {
  send('send_group_msg', {
    group_id: data.group_id,
    message: [
      {
        type: 'text',
        data: {
          text: 没起床.get()
        }
      }
    ]
  })
}

exports.private = (send, data) => {
  send('send_private_msg', {
    user_id: data.user_id,
    message: [
      {
        type: 'text',
        data: {
          text: 没起床.get()
        }
      }
    ]
  })
}
