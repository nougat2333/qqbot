const axios = require('axios')

async function get() {
  try {
    const { data } = await axios('https://v1.alapi.cn/api/dog?format=text')
    return data
  } catch (e) {
    return '就这?'
  }
}

module.exports = {
  get
}
