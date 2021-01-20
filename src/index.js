const { listen, reply, send } = require('./bot')

listen(data => {
  console.log(data)

  if (data.message_type === 'group') {
    if (data.group_id === 999999999) {
      reply('send_group_msg', {
        group_id: data.group_id,
        message: [
          {
            type: 'text',
            data: {
              text: 'ws send'
            }
          }
        ]
      })
      // send('send_group_msg', {
      //   group_id: data.group_id,
      //   message: [
      //     {
      //       type: 'text',
      //       data: {
      //         text: 'http send'
      //       }
      //     }
      //   ]
      // })
    }
  }
})
