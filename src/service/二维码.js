const qr = require('qr-image')
const fs = require('fs')
const os = require('os')
const path = require('path')
const rimraf = require('rimraf')

// 每次程序启动清理之前的文件
const tmpdir = path.join(os.tmpdir(), 'qqbot_qrcode')
if (fs.existsSync(tmpdir)) {
  rimraf.sync(tmpdir)
}
fs.mkdirSync(tmpdir)

exports.create = async text => {
  return new Promise((resolve, reject) => {
    const filename = path.join(tmpdir, `${Date.now()}.png`)
    const stream = fs.createWriteStream(filename)
    qr.image(text.replace(/^(二维码|qr(code)?)\s+/i, ''), {
      type: 'png',
      size: 10,
      margin: 2
    }).pipe(stream)
    stream.on('finish', () => resolve('file://' + filename))
  })
}
