const axios = require('axios')

exports.get = async () => {
  try {
    const { data } = await axios('https://v1.alapi.cn/api/dog?format=text')
    return data
  } catch (e) {
    return '舔不动了!'
  }
}
