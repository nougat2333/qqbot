module.exports = {
  IS_DEV: process.env.NODE_ENV === 'development',
  HTTP_BASE_URL: 'http://0.0.0.0:5700',
  WS_BASE_URL: 'ws://0.0.0.0:6700',
  HANDLER_MAP: new Map([
    [/舔狗日记/, require('./handler/舔狗日记')],
    [/没起床/, require('./handler/没起床')]
  ])
}
