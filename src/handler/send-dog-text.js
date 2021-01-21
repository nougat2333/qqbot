const { send } = require('../bot/ws')
const dog = require('../service/dog')

module.exports = async data => {
  send('send_group_msg', {
    group_id: data.group_id,
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
