const { VM } = require('vm2')
const axios = require('axios')

const vmOptions = {
  timeout: 10000,
  sandbox: {
    get: (url, params, headers) => request({ url, params, headers }),
    post: (url, data, headers) => request({ url, data, headers }),
    dom: require('cheerio').load,
    qs: require('querystring')
  }
}

async function request(options) {
  try {
    // 禁止带端口或者localhost的url
    if (/(127\.0\.0\.1|0\.0\.0\.0|localhost|:\d+)/.test(options.url)) {
      throw new Error('url 不合法')
    }
    // 禁止自动重定向
    options.maxRedirects = 0
    return await axios(options)
  } catch (e) {
    return { data: e.message }
  }
}

// 替换 &
function cleanInput(input) {
  return input
    .replace(/^JS/i, '')
    .replace(/&#91;/g, '[')
    .replace(/&#93;/g, ']')
    .replace(/&amp;/g, '&')
    .trim()
}

// 防止返回内容过长 取前1000
function cleanOutput(output) {
  output = (output || '').toString()
  if (output.length === 0) {
    return '别爱我 没结果'
  }
  if (output.length < 1000) {
    return output
  }
  return output.slice(0, 1000) + '\n(为了避免刷屏, 仅显示前 1000 字符)'
}

exports.exec = input => {
  return new Promise(resolve => {
    const safeResolve = output => resolve(cleanOutput(output))
    try {
      const code = cleanInput(input)
      const vm = new VM(vmOptions)
      const hasCallback = code.includes('callback(')
      const result = vm.run(
        hasCallback ? `(function (callback) { ${code} })` : code
      )
      return typeof result === 'function' && hasCallback
        ? result(safeResolve)
        : safeResolve(result)
    } catch (e) {
      console.error(e)
      return safeResolve(e.message)
    }
  })
}
