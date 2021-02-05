exports.group = async ({ data, send, service }) => {
  send('send_group_msg', {
    group_id: data.group_id,
    message: [
      {
        type: 'image',
        data: {
          file: await service.qrcode.create(data.message)
        }
      }
    ]
  })
}

exports.private = async ({ data, send, service }) => {
  send('send_private_msg', {
    user_id: data.user_id,
    message: [
      {
        type: 'image',
        data: {
          file: await service.qrcode.create(data.message)
        }
      }
    ]
  })
}
