module.exports = ({ send, service, config }) => {
  send('send_private_msg', {
    user_id: config.off_work.qq,
    message: [
      {
        type: 'text',
        data: {
          text: service.off_work.get()
        }
      }
    ]
  })
}
