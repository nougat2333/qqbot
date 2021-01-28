const config = require('../config')

module.exports = send => {
  send('send_private_msg', {
    user_id: config.下班提醒_QQ号,
    message: [
      {
        type: 'text',
        data: {
          text: '下班, 别浪费电!'
        }
      }
    ]
  })
}
