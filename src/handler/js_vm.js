exports.group = async ({ data, send, service }) => {
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
          text: await service.js_vm.run(data.message)
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
        type: 'text',
        data: {
          text: await service.js_vm.run(data.message)
        }
      }
    ]
  })
}
