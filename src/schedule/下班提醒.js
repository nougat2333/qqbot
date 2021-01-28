module.exports = send => {
  send('send_private_msg', {
    user_id: 397909414,
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
