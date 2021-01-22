const axios = require('axios')

module.exports = {
  async get() {
    try {
      const { data } = await axios('https://v1.alapi.cn/api/dog?format=text')
      return data
    } catch (e) {
      return '就这?'
    }
  }
}
