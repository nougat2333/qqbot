# qqbot

> go-cqhttp 的 Node.js 机器人示例

## 使用说明

在 https://github.com/Mrs4s/go-cqhttp/releases 下载可执行文件, 放到 go-cqhttp 目录中, 并赋予执行权限

安装 Node.js 环境: 在根目录执行 `npm install` 安装依赖

### 开发环境

运行 `go-cqhttp/下载的文件`, 根据提示填写 QQ 号和密码等信息, 然后再次运行

在根目录执行 `npm run dev`, 然后根据 https://docs.go-cqhttp.org 文档进行开发

### 生产环境 (Linux)

安装 screen 工具: 后台运行 `go-cqhttp/下载的文件` (screen 命令用法自行搜索)

安装 pm2 工具: 在根目录执行 `npm start`

代码更新后, 不停机重启: 在根目录执行 `pm2 reload qqbot`

> 说明: 因为 go-cqhttp 登录需要交互操作, pm2 不支持, 所以我这里用 screen 跑 go-cqhttp, 你也可以用其它方法后台运行

## 代码说明

```js
const { listen, reply, send } = require('./bot')
```

- `listen(data => {})`: 监听所有消息, 具体信息可以打印 data 查看
- `reply(action, params)`: websocket 被动回复消息 (用户发一句, 机器人回复的场景)
- `send(action, params)`: http 主动发送消息 (机器人定时发送之类的, 主动推送场景)

action 和 params 可以查看 https://docs.go-cqhttp.org/api 文档进行开发
