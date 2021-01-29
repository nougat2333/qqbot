const 二维码 = require('../service/二维码')

exports.group = async (send, data) => {
  send('send_group_msg', {
    group_id: data.group_id,
    message: [
      {
        type: 'image',
        data: {
          file: await 二维码.create(data.message)
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
        type: 'image',
        data: {
          file: await 二维码.create(data.message)
        }
      }
    ]
  })
}
